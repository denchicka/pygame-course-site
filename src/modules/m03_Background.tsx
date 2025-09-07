import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Настроить фоновую заливку экрана и понять, зачем нужен <code>pygame.display.flip()</code>.
          Добавим переключение палитры по клавише, градиент и сравним <code>flip()</code> с <code>display.update()</code>.
        </p>
      </Section>

      <Section title="Базовый цикл: фон + flip()">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Фон и flip — базовый пример')

is_running: bool = True
background_color = (64, 128, 200)  # R, G, B (0..255)

while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    # 1) очистка экрана цветом
    screen_surface.fill(background_color)

    # 2) показать кадр
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
        <ul>
          <li><code>fill()</code> — закраска всей поверхности.</li>
          <li><code>flip()</code> — показ готового кадра (двойная буферизация, без мерцания).</li>
        </ul>
      </Section>

      <Section title="Переключение цветов по SPACE">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('SPACE — смена фона')

PALETTE = [
    (30, 30, 40),
    (64, 128, 200),
    (240, 240, 255),
    (255, 245, 235),
]

index: int = 0
background_color = PALETTE[index]
is_running: bool = True

while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            index = (index + 1) % len(PALETTE)
            background_color = PALETTE[index]

    screen_surface.fill(background_color)
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Вертикальный градиент (без картинок)">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_width, screen_height = 800, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Вертикальный градиент')

def draw_vertical_gradient(surface: pygame.Surface, top_color, bottom_color):
    height = surface.get_height()
    width = surface.get_width()
    for y in range(height):
        t = y / max(1, height - 1)  # 0..1
        r = int(top_color[0] * (1 - t) + bottom_color[0] * t)
        g = int(top_color[1] * (1 - t) + bottom_color[1] * t)
        b = int(top_color[2] * (1 - t) + bottom_color[2] * t)
        pygame.draw.line(surface, (r, g, b), (0, y), (width, y))

is_running: bool = True
top = (64, 128, 200)
bottom = (240, 240, 255)

while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    draw_vertical_gradient(screen_surface, top, bottom)
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Для учебных проектов отрисовка градиента линиями — норм. Для продвинутой оптимизации используют массивы/Surface.lock.
        </p>
      </Section>

      <Section title="flip() vs display.update()">
        <p>
          <code>flip()</code> обновляет весь экран. <code>display.update(rect)</code> — только прямоугольник (полезно для частичных изменений).
        </p>
        <CodeBlock language="python">{`# Пример частичного обновления
pygame.draw.rect(screen_surface, (255, 180, 0), (40, 40, 160, 100))
pygame.display.update(pygame.Rect(40, 40, 160, 100))`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Палитра:</strong> добавь ещё 2–3 цвета и переключай по <kbd>SPACE</kbd>.</li>
          <li><strong>Градиент-режим:</strong> сделай переключатель <kbd>G</kbd>: однотонный фон ⇄ градиент.</li>
          <li><strong>Анимация градиента:</strong> слегка меняй нижний цвет по времени (эффект «дышит»).</li>
          <li><strong>Комбо:</strong> на фоне нарисуй прямоугольник и окружность, чтобы увидеть слои.</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Переключение цвета
if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
    index = (index + 1) % len(PALETTE)
    background_color = PALETTE[index]`}</CodeBlock>
        <CodeBlock language="python">{`# Переключение режима градиента
if event.type == pygame.KEYDOWN and event.key == pygame.K_g:
    use_gradient = not use_gradient`}</CodeBlock>
        <CodeBlock language="python">{`# Анимация нижнего цвета (по времени)
gradient_offset = (gradient_offset + int(120 * dt)) % 255
bottom = ((top[0] + gradient_offset) % 256,
          (top[1] + 2*gradient_offset) % 256,
          (top[2] + 3*gradient_offset) % 256)`}</CodeBlock>
      </Section>

      <Section title="Готовый пример: фон, градиент и ориентиры">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_width: int = 800
screen_height: int = 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Фон: цвет / градиент / ориентиры')

PALETTE = [(30,30,40),(64,128,200),(240,240,255),(255,245,235)]
idx: int = 0
background_color = PALETTE[idx]

use_gradient: bool = False
gradient_offset: int = 0
clock_for_fps_control = pygame.time.Clock()

def draw_vertical_gradient(surface: pygame.Surface, top_color, bottom_color):
    h = surface.get_height(); w = surface.get_width()
    for y in range(h):
        t = y / max(1, h - 1)
        r = int(top_color[0]*(1-t) + bottom_color[0]*t)
        g = int(top_color[1]*(1-t) + bottom_color[1]*t)
        b = int(top_color[2]*(1-t) + bottom_color[2]*t)
        pygame.draw.line(surface, (r,g,b), (0,y), (w,y))

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                idx = (idx + 1) % len(PALETTE)
                background_color = PALETTE[idx]
            if event.key == pygame.K_g:
                use_gradient = not use_gradient

    if not use_gradient:
        screen_surface.fill(background_color)
    else:
        gradient_offset = (gradient_offset + int(120 * dt)) % 255
        bottom = ((background_color[0] + gradient_offset) % 256,
                  (background_color[1] + 2*gradient_offset) % 256,
                  (background_color[2] + 3*gradient_offset) % 256)
        draw_vertical_gradient(screen_surface, background_color, bottom)

    # ориентиры поверх фона
    pygame.draw.rect(screen_surface, (255,180,0), (40,40,160,100), 3)
    pygame.draw.circle(screen_surface, (0,200,255), (400,300), 40, 4)

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Нет <code>pygame.display.flip()</code> — изменения не видны.</li>
          <li>Вызов <code>flip()</code> поставлен до рисования — кадр «пустой».</li>
          <li>Цвет указан не в диапазоне 0..255.</li>
          <li>Градиент рисуется один раз вне цикла — кадр не обновляется.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m03.zip">m03.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m03.zip">m03.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
