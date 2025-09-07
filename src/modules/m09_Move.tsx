import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Реализовать движение простых фигур: прямоугольника и круга. Управление с клавиатуры, перетаскивание мышью,
          нормализация диагонали, отскоки от стен и ограничение области.
        </p>
      </Section>

      <Section title="Прямоугольник: управление стрелками + delta-time">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Движение — прямоугольник')
clock = pygame.time.Clock()

player = pygame.Rect(0, 0, 100, 60)
player.center = (W//2, H//2)
PLAYER_SPEED = 260.0  # пикс/сек

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    # Нормализация диагонали
    keys = pygame.key.get_pressed()
    vx = (1 if keys[pygame.K_RIGHT] else 0) - (1 if keys[pygame.K_LEFT] else 0)
    vy = (1 if keys[pygame.K_DOWN] else 0) - (1 if keys[pygame.K_UP] else 0)

    length = (vx*vx + vy*vy) ** 0.5
    if length > 0:
        vx /= length; vy /= length

    player.move_ip(vx * PLAYER_SPEED * dt, vy * PLAYER_SPEED * dt)
    player.clamp_ip(screen.get_rect())

    screen.fill((22,24,30))
    pygame.draw.rect(screen, (200,200,220), player, 0, border_radius=10)
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Круг: движение по скорости (vx, vy) и отскоки">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Движение — круг и отскоки')
clock = pygame.time.Clock()

pos_x, pos_y = 200.0, 120.0
vel_x, vel_y = 220.0, 160.0
R = 22

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    # движение
    pos_x += vel_x * dt
    pos_y += vel_y * dt

    # отскоки
    if pos_x - R < 0: pos_x = R; vel_x *= -1
    if pos_x + R > W: pos_x = W - R; vel_x *= -1
    if pos_y - R < 0: pos_y = R; vel_y *= -1
    if pos_y + R > H: pos_y = H - R; vel_y *= -1

    screen.fill((22,24,30))
    pygame.draw.circle(screen, (255, 190, 60), (int(pos_x), int(pos_y)), R)
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Перетаскивание мышью (drag & drop)">
        <CodeBlock language="python">{`dragging = False
drag_offset_x = 0
drag_offset_y = 0

for event in pygame.event.get():
    if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and player.collidepoint(event.pos):
        dragging = True
        drag_offset_x = event.pos[0] - player.centerx
        drag_offset_y = event.pos[1] - player.centery
    if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
        dragging = False
    if event.type == pygame.MOUSEMOTION and dragging:
        player.center = (event.pos[0] - drag_offset_x, event.pos[1] - drag_offset_y)`}</CodeBlock>
      </Section>

      <Section title="Собранный пример: всё вместе">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Движение — сборка')
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 20)

player = pygame.Rect(0, 0, 100, 60)
player.center = (W//2, H//2)
PLAYER_SPEED = 280.0

ball_pos = pygame.Vector2(200, 120)
ball_vel = pygame.Vector2(220, 160)
BALL_R = 22

dragging = False
drag_offset = pygame.Vector2(0, 0)

def draw_grid(surface: pygame.Surface, step: int = 50):
    for x in range(0, W, step): pygame.draw.line(surface, (44,48,58), (x, 0), (x, H), 1)
    for y in range(0, H, step): pygame.draw.line(surface, (44,48,58), (0, y), (W, y), 1)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and player.collidepoint(event.pos):
            dragging = True
            drag_offset = pygame.Vector2(event.pos) - pygame.Vector2(player.center)
        elif event.type == pygame.MOUSEBUTTONUP and event.button == 1:
            dragging = False
        elif event.type == pygame.MOUSEMOTION and dragging:
            player.center = (event.pos[0] - drag_offset.x, event.pos[1] - drag_offset.y)

    # клавиши + нормализация
    keys = pygame.key.get_pressed()
    v = pygame.Vector2(
        (1 if keys[pygame.K_RIGHT] else 0) - (1 if keys[pygame.K_LEFT] else 0),
        (1 if keys[pygame.K_DOWN] else 0) - (1 if keys[pygame.K_UP] else 0)
    )
    if v.length_squared() > 0:
        v = v.normalize()
        player.move_ip(v.x * PLAYER_SPEED * dt, v.y * PLAYER_SPEED * dt)

    player.clamp_ip(screen.get_rect())

    # круг
    ball_pos += ball_vel * dt
    if ball_pos.x - BALL_R < 0: ball_pos.x = BALL_R; ball_vel.x *= -1
    if ball_pos.x + BALL_R > W: ball_pos.x = W - BALL_R; ball_vel.x *= -1
    if ball_pos.y - BALL_R < 0: ball_pos.y = BALL_R; ball_vel.y *= -1
    if ball_pos.y + BALL_R > H: ball_pos.y = H - BALL_R; ball_vel.y *= -1

    screen.fill((22, 24, 30))
    draw_grid(screen, 50)

    pygame.draw.rect(screen, (200, 200, 220), player, 0, border_radius=10)
    pygame.draw.rect(screen, (90, 180, 255), player, 3, border_radius=10)
    pygame.draw.circle(screen, (255, 190, 60), (int(ball_pos.x), int(ball_pos.y)), BALL_R)

    info = [
        'Стрелки — движение, ЛКМ — перетаскивание',
        'Диагональ нормализована, мяч отскакивает от стен'
    ]
    for i, msg in enumerate(info):
        screen.blit(pygame.font.SysFont(None, 20).render(msg, True, (235,235,240)), (10, 10 + i*18))

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Трение:</strong> хранить скорость игрока как вектор; при отпускании клавиш затухать умножением на 0.9 каждый кадр.</li>
          <li><strong>Диагональ:</strong> обязательно нормализовать, иначе по диагонали быстрее.</li>
          <li><strong>Ускорение:</strong> при удержании <kbd>SHIFT</kbd> умножать скорость на 1.5.</li>
          <li><strong>Отскоки круга:</strong> добавить коэффициент упругости 0.9 — мяч затухает.</li>
          <li><strong>Перетаскивание:</strong> запретить перетаскивание вне экрана (после изменения центра — <code>clamp_ip</code>).</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Трение
if v.length_squared() == 0:
    stored_vel *= 0.9
    if stored_vel.length() < 5: stored_vel.update(0,0)`}</CodeBlock>
        <CodeBlock language="python">{`# Ускорение
speed = BASE_SPEED * (1.5 if keys[pygame.K_LSHIFT] or keys[pygame.K_RSHIFT] else 1.0)`}</CodeBlock>
        <CodeBlock language="python">{`# Упругость
bounce_ball(ball_pos, ball_vel, BALL_R, screen.get_rect(), damp=0.9)`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Считать пиксели «за кадр», а не «за секунду × dt» — скорость будет зависеть от FPS.</li>
          <li>Не нормализовать диагональ — по диагонали объект уходит быстрее.</li>
          <li>Перетаскивание без учёта смещения — «прыжок» объекта под курсор.</li>
          <li>Забыть ограничить область — объект уезжает за экран.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m09.zip">m09.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m09.zip">m09.zip</a></li>
        </ul>
      </Section>

    </div>
  )
}
