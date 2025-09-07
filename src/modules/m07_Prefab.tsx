import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Собирать сложные объекты из простых фигур (<code>pygame.draw</code>), выносить повторяющийся код
          в функции и классы, соблюдать порядок рисования (слои).
        </p>
      </Section>

      <Section title="Идея префабов (prefab)">
        <ul>
          <li><strong>Функции</strong> для статичных объектов: <code>draw_house(surface, pos, scale)</code>, <code>draw_tree(...)</code>.</li>
          <li><strong>Классы</strong> для динамики: <code>Car.update(dt)</code>, <code>Car.draw(surface)</code>.</li>
          <li><strong>Слои</strong>: фон → статика → динамика → интерфейс (текст/подсказки).</li>
        </ul>
      </Section>

      <Section title="Дом из фигур (функция)">
        <CodeBlock language="python">{`def draw_house(surface: pygame.Surface, pos: tuple[int, int], scale: float = 1.0) -> None:
    x, y = pos
    w, h = int(120*scale), int(80*scale)
    base = pygame.Rect(x, y, w, h)
    roof = [(x, y), (x + w//2, y - int(50*scale)), (x + w, y)]
    door_w, door_h = int(24*scale), int(38*scale)
    door = pygame.Rect(x + w//2 - door_w//2, y + h - door_h, door_w, door_h)
    win = pygame.Rect(x + int(12*scale), y + int(16*scale), int(26*scale), int(22*scale))

    pygame.draw.rect(surface, (204, 163, 122), base, 0)
    pygame.draw.polygon(surface, (160, 80, 60), roof, 0)
    pygame.draw.rect(surface, (90, 60, 40), door, 0, border_radius=4)
    pygame.draw.rect(surface, (200, 220, 255), win, 0, border_radius=4)
    pygame.draw.line(surface, (150, 190, 230), (win.centerx, win.top), (win.centerx, win.bottom), 2)
    pygame.draw.line(surface, (150, 190, 230), (win.left, win.centery), (win.right, win.centery), 2)`}</CodeBlock>
      </Section>

      <Section title="Дерево и персонаж (функции)">
        <CodeBlock language="python">{`def draw_tree(surface: pygame.Surface, pos: tuple[int, int], scale: float = 1.0) -> None:
    x, y = pos
    trunk = pygame.Rect(x, y, int(22*scale), int(64*scale))
    pygame.draw.rect(surface, (110, 70, 40), trunk, 0, border_radius=4)
    cx = x + trunk.w//2
    cy = y - int(18*scale)
    for r, col in [(int(28*scale), (40,140,80)), (int(22*scale), (46,160,96)), (int(18*scale), (54,180,108))]:
        pygame.draw.circle(surface, col, (cx, cy), r, 0)
        cy -= int(18*scale)

def draw_person(surface: pygame.Surface, pos: tuple[int, int], scale: float = 1.0) -> None:
    x, y = pos
    head_r = int(10*scale)
    pygame.draw.circle(surface, (255, 210, 150), (x, y), head_r, 0)  # голова
    body = pygame.Rect(x - int(6*scale), y + head_r, int(12*scale), int(28*scale))
    pygame.draw.rect(surface, (80, 120, 220), body, 0, border_radius=4)
    pygame.draw.line(surface, (80,120,220), (body.left- int(10*scale), body.top+8), (body.right+ int(10*scale), body.top+8), 3)
    pygame.draw.line(surface, (60,60,60), (body.centerx, body.bottom), (body.centerx- int(10*scale), body.bottom+ int(18*scale)), 3)
    pygame.draw.line(surface, (60,60,60), (body.centerx, body.bottom), (body.centerx+ int(10*scale), body.bottom+ int(18*scale)), 3)`}</CodeBlock>
      </Section>

      <Section title="Класс динамического объекта (машина)">
        <CodeBlock language="python">{`class Car:
    def __init__(self, x: float, y: float, color=(80, 160, 240)) -> None:
        self.x = x; self.y = y
        self.color = color
        self.vx = 220.0
        self.w = 120; self.h = 50

    def update(self, dt: float, bounds: pygame.Rect) -> None:
        self.x += self.vx * dt
        if self.x + self.w > bounds.right:
            self.x = bounds.right - self.w; self.vx *= -1
        if self.x < bounds.left:
            self.x = bounds.left; self.vx *= -1

    def draw(self, surface: pygame.Surface) -> None:
        body = pygame.Rect(int(self.x), int(self.y), self.w, self.h)
        pygame.draw.rect(surface, self.color, body, 0, border_radius=10)
        cab = pygame.Rect(body.left + 12, body.top + 8, self.w//2, self.h//2)
        pygame.draw.rect(surface, (200, 230, 255), cab, 0, border_radius=8)
        pygame.draw.circle(surface, (20,20,20), (body.left + 24, body.bottom), 16, 0)
        pygame.draw.circle(surface, (20,20,20), (body.right - 24, body.bottom), 16, 0)
        pygame.draw.circle(surface, (220,220,220), (body.left + 24, body.bottom), 6, 0)
        pygame.draw.circle(surface, (220,220,220), (body.right - 24, body.bottom), 6, 0)`}</CodeBlock>
      </Section>

      <Section title="Слои: фон → статика → динамика → UI">
        <CodeBlock language="python">{`def draw_scene_static(surface: pygame.Surface) -> None:
    pygame.draw.rect(surface, (34, 120, 70), (0, 520, 900, 80), 0) # земля
    draw_house(surface, (80, 360), 1.0)
    draw_house(surface, (260, 380), 0.8)
    draw_tree(surface, (430, 400), 1.1)
    draw_tree(surface, (520, 420), 0.9)
    draw_person(surface, (360, 500), 1.2)`}</CodeBlock>
      </Section>

      <Section title="Собранный пример">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_width, screen_height = 900, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Префабы — пример')
