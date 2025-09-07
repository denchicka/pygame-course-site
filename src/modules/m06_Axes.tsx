import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Разобраться с системой координат PyGame: где начало, куда растут оси X и Y, как работать с центром экрана,
          сеткой и позиционированием объектов (включая выравнивание по центру через <code>get_rect(center=...)</code>).
        </p>
      </Section>

      <Section title="Система координат">
        <ul>
          <li><strong>(0, 0)</strong> — левый верхний угол экрана.</li>
          <li>Ось <strong>X</strong> растёт вправо; ось <strong>Y</strong> — вниз.</li>
          <li>Координата — целое число пикселей. Для плавных расчётов можно хранить <code>float</code>, а рисовать <code>int(...)</code>.</li>
        </ul>
      </Section>

      <Section title="Оси и сетка (визуальная помощь)">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_width, screen_height = 900, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Оси и сетка')
clock = pygame.time.Clock()

background_color = (24, 26, 32)
grid_color = (45, 50, 62)
axis_color = (120, 140, 200)

center_x = screen_width // 2
center_y = screen_height // 2

def draw_grid(surface: pygame.Surface, step: int = 50) -> None:
    w, h = surface.get_width(), surface.get_height()
    for x in range(0, w, step):
        pygame.draw.line(surface, grid_color, (x, 0), (x, h), 1)
    for y in range(0, h, step):
        pygame.draw.line(surface, grid_color, (0, y), (w, y), 1)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill(background_color)
    draw_grid(screen_surface, 50)

    # оси через центр
    pygame.draw.line(screen_surface, axis_color, (center_x, 0), (center_x, screen_height), 1)
    pygame.draw.line(screen_surface, axis_color, (0, center_y), (screen_width, center_y), 1)

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Центрирование объектов: get_rect(..., center=...)">
        <p>
          Часто надо выровнять спрайт/прямоугольник по центру. У любого <code>Surface</code> и <code>Rect</code> есть метод
          <code>get_rect</code>, который принимает «якорь» (например, <code>center</code>, <code>topleft</code> и т.п.).
        </p>
        <CodeBlock language="python">{`rect_surface = pygame.Surface((120, 80), pygame.SRCALPHA)
pygame.draw.rect(rect_surface, (80, 160, 240), rect_surface.get_rect(), 2, border_radius=10)

center_x = 900 // 2
center_y = 600 // 2

rect_pos = rect_surface.get_rect(center=(center_x, center_y))  # центрируем
screen_surface.blit(rect_surface, rect_pos)`}</CodeBlock>
      </Section>

      <Section title="Координаты мыши и «движущаяся точка»">
        <CodeBlock language="python">{`dot_radius = 8
dot_x, dot_y = 450, 300

def clamp(value: float, a: float, b: float) -> float:
    return max(a, min(b, value))

mouse_x, mouse_y = pygame.mouse.get_pos()
dot_x = clamp(mouse_x, dot_radius, screen_width - dot_radius)
dot_y = clamp(mouse_y, dot_radius, screen_height - dot_radius)
pygame.draw.circle(screen_surface, (255, 200, 0), (int(dot_x), int(dot_y)), dot_radius, 0)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          <code>clamp</code> полезна для удержания объектов в пределах экрана.
        </p>
      </Section>

      <Section title="Собранный пример">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_width, screen_height = 900, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Оси X/Y — пример')
clock = pygame.time.Clock()

background_color = (24, 26, 32)
grid_color = (45, 50, 62)
axis_color = (120, 140, 200)
text_color = (230, 230, 235)
dot_color = (255, 200, 0)

font_object = pygame.font.SysFont(None, 20)

center_x = screen_width // 2
center_y = screen_height // 2
dot_radius = 8

def draw_grid(surface: pygame.Surface, step: int = 50) -> None:
    w, h = surface.get_width(), surface.get_height()
    for x in range(0, w, step):
        pygame.draw.line(surface, grid_color, (x, 0), (x, h), 1)
    for y in range(0, h, step):
        pygame.draw.line(surface, grid_color, (0, y), (w, y), 1)

def draw_axes(surface: pygame.Surface, cx: int, cy: int) -> void:  # псевдо-сигнатура для читабельности
    pygame.draw.line(surface, axis_color, (cx, 0), (cx, surface.get_height()), 1)
    pygame.draw.line(surface, axis_color, (0, cy), (surface.get_width(), cy), 1)
    pygame.draw.circle(surface, axis_color, (cx, cy), 3, 0)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    mouse_x, mouse_y = pygame.mouse.get_pos()
    dot_x = max(dot_radius, min(screen_width - dot_radius, mouse_x))
    dot_y = max(dot_radius, min(screen_height - dot_radius, mouse_y))

    screen_surface.fill(background_color)
    draw_grid(screen_surface, 50)
    draw_axes(screen_surface, center_x, center_y)

    rect_surface = pygame.Surface((120, 80), pygame.SRCALPHA)
    pygame.draw.rect(rect_surface, (80, 160, 240), rect_surface.get_rect(), 2, border_radius=10)
    rect_pos = rect_surface.get_rect(center=(center_x, center_y))
    screen_surface.blit(rect_surface, rect_pos)

    info = [
        f"origin (0,0) — левый верх",
        f"center=({center_x},{center_y})",
        f"mouse=({mouse_x},{mouse_y})"
    ]
    for i, msg in enumerate(info):
        text_surface = pygame.font.SysFont(None, 20).render(msg, True, text_color)
        screen_surface.blit(text_surface, (8, 8 + i*18))

    pygame.draw.circle(screen_surface, dot_color, (int(dot_x), int(dot_y)), dot_radius, 0)

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Сетка:</strong> сделай шаг сетки настраиваемым (<code>step</code> хранить в переменной), добавь переключение <kbd>1</kbd>/<kbd>2</kbd>/<kbd>3</kbd> для значений 25/50/100.</li>
          <li><strong>Щелчок по клетке:</strong> по клику мышью подсвети ближайшую клетку сетки (подсказка: деление и умножение на <code>step</code>).</li>
          <li><strong>Привязка к сетке:</strong> круг привязывается к центрам клеток (округление до кратного <code>step</code>).</li>
          <li><strong>Отладка прямоугольника:</strong> выведи <code>rect.topleft</code>, <code>rect.center</code>, <code>rect.bottomright</code> для наглядности.</li>
          <li><strong>Ограничение:</strong> реализуй функцию <code>clamp_rect(rect, bounds)</code>, чтобы прямоугольник не выходил за экран.</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Клетка под мышью
cell_x = (mouse_x // step) * step
cell_y = (mouse_y // step) * step
pygame.draw.rect(screen_surface, (90,120,200), (cell_x, cell_y, step, step), 2)`}</CodeBlock>
        <CodeBlock language="python">{`# Привязка к центру клетки
snap_x = (mouse_x // step) * step + step // 2
snap_y = (mouse_y // step) * step + step // 2`}</CodeBlock>
        <CodeBlock language="python">{`# Clamp для rect
def clamp_rect(rect: pygame.Rect, bounds: pygame.Rect) -> pygame.Rect:
    if rect.left < bounds.left: rect.left = bounds.left
    if rect.top < bounds.top: rect.top = bounds.top
    if rect.right > bounds.right: rect.right = bounds.right
    if rect.bottom > bounds.bottom: rect.bottom = bounds.bottom
    return rect`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Путаница: думать, что <code>Y</code> растёт вверх — в PyGame он растёт вниз.</li>
          <li>Рисовать до <code>fill()</code> — объекты «затираются» фоном.</li>
          <li>Использовать дробные координаты без округления на этапе рисования — «дрожащие» пиксели.</li>
          <li>Неправильная центровка: изменять <code>rect.x/y</code> вместо работы с <code>rect.center</code>.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m06.zip">m06.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m06.zip">m06.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
