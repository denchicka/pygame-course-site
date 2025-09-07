import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Управление частотой кадров (FPS), расчёт <code>delta-time</code> для плавного движения, работа с углами в градусах и радианах.
          Сделаем одинаковую скорость при разных FPS и добавим движение по направлению.
        </p>
      </Section>

      <Section title="FPS и delta-time (основа)">
        <ul>
          <li><code>pygame.time.Clock()</code> — часы для ограничения FPS и измерения времени кадра.</li>
          <li><code>clock.tick(limit)</code> — «задерживает» цикл, чтобы не превышать <em>limit</em> FPS, и возвращает миллисекунды, прошедшие с прошлого кадра.</li>
          <li><strong>delta-time</strong> в секундах: <code>dt = clock.tick(limit) / 1000.0</code>.</li>
        </ul>
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('FPS и delta-time')
clock_for_fps_control = pygame.time.Clock()
frames_per_second_limit: int = 60

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(frames_per_second_limit) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill((20, 20, 24))
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Плавное движение: скорость × dt">
        <p>Скорость храним в «пикселях в секунду», перемещение — <code>позиция += скорость * dt</code>.</p>
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_width, screen_height = 800, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Движение с учётом dt')
clock_for_fps_control = pygame.time.Clock()

x: float = 100.0
y: float = 300.0
vx: float = 220.0  # пикс/сек
r: int = 20

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    # движение по X
    x += vx * dt

    # отскок от стен
    if x - r < 0:
        x = r; vx *= -1
    if x + r > screen_width:
        x = screen_width - r; vx *= -1

    screen_surface.fill((18, 18, 24))
    pygame.draw.circle(screen_surface, (255, 200, 0), (int(x), int(y)), r)
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Градусы ↔ радианы. Направление движения">
        <ul>
          <li><code>math.radians(градусы)</code> → радианы, <code>math.degrees(радианы)</code> → градусы.</li>
          <li>Единичный вектор направления: <code>(cos(rad), sin(rad))</code>.</li>
        </ul>
        <CodeBlock language="python">{`import pygame, sys, math
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Движение по углу')
clock_for_fps_control = pygame.time.Clock()

x: float = 100.0
y: float = 300.0
speed: float = 200.0     # пикс/сек
angle_deg: float = 45.0  # градусы
r: int = 20

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:  angle_deg -= 15.0
            if event.key == pygame.K_RIGHT: angle_deg += 15.0

    rad = math.radians(angle_deg)
    dir_x = math.cos(rad)
    dir_y = math.sin(rad)

    x += dir_x * speed * dt
    y += dir_y * speed * dt

    # отскоки
    if x - r < 0: x = r; dir_x *= -1
    if x + r > 800: x = 800 - r; dir_x *= -1
    if y - r < 0: y = r; dir_y *= -1
    if y + r > 600: y = 600 - r; dir_y *= -1

    screen_surface.fill((240, 240, 255))
    pygame.draw.circle(screen_surface, (255, 160, 0), (int(x), int(y)), r)

    # линия направления
    L = 60
    pygame.draw.line(screen_surface, (0, 120, 255),
                     (int(x), int(y)),
                     (int(x + dir_x * L), int(y + dir_y * L)), 3)

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="FPS-переключатель и индикатор">
        <CodeBlock language="python">{`import pygame, sys, math
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('FPS переключатель')
clock_for_fps_control = pygame.time.Clock()
font_object = pygame.font.SysFont(None, 22)

limit: int = 60
x: float = 100.0
vx: float = 200.0

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(limit) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            limit = 240 if limit == 60 else 60  # переключение лимита FPS

    x += vx * dt
    if x > 820: x = -20

    screen_surface.fill((18,18,24))
    pygame.draw.circle(screen_surface, (255,200,0), (int(x), 300), 20)

    fps = clock_for_fps_control.get_fps()
    text = font_object.render(f"FPS≈{fps:5.1f} | SPACE — 60/240 FPS", True, (230,230,230))
    screen_surface.blit(text, (10, 10))

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Равномерная скорость:</strong> переключай лимит между 30 и 120 FPS по <kbd>SPACE</kbd>. Объект должен двигаться с одинаковой скоростью.</li>
          <li><strong>Отскоки по двум осям:</strong> круг движется по диагонали и отскакивает от всех четырёх стен.</li>
          <li><strong>Движение по углу:</strong> управление углом <kbd>←/→</kbd>, расчёт вектора <code>(cos, sin)</code>.</li>
          <li><strong>Режимы:</strong> <kbd>TAB</kbd> — переключение «движение по X» ⇄ «движение по углу».</li>
          <li><strong>Линия-указатель:</strong> рисовать от объекта линию направления длиной 60 пикселей.</li>
        </ol>
      </Section>

      <Section title="Подсказки и ответы (фрагменты)">
        <CodeBlock language="python">{`# 1) Переключение лимита
limit = 30 if limit == 120 else 120`}</CodeBlock>
        <CodeBlock language="python">{`# 2) Отскоки
if x - r < 0 or x + r > W: vx *= -1
if y - r < 0 or y + r > H: vy *= -1`}</CodeBlock>
        <CodeBlock language="python">{`# 3) Движение по углу
rad = math.radians(angle_deg)
vx = math.cos(rad) * speed
vy = math.sin(rad) * speed
x += vx * dt
y += vy * dt`}</CodeBlock>
        <CodeBlock language="python">{`# 4) Режимы
use_angle = not use_angle`}</CodeBlock>
        <CodeBlock language="python">{`# 5) Линия направления
pygame.draw.line(screen_surface, (0,220,255), (int(x),int(y)), (int(x+dir_x*60), int(y+dir_y*60)), 3)`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Считать «пиксели за кадр», а не «пиксели в секунду × dt» — скорость меняется при другом FPS.</li>
          <li>Забыть <code>pygame.display.flip()</code> — кадр не обновляется.</li>
          <li>Путаница градусов и радиан — обязательно <code>math.radians(...)</code>.</li>
          <li>Слишком высокий лимит при тяжёлом рендере — нестабильная плавность.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m04.zip">m04.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m04.zip">m04.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
