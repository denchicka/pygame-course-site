import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="PyGame — Шпаргалка (итог)">
        <p>
          Сжатая выжимка по базовым темам: окно, цикл, FPS, цвета/ось координат, отрисовка, <code>Rect</code>, движение,
          изображения/градусы, звук, события/таймеры, ввод, спрайты и группы. В конце — минимальный шаблон проекта.
        </p>
      </Section>

      <Section title="Окно, цикл, FPS">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()
W, H = 900, 600
screen_surface = pygame.display.set_mode((W, H))
pygame.display.set_caption('PyGame App')
clock = pygame.time.Clock()
is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT: is_running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE: is_running = False
    screen_surface.fill((24,26,32))
    pygame.display.flip()
pygame.quit(); sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Координаты, цвета, примитивы">
        <CodeBlock language="python">{`# (0,0) — левый верх; X — вправо, Y — вниз; цвет — (R,G,B)
pygame.draw.line(screen_surface, (200,200,220), (100,100), (300,120), 3)
pygame.draw.rect(screen_surface, (90,150,240), (350,100,120,80), 0, border_radius=12)
pygame.draw.circle(screen_surface, (255,190,60), (500,180), 30, 0)`}</CodeBlock>
      </Section>

      <Section title="Rect: якоря и методы">
        <CodeBlock language="python">{`r = pygame.Rect(0,0,120,80)
r.center = (450,300)
r.move_ip(10,-5)        # inplace-сдвиг
r.inflate_ip(20,10)     # inplace-изменение размера
r.clamp_ip(screen_surface.get_rect())`}</CodeBlock>
      </Section>

      <Section title="Движение с нормализацией">
        <CodeBlock language="python">{`keys = pygame.key.get_pressed()
v = pygame.Vector2((keys[pygame.K_RIGHT]-keys[pygame.K_LEFT]),
                   (keys[pygame.K_DOWN]-keys[pygame.K_UP]))
if v.length_squared() > 0: v = v.normalize()
r.move_ip(v.x * 260 * dt, v.y * 260 * dt)`}</CodeBlock>
      </Section>

      <Section title="Изображения, поворот, градусы">
        <CodeBlock language="python">{`img = pygame.image.load('assets/player.png').convert_alpha()
flipped = pygame.transform.flip(img, True, False)
rot = pygame.transform.rotozoom(img, -angle_deg, 1.0)  # «по часовой» — отрицательный угол`}</CodeBlock>
        <p className="text-sm text-gray-500">
          0° — вправо; 90° — вниз (если используешь <em>cos/sin</em>). <code>rotate</code> — положительный угол против часовой стрелки.
        </p>
      </Section>

      <Section title="Звук: музыка и эффекты">
        <CodeBlock language="python">{`pygame.mixer.pre_init(44100, -16, 2, 512); pygame.init(); pygame.mixer.init()
pygame.mixer.music.load('assets/sounds/music.ogg')
pygame.mixer.music.play(-1); pygame.mixer.music.set_volume(0.6)
click = pygame.mixer.Sound('assets/sounds/click.wav'); click.set_volume(0.8)
pygame.mixer.find_channel(True).play(click)`}</CodeBlock>
      </Section>

      <Section title="События, таймеры и пользовательские">
        <CodeBlock language="python">{`USEREVENT_SPAWN = pygame.USEREVENT + 1
pygame.time.set_timer(USEREVENT_SPAWN, 1000)
for event in pygame.event.get():
    if event.type == USEREVENT_SPAWN: print('tick')`}</CodeBlock>
      </Section>

      <Section title="Ввод: мышь, текст">
        <CodeBlock language="python">{`# Перетаскивание
if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and rect.collidepoint(event.pos):
    dragging = True; offset = pygame.Vector2(event.pos) - rect.topleft
if event.type == pygame.MOUSEMOTION and dragging:
    rect.topleft = (event.pos[0]-offset.x, event.pos[1]-offset.y)
if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
    dragging = False

# Текст
if event.type == pygame.TEXTINPUT: name += event.text
if event.type == pygame.KEYDOWN and event.key == pygame.K_BACKSPACE: name = name[:-1]`}</CodeBlock>
      </Section>

      <Section title="Спрайты и группы">
        <CodeBlock language="python">{`class Ball(pygame.sprite.Sprite):
    def __init__(self, pos):
        super().__init__()
        self.image = pygame.Surface((20,20), pygame.SRCALPHA)
        pygame.draw.circle(self.image, (255,190,60), (10,10), 10)
        self.rect = self.image.get_rect(center=pos)
    def update(self, dt): pass

balls = pygame.sprite.Group(Ball((100,100)), Ball((200,200)))
balls.update(dt); balls.draw(screen_surface)`}</CodeBlock>
      </Section>

      <Section title="Мини-шаблон проекта">
        <CodeBlock language="python">{`# main.py
import pygame, sys
def main():
    pygame.init(); screen = pygame.display.set_mode((900,600)); clock = pygame.time.Clock()
    run = True
    while run:
        dt = clock.tick(60)/1000.0
        for e in pygame.event.get():
            if e.type == pygame.QUIT or (e.type==pygame.KEYDOWN and e.key==pygame.K_ESCAPE): run=False
        screen.fill((24,26,32)); pygame.display.flip()
    pygame.quit(); sys.exit()
if __name__ == '__main__': main()`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки — напоминание">
        <ul>
          <li>Нет <code>pygame.init()</code> или <code>pygame.display.flip()</code>.</li>
          <li>Скорость зависит от FPS — умножай на <code>dt</code>.</li>
          <li>Не нормализуешь диагональ — быстрее по диагонали.</li>
          <li>Пути к файлам невалидны — оборачивай загрузку в <code>try/except</code>.</li>
          <li>Меняешь <code>image</code>, но забываешь пересчитать <code>rect</code>.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m17.zip">m17.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m17.zip">m17.zip</a></li>
        </ul>
      </Section>

     
    </div>
  )
}
