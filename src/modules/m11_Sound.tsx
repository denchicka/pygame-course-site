import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Подключить звук: фоновая музыка через <code>pygame.mixer.music</code>, эффекты <code>Sound</code> на свободных каналах,
          управление громкостью с клавиатуры, пауза/стоп/затухание.
        </p>
      </Section>

      <Section title="Инициализация микшера">
        <CodeBlock language="python">{`pygame.mixer.pre_init(44100, -16, 2, 512)  # частота, глубина, каналы, буфер
pygame.init()
pygame.mixer.init()`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Рекомендуется вызывать <code>pre_init</code> до <code>pygame.init()</code>. Буфер 512–1024 обычно даёт хорошую задержку без щелчков.
        </p>
      </Section>

      <Section title="Фоновая музыка (music)">
        <CodeBlock language="python">{`pygame.mixer.music.load('assets/sounds/music.ogg')
pygame.mixer.music.set_volume(0.6)  # 0.0..1.0
pygame.mixer.music.play(-1)         # -1 — зациклить
# Пауза/продолжение/стоп/затухание:
pygame.mixer.music.pause()
pygame.mixer.music.unpause()
pygame.mixer.music.stop()
pygame.mixer.music.fadeout(1200)`}</CodeBlock>
      </Section>

      <Section title="Эффекты (Sound) и каналы">
        <CodeBlock language="python">{`click = pygame.mixer.Sound('assets/sounds/click.wav')
jump  = pygame.mixer.Sound('assets/sounds/jump.wav')
boom  = pygame.mixer.Sound('assets/sounds/explosion.wav')

pygame.mixer.set_num_channels(16)
channel = pygame.mixer.find_channel(True)  # True — выделить, если занято
channel.play(click)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Можно хранить несколько звуков и проигрывать их параллельно на разных каналах. Громкость каждого звука: <code>Sound.set_volume()</code>.
        </p>
      </Section>

      <Section title="Клавиши управления (пример)">
        <CodeBlock language="python">{`if event.type == pygame.KEYDOWN:
    if event.key == pygame.K_m:   # play/stop
        pygame.mixer.music.stop() if pygame.mixer.music.get_busy() else pygame.mixer.music.play(-1)
    if event.key == pygame.K_p:   # pause/unpause
        pygame.mixer.music.pause() if pygame.mixer.music.get_busy() else pygame.mixer.music.unpause()
    if event.key == pygame.K_f:   # fadeout
        pygame.mixer.music.fadeout(1000)`}</CodeBlock>
      </Section>

      <Section title="Собранный пример: музыка + SFX + громкость">
        <CodeBlock language="python">{`import pygame, sys
pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.init(); pygame.mixer.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Звук — сборка')
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 22)

MUSIC = 'assets/sounds/music.ogg'
SFX = {'1':'assets/sounds/click.wav','2':'assets/sounds/jump.wav','3':'assets/sounds/explosion.wav'}

music_volume = 0.6
sfx_volume = 0.8

# Загрузка
try:
    pygame.mixer.music.load(MUSIC)
    pygame.mixer.music.set_volume(music_volume)
    pygame.mixer.music.play(-1)
except Exception as e:
    print('music load:', e)

sfx = {}
for k, p in SFX.items():
    try:
        s = pygame.mixer.Sound(p); s.set_volume(sfx_volume); sfx[k] = s
    except Exception as e:
        print('sfx load:', p, e)

pygame.mixer.set_num_channels(16)

def clamp(x): return max(0.0, min(1.0, x))

running = True
while running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT: running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_m:
                pygame.mixer.music.stop() if pygame.mixer.music.get_busy() else pygame.mixer.music.play(-1)
            if event.key == pygame.K_p:
                pygame.mixer.music.pause() if pygame.mixer.music.get_busy() else pygame.mixer.music.unpause()
            if event.key == pygame.K_s:
                pygame.mixer.music.stop()
            if event.key == pygame.K_f:
                pygame.mixer.music.fadeout(1200)

            if event.key in (pygame.K_EQUALS, pygame.K_PLUS):  # +
                music_volume = clamp(music_volume + 0.05); pygame.mixer.music.set_volume(music_volume)
            if event.key == pygame.K_MINUS:                    # -
                music_volume = clamp(music_volume - 0.05); pygame.mixer.music.set_volume(music_volume)

            if event.key == pygame.K_LEFTBRACKET:              # [
                sfx_volume = clamp(sfx_volume - 0.05)
                for snd in sfx.values(): snd.set_volume(sfx_volume)
            if event.key == pygame.K_RIGHTBRACKET:             # ]
                sfx_volume = clamp(sfx_volume + 0.05)
                for snd in sfx.values(): snd.set_volume(sfx_volume)

            if event.unicode in sfx:
                ch = pygame.mixer.find_channel(True)
                if ch: ch.play(sfx[event.unicode])

    screen.fill((26,28,34))
    lines = [
        'M — play/stop, P — pause/unpause, S — stop, F — fadeout',
        '[ / ] — SFX volume, +/- — music volume, 1/2/3 — SFX',
        f'music: {"busy" if pygame.mixer.music.get_busy() else "stopped"} | vol={music_volume:.2f} | sfx vol={sfx_volume:.2f}'
    ]
    for i, msg in enumerate(lines):
        screen.blit(font.render(msg, True, (235,235,240)), (10, 10 + i*22))
    pygame.display.flip()

pygame.quit(); sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Fade-in:</strong> запусти музыку с «въездом»: <code>pygame.mixer.music.play(-1, fade_ms=1500)</code>.</li>
          <li><strong>Queue:</strong> после текущего трека поставь следующий через <code>pygame.mixer.music.queue(...)</code>.</li>
          <li><strong>Каналы:</strong> сохранение ссылки на канал и проверка <code>Channel.get_busy()</code> — не перезапускай звук, если он ещё идёт.</li>
          <li><strong>Громкость по сценам:</strong> сделай функцию-помощник, которая плавно меняет громкость музыки от текущей до целевой за N миллисекунд.</li>
          <li><strong>Баланс:</strong> попробуй имитировать «панораму»: воспроизводи звук на двух каналах с разной громкостью левого/правого (простейшая стерео-идея).</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Fade-in музыки
pygame.mixer.music.play(-1, fade_ms=1500)`}</CodeBlock>
        <CodeBlock language="python">{`# Очередь следующего трека
pygame.mixer.music.queue('assets/sounds/next.ogg')`}</CodeBlock>
        <CodeBlock language="python">{`# Канал и занятость
channel = pygame.mixer.find_channel(True)
if channel and not channel.get_busy():
    channel.play(click)`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Не вызван <code>pre_init</code> — щелчки/большая задержка.</li>
          <li>Неподходящий формат файла. Для музыки старайся <code>.ogg</code>, для коротких эффектов — <code>.wav</code>.</li>
          <li>Не проверяется, загружен ли файл — добавь <code>try/except</code>.</li>
          <li>Слишком громкий общий уровень — клиппинг (искажения). Держи громкости в пределах 0.5–0.8.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m11.zip">m11.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m11.zip">m11.zip</a></li>
        </ul>
      </Section>

    </div>
  )
}