clock = pygame.time.Clock()

# ... функции draw_house/draw_tree/draw_person и класс Car здесь ...

car = Car(200, 470)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    car.update(dt, pygame.Rect(0, 0, screen_width, screen_height))

    screen_surface.fill((28, 30, 36))
    # опционально: сетка
    for x in range(0, screen_width, 50):
        pygame.draw.line(screen_surface, (44,48,58), (x, 0), (x, screen_height), 1)
    for y in range(0, screen_height, 50):
        pygame.draw.line(screen_surface, (44,48,58), (0, y), (screen_width, y), 1)

    draw_scene_static(screen_surface)
    car.draw(screen_surface)

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Параметры:</strong> добавь в <code>draw_house</code> цвет крыши и окна аргументами, по умолчанию оставь текущие.</li>
          <li><strong>Новые префабы:</strong> сделай <code>draw_cloud(surface, pos, scale)</code> (несколько кругов) и <code>draw_sun(...)</code>.</li>
          <li><strong>Группа объектов:</strong> создай список из 5 машин с разными скоростями/цветами, обновляй и рисуй каждую.</li>
          <li><strong>Порядок:</strong> попробуй поменять порядок слоёв и посмотри, как элементы перекрывают друг друга.</li>
          <li><strong>Коллизии (дополнительно):</strong> проверь пересечение прямоугольника машины с домом (через <code>Rect.colliderect</code>), сменяй цвет машины при столкновении.</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Цвета как аргументы
def draw_house(surface, pos, scale=1.0, roof_color=(160,80,60), win_color=(200,220,255)):
    # ... используем roof_color и win_color ...`}</CodeBlock>
        <CodeBlock language="python">{`# Обновление группы машин
cars = [Car(100,470,(90,170,250)), Car(200,470,(250,120,120)), Car(300,470,(120,220,140))]
for c in cars:
    c.update(dt, bounds)
    c.draw(screen_surface)`}</CodeBlock>
        <CodeBlock language="python">{`# Столкновение
if pygame.Rect(int(car.x), int(car.y), car.w, car.h).colliderect(pygame.Rect(80,360,120,80)):
    car.color = (250, 100, 80)`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Рисование «вразнобой»: нарушен порядок слоёв, объекты перекрываются неправильно.</li>
          <li>Слишком много дублирования кода — забыли вынести в функции/классы.</li>
          <li>Жёстко забитые координаты без <code>pos</code>/<code>scale</code> — префаб «негибкий».</li>
          <li>Плавающие значения без округления при рисовании — «дрожащие» пиксели.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m07.zip">m07.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m07.zip">m07.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
