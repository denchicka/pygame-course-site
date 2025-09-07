import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Разобраться со <code>pygame.sprite</code>: как писать свои спрайты (<code>image</code> + <code>rect</code>),
          объединять их в группы (<code>Group</code>, <code>GroupSingle</code>, <code>LayeredUpdates</code>), массово <code>update</code>/<code>draw</code>,
          и проверять столкновения (<code>spritecollide</code>, <code>groupcollide</code>).
        </p>
      </Section>

      <Section title="Базовый спрайт: обязательные поля">
        <CodeBlock language="python">{`class Player(pygame.sprite.Sprite):
    def __init__(self, pos):
        super().__init__()
        self.image = pygame.Surface((48,48), pygame.SRCALPHA)
        self.image.fill((90,170,250))
        self.rect = self.image.get_rect(center=pos)

    def update(self, dt: float):
        pass  # логика кадра`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Группы используют <code>sprite.image</code> и <code>sprite.rect</code> для отрисовки; метод <code>update()</code> вызывается при <code>group.update()</code>.
        </p>
      </Section>

      <Section title="Группы и массовые операции">
        <CodeBlock language="python">{`all_sprites = pygame.sprite.Group()
player_group = pygame.sprite.GroupSingle()
enemies = pygame.sprite.Group()

player_group.add(player); enemies.add(e1, e2)
all_sprites.add(player, e1, e2)

all_sprites.update(dt)
all_sprites.draw(screen_surface)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          <code>GroupSingle</code> удобно держать для одного объекта (например, игрока). <code>LayeredUpdates</code> даёт контроль слоёв.
        </p>
      </Section>

      <Section title="Столкновения и удаление">
        <CodeBlock language="python">{`# sprite vs group
hits = pygame.sprite.spritecollide(player, enemies, dokill=False)

# group vs group
touch = pygame.sprite.groupcollide(enemies, coins, False, True)  # монеты исчезают

# удалить спрайт из всех групп:
coin.kill()`}</CodeBlock>
      </Section>

      <Section title="Собранный пример: игрок, враги, монеты, слои">
        <CodeBlock language="python">{`import pygame, sys, random
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
clock = pygame.time.Clock()

class Player(pygame.sprite.Sprite):
    def __init__(self, pos):
        super().__init__()
        self.image = pygame.Surface((48,48), pygame.SRCALPHA); self.image.fill((90,170,250))
        self.rect = self.image.get_rect(center=pos)
        self.speed = 320.0
    def update(self, dt):
        keys = pygame.key.get_pressed()
        v = pygame.Vector2((1 if keys[pygame.K_RIGHT] else 0)-(1 if keys[pygame.K_LEFT] else 0),
                           (1 if keys[pygame.K_DOWN] else 0)-(1 if keys[pygame.K_UP] else 0))
        if v.length_squared() > 0: v = v.normalize(); self.rect.move_ip(v.x*self.speed*dt, v.y*self.speed*dt)
        self.rect.clamp_ip(screen.get_rect())

# см. полную версию в финальном архиве`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Жизни игрока:</strong> при касании врага отнимать жизнь и делать короткую неуязвимость (таймер).</li>
          <li><strong>Волны врагов:</strong> когда все монеты собраны — добавить новую волну врагов/монет.</li>
          <li><strong>Уровни рисования:</strong> переделать на <code>LayeredUpdates</code> и поиграться со слоями (монеты под врагами, игрок поверх).</li>
          <li><strong>Анимация монет:</strong> «пульс» через масштабирование картинки в <code>update</code>.</li>
          <li><strong>Пули:</strong> отдельная группа пуль, удаление при выходе за экран, <code>groupcollide</code> с врагами.</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Слои с LayeredUpdates
layers = pygame.sprite.LayeredUpdates()
layers.add(player, layer=10)
layers.add(enemy, layer=5)
layers.add(coin, layer=1)
layers.draw(screen)`}</CodeBlock>
        <CodeBlock language="python">{`# Пересобираем rect после изменения image, сохраняя центр
center = sprite.rect.center
sprite.image = pygame.transform.smoothscale(sprite.image, (new_w, new_h))
sprite.rect = sprite.image.get_rect(center=center)`}</CodeBlock>
        <CodeBlock language="python">{`# Неуязвимость
if invuln_time > 0: invuln_time -= dt`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Забыть задать <code>image</code> или <code>rect</code> — группа не сможет рисовать.</li>
          <li>Менять размер <code>image</code>, но не пересчитывать <code>rect</code> — «прыгает» позиция.</li>
          <li>Использовать <code>Group.draw</code> без предварительного <code>fill</code> экрана — смазывание следов.</li>
          <li>Коллизии по старому прямоугольнику — обновляй <code>rect</code> до проверки.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m16.zip">m16.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m16.zip">m16.zip</a></li>
        </ul>
      </Section>

    </div>
  )
}
