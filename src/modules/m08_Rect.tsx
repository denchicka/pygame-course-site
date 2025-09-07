import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Разобрать <code>pygame.Rect</code>: ключевые атрибуты позиционирования (<code>left/top/right/bottom</code>, <code>center</code>, <code>size</code>),
          «якоря» (<code>topleft</code>, <code>midright</code>, и др.), а также методы <code>move[_ip]</code>, <code>inflate[_ip]</code>, <code>clamp[_ip]</code>,
          проверку столкновений (<code>collidepoint</code>, <code>colliderect</code>).
        </p>
      </Section>

      <Section title="Ключевые атрибуты и «якоря»">
        <ul>
          <li><code>x, y, w, h</code> — базовые поля (ширина/высота можно читать как <code>rect.width/rect.height</code> или <code>rect.w/rect.h</code>).</li>
          <li><code>left, top, right, bottom</code> — границы прямоугольника.</li>
          <li><code>center, centerx, centery</code> — центр.</li>
          <li><code>size</code> — кортеж <code>(w, h)</code>.</li>
          <li><code>topleft</code>, <code>topright</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>midtop</code>, <code>midright</code>, <code>midbottom</code>, <code>midleft</code> — якорные точки.</li>
        </ul>
        <CodeBlock language="python">{`rect = pygame.Rect(0, 0, 120, 80)
rect.center = (450, 300)          # выравнивание по центру
rect.topright = (880, 20)         # правый верх с отступом
print(rect.left, rect.top, rect.size)`}</CodeBlock>
      </Section>

      <Section title="Перемещение и изменение размера">
        <CodeBlock language="python">{`rect.move(dx, dy)      # -> новый Rect (исходный не меняется)
rect.move_ip(dx, dy)   # изменяет rect на месте
rect.inflate(dw, dh)   # -> новый Rect, увеличенный на dw/dh
rect.inflate_ip(dw, dh)# изменяет текущий на месте
rect.clamp(bounds)     # -> новый Rect, зажатый в пределах bounds
rect.clamp_ip(bounds)  # зажимает текущий на месте`}</CodeBlock>
      </Section>

      <Section title="Проверка столкновений">
        <CodeBlock language="python">{`rect.collidepoint(mouse_pos)      # точка внутри?
rect.colliderect(other_rect)       # пересекаются ли два прямоугольника?
rect.contains(other_rect)          # полностью ли внутри?
rect.clip(other_rect)              # пересечение (Rect)
rect.union(other_rect)             # наименьший Rect, покрывающий оба`}</CodeBlock>
      </Section>

      <Section title="Собранный пример: движение, якоря, отскок от краёв">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_width, screen_height = 900, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Rect — базовая практика')
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 20)

player = pygame.Rect(0, 0, 80, 50)
player.center = (screen_width//2, screen_height//2)

target = pygame.Rect(0, 0, 120, 80)
target.topright = (screen_width - 20, 20)

speed = 200.0

def clamp_ip(rect: pygame.Rect, bounds: pygame.Rect) -> None:
    rect.clamp_ip(bounds)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            player.center = event.pos
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_i: player.inflate_ip(20, 10)
            if event.key == pygame.K_o: player.inflate_ip(-20, -10)

    keys = pygame.key.get_pressed()
    dx = (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * speed * dt
    dy = (keys[pygame.K_DOWN] - keys[pygame.K_UP]) * speed * dt
    player.move_ip(dx, dy)

    clamp_ip(player, screen_surface.get_rect())
    collides = player.colliderect(target)

    screen_surface.fill((24,26,32))
    for x in range(0, screen_width, 50):
        pygame.draw.line(screen_surface, (45,50,62), (x, 0), (x, screen_height), 1)
    for y in range(0, screen_height, 50):
        pygame.draw.line(screen_surface, (45,50,62), (0, y), (screen_width, y), 1)

    pygame.draw.rect(screen_surface, (80,120,220), target, 2, border_radius=8)
    pygame.draw.rect(screen_surface, (200,200,220), player, 0, border_radius=10)
    pygame.draw.rect(screen_surface, (80,200,120) if collides else (220,90,90), player, 3, border_radius=10)

    info = [
        f'x={player.x} y={player.y} w={player.w} h={player.h}',
        f'left={player.left} top={player.top} right={player.right} bottom={player.bottom}',
        f'center={player.center} size={player.size} midtop={player.midtop} midright={player.midright}',
        f'collides={collides}  |  arrows: move  |  I/O: resize  |  click: center move'
    ]
    for i, msg in enumerate(info):
        screen_surface.blit(font.render(msg, True, (235,235,240)), (10, 10 + i*18))

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Маркер якорей:</strong> отрисуй точки в <code>topleft</code>, <code>center</code>, <code>bottomright</code>.</li>
          <li><strong>Привязка к углу:</strong> по клавише <kbd>1</kbd>/<kbd>2</kbd>/<kbd>3</kbd>/<kbd>4</kbd> привязывай <code>player_rect</code> к углам экрана через <code>topleft/topright/bottomleft/bottomright</code>.</li>
          <li><strong>Пересечение:</strong> рисуй область <code>player.clip(target)</code> другим цветом.</li>
          <li><strong>Union:</strong> визуализируй <code>player.union(target)</code> как «рамку охвата».</li>
          <li><strong>Сохранение центра:</strong> изменяй размер через <code>inflate</code> так, чтобы центр оставался на месте (подсказка: сохраняй <code>old_center</code>, потом восстанавливай).</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# 1) маркеры
for p in [rect.topleft, rect.center, rect.bottomright]:
    pygame.draw.circle(screen, (255,220,120), p, 3, 0)`}</CodeBlock>
        <CodeBlock language="python">{`# 3) пересечение
overlap = player.clip(target)
if overlap.w > 0 and overlap.h > 0:
    pygame.draw.rect(screen_surface, (80,200,180), overlap, 0)`}</CodeBlock>
        <CodeBlock language="python">{`# 5) сохранить центр
old_center = player.center
player = player.inflate(40, 20)
player.center = old_center`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Сдвигать <code>x/y</code>, когда нужно задать якорь (например, <code>topright</code>) — проще и надёжнее работать с «якорями».</li>
          <li>Изменять размер через <code>w/h</code> вручную — лучше <code>inflate[_ip]</code>.</li>
          <li>Двигать на «пиксели за кадр» — скорость зависит от FPS. Используй <code>dt</code>.</li>
          <li>Забыть ограничить <code>Rect</code> границами — объект уходит за экран.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m08.zip">m08.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m08.zip">m08.zip</a></li>
        </ul>
      </Section>

    </div>
  )
}
