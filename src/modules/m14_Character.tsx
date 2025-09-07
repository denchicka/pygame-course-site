import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Движение персонажа на картинках: ходьба влево/вправо, разворот спрайта, прыжок с гравитацией,
          анимация состояний (<code>idle</code>/<code>run</code>/<code>jump</code>), базовые коллизии с платформами.
        </p>
      </Section>

      <Section title="Структура ассетов (рекомендуется)">
        <CodeBlock language="text">{`assets/
  bg.png
  character/
    idle_1.png  idle_2.png
    run_1.png   run_2.png   run_3.png   run_4.png
    jump.png`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Если файлов нет — в примерах есть «заглушки», чтобы можно было запустить без ассетов.
        </p>
      </Section>

      <Section title="База: загрузка кадров и выбор по состоянию">
        <CodeBlock language="python">{`def load_frames(folder: str, names: list[str], fallback=(64,64)) -> list[pygame.Surface]:
    frames = []
    for n in names:
        try:
            frames.append(pygame.image.load(os.path.join(folder, n)).convert_alpha())
        except:
            s = pygame.Surface(fallback, pygame.SRCALPHA)
            s.fill((120,170,250)); pygame.draw.rect(s, (240,240,240), s.get_rect(), 2)
            frames.append(s)
    return frames

idle_frames = load_frames('assets/character', ['idle_1.png', 'idle_2.png'])
run_frames  = load_frames('assets/character', ['run_1.png','run_2.png','run_3.png','run_4.png'])
jump_frame  = pygame.image.load('assets/character/jump.png').convert_alpha()  # или заглушка`}</CodeBlock>
      </Section>

      <Section title="Позиционирование: midbottom и разворот по направлению">
        <CodeBlock language="python">{`# pos — вектор "пяток" (midbottom)
frame = current_surface()
if facing < 0:
    frame = pygame.transform.flip(frame, True, False)
rect = frame.get_rect(midbottom=(int(pos.x), int(pos.y)))
screen_surface.blit(frame, rect)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Привязка к <code>midbottom</code> удобна: «ноги стоят на земле», и рост персонажа не влияет на уровень пола.
        </p>
      </Section>

      <Section title="Физика: ходьба, прыжок, гравитация">
        <CodeBlock language="python">{`GRAVITY = 1800.0
MOVE_SPEED = 320.0
JUMP_SPEED = 700.0
GROUND_Y = 520

vel = pygame.Vector2(0, 0)
pos = pygame.Vector2(W//2, GROUND_Y)
on_ground = True

keys = pygame.key.get_pressed()
dirx = (1 if keys[pygame.K_d] or keys[pygame.K_RIGHT] else 0) - (1 if keys[pygame.K_a] or keys[pygame.K_LEFT] else 0)
vel.x = dirx * MOVE_SPEED
if dirx != 0: facing = 1 if dirx > 0 else -1

if (keys[pygame.K_SPACE] or keys[pygame.K_w] or keys[pygame.K_UP]) and on_ground:
    vel.y = -JUMP_SPEED; on_ground = False

vel.y += GRAVITY * dt
pos += vel * dt

if pos.y > GROUND_Y:  # «земля»
    pos.y = GROUND_Y; vel.y = 0; on_ground = True`}</CodeBlock>
      </Section>

      <Section title="Анимационные состояния">
        <CodeBlock language="python">{`if not on_ground:
    state = 'jump'
elif abs(vel.x) > 1:
    state = 'run'
else:
    state = 'idle'

# Тайминги
FRAME_IDLE = 0.5
FRAME_RUN  = 0.1
frame_time += dt
if state == 'run' and frame_time >= FRAME_RUN:
    frame_time -= FRAME_RUN; frame_index = (frame_index + 1) % len(run_frames)
elif state == 'idle' and frame_time >= FRAME_IDLE:
    frame_time -= FRAME_IDLE; frame_index = (frame_index + 1) % len(idle_frames)`}</CodeBlock>
      </Section>

      <Section title="Собранный пример (walking + jump)">
        <CodeBlock language="python">{`# Полный runnable-пример см. в финальном архиве.
# Ключевые элементы: загрузка кадров, midbottom-выравнивание, flip по направлению,
# физика (скорости, гравитация) и простой выбор кадра по состоянию.`}</CodeBlock>
      </Section>

      <Section title="Платформы и коллизии (Rect)">
        <CodeBlock language="python">{`platforms = [pygame.Rect(100,460,200,20), pygame.Rect(420,400,160,20), pygame.Rect(640,500,180,20)]

# Детекция через Rect текущего кадра:
rect = current_surface().get_rect(midbottom=(int(pos.x), int(pos.y)))
# Сначала двигаем по X и проверяем столкновения, затем по Y — классический порядок.`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Двойной прыжок:</strong> разрешить второй прыжок в воздухе (счётчик прыжков).</li>
          <li><strong>Короткий/длинный прыжок:</strong> при отпускании пробела раньше — уменьшать вертикальную скорость.</li>
          <li><strong>Атака:</strong> добавить состояние <code>attack</code> и отдельные кадры (блокировать управление на время анимации).</li>
          <li><strong>Лестницы/трамплин:</strong> прямоугольники особого типа: на лестнице отключать гравитацию; на пружине — задавать импульс вверх.</li>
          <li><strong>Хитбокс vs. видимая область:</strong> использовать отдельный <code>Rect</code> для коллизий (уже без «пушистых» волос и т.п.).</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Двойной прыжок
max_jumps = 2; jumps_left = 2
if key_space_pressed and jumps_left > 0:
    vel.y = -JUMP_SPEED; jumps_left -= 1
if on_ground: jumps_left = max_jumps`}</CodeBlock>
        <CodeBlock language="python">{`# Короткий прыжок (variable jump height)
if event.type == pygame.KEYUP and event.key == pygame.K_SPACE and vel.y < -200:
    vel.y = -200`}</CodeBlock>
        <CodeBlock language="python">{`# Отдельный хитбокс
hitbox = pygame.Rect(0,0, rect.w*0.6, rect.h*0.9); hitbox.center = rect.center`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Привязка по левому верхнему углу: при смене кадра персонаж «подскакивает». Привязывай по <code>midbottom</code>.</li>
          <li>Поворот уже повернутого кадра: артефакты и мыло. Всегда отражай исходный кадр.</li>
          <li>Неправильный порядок коллизий: смешивание X/Y приводит к «залипанию» в платформах.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m14.zip">m14.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m14.zip">m14.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
