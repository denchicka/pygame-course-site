import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Освоить рисование примитивов через <code>pygame.draw</code>: линия, прямоугольник, круг, эллипс, многоугольник, дуга.
          Разобрать параметры: цвет, прямоугольник (<code>x, y, w, h</code>), толщина <code>width</code>, скругление <code>border_radius</code>.
        </p>
      </Section>

      <Section title="Минимальный шаблон рисования">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((900, 600))
pygame.display.set_caption('Фигуры — базовый шаблон')
clock = pygame.time.Clock()

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill((24, 26, 32))  # фон

    # Рисование фигур будет здесь...

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Линия">
        <CodeBlock language="python">{`pygame.draw.line(surface, color, start_pos, end_pos, width=1)
# Пример:
pygame.draw.line(screen_surface, (0, 120, 220), (50, 50), (300, 120), 5)`}</CodeBlock>
        <p>Координаты задаются в пикселях. Толщина по умолчанию 1, для «заливки» линий не используется.</p>
      </Section>

      <Section title="Прямоугольник">
        <CodeBlock language="python">{`pygame.draw.rect(surface, color, rect, width=0, border_radius=0)
# rect: (x, y, w, h)
# width=0 — заливка, >0 — толщина контура
# Примеры:
pygame.draw.rect(screen_surface, (220, 70, 70), (400, 80, 200, 120), 3, border_radius=12)
pygame.draw.rect(screen_surface, (40, 180, 120), (420, 260, 160, 90), 0)`}</CodeBlock>
      </Section>

      <Section title="Круг и эллипс">
        <CodeBlock language="python">{`pygame.draw.circle(surface, color, center, radius, width=0)
pygame.draw.ellipse(surface, color, rect, width=0)
# Примеры:
pygame.draw.circle(screen_surface, (50, 180, 90), (200, 350), 60, 0)          # заливка
pygame.draw.ellipse(screen_surface, (180, 120, 255), (500, 300, 220, 120), 4) # контур`}</CodeBlock>
      </Section>

      <Section title="Многоугольник и дуга">
        <CodeBlock language="python">{`pygame.draw.polygon(surface, color, point_list, width=0)
pygame.draw.arc(surface, color, rect, start_angle, stop_angle, width=1)
# Примеры:
pygame.draw.polygon(screen_surface, (255, 200, 0),
                    [(100,500),(160,460),(220,500),(200,560),(120,560)], 0)
# дуга окружности 0..π (180°) в прямоугольнике 140x140
pygame.draw.arc(screen_surface, (240, 240, 240), (650, 100, 140, 140), 0.0, 3.14159, 3)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Углы <code>start_angle</code>, <code>stop_angle</code> — в радианах. Для перевода из градусов: <code>math.radians(deg)</code>.
        </p>
      </Section>

      <Section title="Оси X/Y — напоминание">
        <ul>
          <li>(0,0) — левый верхний угол.</li>
          <li>Ось X растёт вправо, ось Y — вниз.</li>
          <li>Цвет — кортеж <code>(R, G, B)</code> со значениями 0..255.</li>
        </ul>
      </Section>

      <Section title="Собранный пример: набор фигур">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((900, 600))
pygame.display.set_caption('Фигуры — пример (сет)')
clock = pygame.time.Clock()

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill((24, 26, 32))

    pygame.draw.line(screen_surface, (0, 120, 220), (50, 50), (300, 120), 5)
    pygame.draw.rect(screen_surface, (220, 70, 70), (400, 80, 200, 120), 3, border_radius=12)
    pygame.draw.circle(screen_surface, (50, 180, 90), (200, 350), 60, 0)
    pygame.draw.ellipse(screen_surface, (180, 120, 255), (500, 300, 220, 120), 4)
    pygame.draw.polygon(screen_surface, (255, 200, 0), [(100,500),(160,460),(220,500),(200,560),(120,560)], 0)
    pygame.draw.arc(screen_surface, (240, 240, 240), (650, 100, 140, 140), 0.0, 3.14159, 3)

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Флаги:</strong> добавь скругление углов у прямоугольника (<code>border_radius=16</code>).</li>
          <li><strong>Контур/заливка:</strong> сравни <code>width=0</code> и <code>width=4</code> на прямоугольнике и круге.</li>
          <li><strong>Домик из примитивов:</strong> прямоугольник-основание + треугольная крыша (многоугольник).</li>
          <li><strong>Смайлик:</strong> большой жёлтый круг; два маленьких чёрных круга-глаза; дуга-улыбка.</li>
          <li><strong>Ориентиры:</strong> проведи оси X и Y через центр экрана, подпиши маленькими прямоугольниками.</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# border_radius
pygame.draw.rect(screen_surface, (60, 160, 220), (100, 90, 180, 100), 0, border_radius=16)`}</CodeBlock>
        <CodeBlock language="python">{`# домик
base = pygame.Rect(80, 340, 160, 120)
pygame.draw.rect(screen_surface, (200, 160, 120), base, 0)
roof_pts = [(80,340), (160,280), (240,340)]
pygame.draw.polygon(screen_surface, (180, 80, 60), roof_pts, 0)`}</CodeBlock>
        <CodeBlock language="python">{`# смайлик
pygame.draw.circle(screen_surface, (255, 210, 0), (420, 420), 70, 0)
pygame.draw.circle(screen_surface, (20, 20, 20), (395, 400), 8, 0)
pygame.draw.circle(screen_surface, (20, 20, 20), (445, 400), 8, 0)
pygame.draw.arc(screen_surface, (20, 20, 20), (370, 385, 100, 90), 3.6, 5.8, 4)`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Рисование до <code>fill()</code> — фигуры «затираются» фоном.</li>
          <li>Неправильный прямоугольник: порядок <code>(x, y, w, h)</code>, а не <code>(x1, y1, x2, y2)</code>.</li>
          <li>Цвет вне диапазона 0..255.</li>
          <li>Забыли <code>flip()</code> — фигуры не появляются.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m05.zip">m05.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m05.zip">m05.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
