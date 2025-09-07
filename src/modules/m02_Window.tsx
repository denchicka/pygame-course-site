import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Создаём окно PyGame нужного размера, задаём заголовок, настраиваем иконку, пробуем флаги окна (масштабируемое, полноэкранное),
          работаем с центром экрана и подготовим шаблон для будущих модулей.
        </p>
      </Section>

      <Section title="Создание окна и базовый шаблон">
        <CodeBlock language="python">{`import pygame, sys

pygame.init()

screen_width: int = 900
screen_height: int = 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Окно PyGame')

is_running: bool = True
background_color = (30, 30, 40)

while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill(background_color)
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Полезные флаги окна">
        <p>Флаги комбинируются через побитовое <code>|</code>:</p>
        <CodeBlock language="python">{`# Масштабируемое окно
screen_surface = pygame.display.set_mode((900, 600), pygame.RESIZABLE | pygame.SCALED)

# Полноэкранный режим
# screen_surface = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)

# Безрамочное окно
# screen_surface = pygame.display.set_mode((0, 0), pygame.NOFRAME)`}</CodeBlock>
      </Section>

      <Section title="Добавляем иконку и заголовок">
        <CodeBlock language="python">{`icon_surface = pygame.Surface((32, 32))
icon_surface.fill((255, 200, 0))
pygame.display.set_icon(icon_surface)
pygame.display.set_caption('PyGame — моя игра')`}</CodeBlock>
      </Section>

      <Section title="Рисуем фигуру в центре экрана">
        <CodeBlock language="python">{`screen_center_x: int = screen_width // 2
screen_center_y: int = screen_height // 2
pygame.draw.circle(screen_surface, (230, 230, 230), (screen_center_x, screen_center_y), 40)`}</CodeBlock>
      </Section>

      <Section title="Шаблон: окно + иконка + центр + рисование">
        <CodeBlock language="python">{`import pygame, sys

pygame.init()

screen_width: int = 1024
screen_height: int = 768
screen_surface = pygame.display.set_mode((screen_width, screen_height), pygame.RESIZABLE | pygame.SCALED)
pygame.display.set_caption('Окно: 1024x768')

icon_surface = pygame.Surface((32, 32))
icon_surface.fill((255, 200, 0))
pygame.display.set_icon(icon_surface)

background_color = (20, 40, 120)
screen_center_x: int = screen_width // 2
screen_center_y: int = screen_height // 2

is_running: bool = True
while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill(background_color)
    pygame.draw.circle(screen_surface, (230, 230, 230), (screen_center_x, screen_center_y), 40)

    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Размер:</strong> сделай окно 1024×768 и задай заголовок «Окно: 1024×768».</li>
          <li><strong>Цвет фона:</strong> вынеси цвет в переменную <code>background_color</code> и используй её.</li>
          <li><strong>Иконка:</strong> создай иконку 32×32 и сделай её жёлтой.</li>
          <li><strong>Флаги:</strong> активируй <code>RESIZABLE | SCALED</code>.</li>
          <li><strong>Центр:</strong> вычисли центр и нарисуй круг радиусом 40.</li>
        </ol>
      </Section>

      <Section title="Подсказки">
        <CodeBlock language="python">{`# 1) 1024x768
screen_surface = pygame.display.set_mode((1024, 768))
pygame.display.set_caption('Окно: 1024×768')`}</CodeBlock>
        <CodeBlock language="python">{`# 2) Цвет фона
background_color = (20, 40, 120)
screen_surface.fill(background_color)`}</CodeBlock>
        <CodeBlock language="python">{`# 3) Иконка
icon_surface = pygame.Surface((32, 32))
icon_surface.fill((255, 200, 0))
pygame.display.set_icon(icon_surface)`}</CodeBlock>
        <CodeBlock language="python">{`# 4) Флаги
screen_surface = pygame.display.set_mode((1024, 768), pygame.RESIZABLE | pygame.SCALED)`}</CodeBlock>
        <CodeBlock language="python">{`# 5) Центр
screen_center_x: int = 1024 // 2
screen_center_y: int = 768 // 2
pygame.draw.circle(screen_surface, (230, 230, 230), (screen_center_x, screen_center_y), 40)`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Забыли <code>pygame.display.flip()</code> — экран не обновляется.</li>
          <li>Фон не заливается → появляются артефакты от предыдущего кадра.</li>
          <li>Создание окна в цикле → «мигающее» окно (set_mode вызывается только один раз).</li>
          <li>Нет обработки <code>QUIT</code> — окно не закрывается.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m02.zip">m02.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m02.zip">m02.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
