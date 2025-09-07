import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Понять очередь событий <code>pygame.event</code> и научиться работать с клавиатурой, мышью, колёсиком,
          таймерами (<code>set_timer</code>) и пользовательскими событиями (<code>USEREVENT</code>), а также увидеть разницу
          между обработкой <em>событий</em> и опросом состояний (<code>key.get_pressed()</code>).
        </p>
      </Section>

      <Section title="Очередь событий: базовый цикл">
        <CodeBlock language="python">{`for event in pygame.event.get():
    if event.type == pygame.QUIT:
        is_running = False
    if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
        is_running = False`}</CodeBlock>
        <p className="text-sm text-gray-500">
          События приходят в очередь; если их не извлекать, окно «зависает». Для постоянных действий (бег, движение) удобнее
          параллельно опрашивать состояние клавиш: <code>keys = pygame.key.get_pressed()</code>.
        </p>
      </Section>

      <Section title="Клавиатура: разовые vs удержание">
        <CodeBlock language="python">{`# Разовое: KEYDOWN/KEYUP
if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
    print('jump!')

# Удержание: get_pressed (каждый кадр)
keys = pygame.key.get_pressed()
dx = (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * speed * dt
dy = (keys[pygame.K_DOWN] - keys[pygame.K_UP]) * speed * dt
rect.move_ip(dx, dy)`}</CodeBlock>
      </Section>

      <Section title="Мышь: клики, движение, колесо">
        <CodeBlock language="python">{`if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
    print('ЛКМ вниз', event.pos)
if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
    print('ЛКМ вверх', event.pos)
if event.type == pygame.MOUSEMOTION:
    print('движение', event.pos, event.rel, event.buttons)
if event.type == pygame.MOUSEWHEEL:
    print('колесо', event.x, event.y)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          <code>MOUSEWHEEL.y</code> положителен при прокрутке «к себе» (вверх) и отрицателен «от себя» (вниз).
        </p>
      </Section>

      <Section title="Таймеры и пользовательские события">
        <CodeBlock language="python">{`USEREVENT_SPAWN = pygame.USEREVENT + 1
USEREVENT_FIRE  = pygame.USEREVENT + 2

pygame.time.set_timer(USEREVENT_SPAWN, 1000)  # раз в 1000 мс
pygame.event.post(pygame.event.Event(USEREVENT_FIRE, {'power': 10}))  # постим своё событие

if event.type == USEREVENT_SPAWN:
    print('spawn tick!')
if event.type == USEREVENT_FIRE:
    print('FIRE with power', event.power)`}</CodeBlock>
      </Section>

      <Section title="Собранный пример: клавиатура, мышь, колесо, таймер и свои события">
        <CodeBlock language="python">{`import pygame, sys, random
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('События — сборка')
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 20)

