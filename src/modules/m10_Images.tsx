import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Загрузка изображений, прозрачность (<code>convert_alpha</code>), позиционирование через <code>Rect</code>,
          масштабирование, отражение, поворот (градусы), простая анимация и движение.
        </p>
      </Section>

      <Section title="Загрузка изображений и прозрачность">
        <CodeBlock language="python">{`img = pygame.image.load('assets/player.png').convert_alpha()
rect = img.get_rect(center=(450, 300))
screen_surface.blit(img, rect)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          <code>convert_alpha()</code> ускоряет отрисовку и сохраняет прозрачность PNG. Если файла нет — обработай исключение и используй «заглушку».
        </p>
      </Section>

      <Section title="Масштабирование/отражение/поворот">
        <CodeBlock language="python">{`scaled = pygame.transform.scale(img, (w, h))                   # масштаб
flipped = pygame.transform.flip(img, True, False)              # отражение по X
rotated = pygame.transform.rotate(img, angle_deg)              # поворот (против часовой)
rotated2 = pygame.transform.rotozoom(img, -angle_deg, 1.0)     # поворот по часовой, c масштабом`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Угол в градусах. Положительный угол в <code>rotate</code> — против часовой стрелки. Для «по часовой» умножай на -1 или используй <code>rotozoom(..., -angle, ...)</code>.
        </p>
      </Section>

      <Section title="Движение и направление (flip по X)">
        <CodeBlock language="python">{`facing = 1  # 1 — вправо, -1 — влево
frame = player_img if facing > 0 else pygame.transform.flip(player_img, True, False)
screen_surface.blit(frame, frame.get_rect(center=player_rect.center))`}</CodeBlock>
      </Section>

      <Section title="Собранный пример: фон + игрок + вращающийся объект">
        <CodeBlock language="python">{`import pygame, sys, os
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Изображения — сборка')
clock = pygame.time.Clock()

def load_image(path: str) -> pygame.Surface:
    try:
        return pygame.image.load(path).convert_alpha()
    except Exception:
        s = pygame.Surface((80,60), pygame.SRCALPHA)
        s.fill((200,80,80)); pygame.draw.rect(s, (240,240,240), s.get_rect(), 2)
        return s

bg = load_image('assets/bg.png')
player = load_image('assets/player.png')
ball = load_image('assets/ball.png')

bg = pygame.transform.scale(bg, (W, H))

player_rect = player.get_rect(center=(W//2, H-90))
ball_rect = ball.get_rect(center=(W//2, 120))

facing = 1
angle = 0.0
ANGLE_SPEED = 120.0
SPEED = 280.0

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    keys = pygame.key.get_pressed()
    vx = (1 if keys[pygame.K_RIGHT] else 0) - (1 if keys[pygame.K_LEFT] else 0)
    vy = (1 if keys[pygame.K_DOWN] else 0) - (1 if keys[pygame.K_UP] else 0)
    v = pygame.Vector2(vx, vy)
    if v.length_squared() > 0:
        v = v.normalize()
        facing = 1 if v.x >= 0 else -1
        player_rect.move_ip(v.x*SPEED*dt, v.y*SPEED*dt)
        player_rect.clamp_ip(screen.get_rect())

    angle += ANGLE_SPEED * dt

    screen.blit(bg, (0,0))

    player_frame = player if facing>0 else pygame.transform.flip(player, True, False)
    screen.blit(player_frame, player_frame.get_rect(center=player_rect.center))

    rotated = pygame.transform.rotozoom(ball, -angle, 1.0)
    screen.blit(rotated, rotated.get_rect(center=ball_rect.center))

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Анимация спрайта (кадры)">
        <CodeBlock language="python">{`frames = [pygame.image.load(f'assets/player_frames/player_{i}.png').convert_alpha() for i in range(1,5)]
frame_index = 0
frame_time = 0.0
FRAME_DURATION = 0.12

frame_time += dt
if frame_time >= FRAME_DURATION:
    frame_time -= FRAME_DURATION
    frame_index = (frame_index + 1) % len(frames)

current = frames[frame_index]`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Папка кадров: <code>assets/player_frames/player_1.png ... player_4.png</code>. Если нет — используй один PNG.
        </p>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Путь к ассетам:</strong> вынести базовый путь в переменную и использовать <code>os.path.join</code>.</li>
          <li><strong>Flip по направлению:</strong> отражать спрайт по X при движении влево.</li>
          <li><strong>Поворот:</strong> сделать вращающийся объект со скоростью 90–180°/с.</li>
          <li><strong>Анимация:</strong> переключать кадры каждые 0.1–0.15 с.</li>
          <li><strong>Коллизии:</strong> проверить пересечение <code>Rect</code> игрока и вращающегося объекта.</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Угол: градусы → визуально по часовой
rot = pygame.transform.rotozoom(ball_img, -angle_deg, 1.0)`}</CodeBlock>
        <CodeBlock language="python">{`# Безопасная загрузка
def load_image(path):
    try: return pygame.image.load(path).convert_alpha()
    except: return pygame.Surface((64,64), pygame.SRCALPHA)`}</CodeBlock>
        <CodeBlock language="python">{`# Коллизия
if player_rect.colliderect(rotated.get_rect(center=ball_rect.center)):
    print('hit!')`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Не используешь <code>convert_alpha()</code> — фон PNG отрисовывается медленно/непрозрачно.</li>
          <li>Пытаешься поворачивать уже отмасштабированный и искажённый кадр по много раз — накапливаются артефакты. Всегда вращай исходный кадр.</li>
          <li>Забываешь пересчитать <code>rect</code> после поворота (<code>get_rect(center=...)</code>).</li>
          <li>Некорректные пути к файлам — размещай ассеты в <code>assets/</code>.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m10.zip">m10.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m10.zip">m10.zip</a></li>
        </ul>
      </Section>

    </div>
  )
}