drag_rect = pygame.Rect(0, 0, 160, 100)
drag_rect.center = (W//2, H//2)
dragging = False
drag_offset = pygame.Vector2(0, 0)
border_thickness = 4

USEREVENT_FIRE  = pygame.USEREVENT + 1
USEREVENT_SPAWN = pygame.USEREVENT + 2
USEREVENT_BLINK = pygame.USEREVENT + 3
pygame.time.set_timer(USEREVENT_BLINK, 500)   # мигание рамки

logs = []
def log(msg):
    logs.append(msg)
    if len(logs) > 8: logs.pop(0)

spawn_enabled = False
def toggle_spawn():
    global spawn_enabled
    spawn_enabled = not spawn_enabled
    pygame.time.set_timer(USEREVENT_SPAWN, 1000 if spawn_enabled else 0)
    log(f'SPAWN: {"ON" if spawn_enabled else "OFF"}')

is_running = True
blink = False
while is_running:
    dt = clock.tick(60) / 1000.0

    keys = pygame.key.get_pressed()
    v = pygame.Vector2((1 if keys[pygame.K_RIGHT] else 0)-(1 if keys[pygame.K_LEFT] else 0),
                       (1 if keys[pygame.K_DOWN] else 0)-(1 if keys[pygame.K_UP] else 0))
    if v.length_squared() > 0:
        v = v.normalize()
        drag_rect.move_ip(v.x*240*dt, v.y*240*dt)
        drag_rect.clamp_ip(screen.get_rect())

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE: is_running = False
            elif event.key == pygame.K_SPACE:
                pygame.event.post(pygame.event.Event(USEREVENT_FIRE, {'power': random.randint(5,15)}))
                log('post FIRE')
            elif event.key == pygame.K_t:
                toggle_spawn()

        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and drag_rect.collidepoint(event.pos):
            dragging = True; drag_offset = pygame.Vector2(event.pos) - pygame.Vector2(drag_rect.center); log('drag start')
        elif event.type == pygame.MOUSEBUTTONUP and event.button == 1:
            if dragging: log('drag end'); dragging = False
        elif event.type == pygame.MOUSEMOTION and dragging:
            drag_rect.center = (event.pos[0] - drag_offset.x, event.pos[1] - drag_offset.y)

        if event.type == pygame.MOUSEWHEEL:
            border_thickness = max(1, min(12, border_thickness + event.y))
            log(f'wheel {event.y}: thickness={border_thickness}')

        if event.type == USEREVENT_SPAWN: log('SPAWN tick')
        if event.type == USEREVENT_BLINK: blink = not blink
        if event.type == USEREVENT_FIRE:  log(f'FIRE power={getattr(event,"power","?")}')

    screen.fill((24,26,32))
    pygame.draw.rect(screen, (70,120,210), drag_rect, 0, border_radius=12)
    pygame.draw.rect(screen, (220,230,255) if not blink else (255,120,120), drag_rect, border_thickness, border_radius=12)

    tips = ['ESC — выход | T — таймер SPAWN | SPACE — post FIRE',
            'Колесо — толщина рамки | Стрелки — сдвиг | ЛКМ — перетаскивание']
    for i, msg in enumerate(tips + logs[-8:]):
        screen.blit(font.render(msg, True, (235,235,240)), (10, 10 + i*20))

    pygame.display.flip()

pygame.quit(); sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Ограничение частоты событий:</strong> выключать SPAWN через 5 с после включения (таймер «одним разом»).</li>
          <li><strong>Двойной клик:</strong> зафиксируй время последнего клика и определи «double click» (интервал &lt; 250 мс).</li>
          <li><strong>Горячие клавиши:</strong> добавь <kbd>Ctrl</kbd>+<kbd>S</kbd> (сохранить) и <kbd>Ctrl</kbd>+<kbd>Q</kbd> (выйти).</li>
          <li><strong>Пользовательское событие:</strong> сделай <code>USEREVENT_SCORE</code> и пость его каждые N очков.</li>
          <li><strong>Фильтрация:</strong> разрешить только нужные типы: <code>pygame.event.set_allowed([...])</code>.</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Таймер один раз
ONCE = pygame.USEREVENT + 10
pygame.time.set_timer(ONCE, 5000, loops=1)`}</CodeBlock>
        <CodeBlock language="python">{`# Ctrl+S / Ctrl+Q
mods = pygame.key.get_mods()
if event.type == pygame.KEYDOWN and (mods & pygame.KMOD_CTRL):
    if event.key == pygame.K_s: print('save')
    if event.key == pygame.K_q: is_running = False`}</CodeBlock>
        <CodeBlock language="python">{`# set_allowed — пропускаем только нужные типы
pygame.event.set_allowed([pygame.QUIT, pygame.KEYDOWN, pygame.KEYUP, pygame.MOUSEBUTTONDOWN, pygame.MOUSEBUTTONUP, pygame.MOUSEMOTION, pygame.MOUSEWHEEL])`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Не извлекать события — окно не откликается (зависает).</li>
          <li>Делать «бесконечные» действия через KEYDOWN вместо <code>get_pressed()</code>.</li>
          <li>Забывать про <code>clamp_ip</code> — объект уезжает за пределы экрана при перетаскивании.</li>
          <li>Постить <code>Event</code> без данных и пытаться читать атрибуты — проверяй через <code>getattr</code>.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m13.zip">m13.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m13.zip">m13.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
