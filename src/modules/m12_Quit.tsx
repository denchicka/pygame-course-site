import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Корректно закрывать игру: обработка события <code>pygame.QUIT</code>, выход по <kbd>ESC</kbd>, 
          различия между <code>break/return</code>, <code>pygame.quit()</code>, <code>sys.exit()</code>, 
          и необязательное подтверждение выхода.
        </p>
      </Section>

      <Section title="Базовый шаблон закрытия">
        <CodeBlock language="python">{`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((900, 600))
pygame.display.set_caption('Закрытие окна — базовый шаблон')
clock = pygame.time.Clock()

is_running: bool = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
            is_running = False

    screen_surface.fill((26,28,34))
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
      </Section>

      <Section title="QUIT и ESC: варианты">
        <ul>
          <li><strong>QUIT</strong> приходит при клике по крестику/Alt+F4 — завершай главный цикл.</li>
          <li><strong>ESC</strong> — удобный «горячий выход». Можно сделать подтверждение, а можно закрывать сразу.</li>
        </ul>
      </Section>

      <Section title="Подтверждение выхода (простое окно)">
        <CodeBlock language="python">{`show_confirm: bool = False

for event in pygame.event.get():
    if event.type == pygame.QUIT:
        show_confirm = True
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_ESCAPE:
            show_confirm = True
        if show_confirm and event.key == pygame.K_SPACE:
            is_running = False
        if show_confirm and event.key == pygame.K_n:
            show_confirm = False

# рендер окна подтверждения (прямоугольник с текстом)`}</CodeBlock>
      </Section>

      <Section title="Что делают break/return/pygame.quit()/sys.exit()">
        <ul>
          <li><code>break</code> — выходит из текущего цикла <em>while</em>.</li>
          <li><code>return</code> — завершает текущую функцию (например, <code>main()</code>).</li>
          <li><code>pygame.quit()</code> — корректно выгружает подсистемы PyGame (звук/видео).</li>
          <li><code>sys.exit()</code> — завершает процесс Python (в некоторых IDE не обязателен, но полезен).</li>
        </ul>
      </Section>

      <Section title="Собранный пример (с подтверждением)">
        <CodeBlock language="python">{`# -*- coding: utf-8 -*-
import pygame, sys

def main() -> None:
    pygame.init()
    W, H = 900, 600
    screen = pygame.display.set_mode((W, H))
    pygame.display.set_caption('Закрытие — подтверждение')
    clock = pygame.time.Clock()
    font = pygame.font.SysFont(None, 24)

    is_running = True
    show_confirm = False

    while is_running:
        dt = clock.tick(60) / 1000.0
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                show_confirm = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    show_confirm = True
                elif show_confirm and event.key == pygame.K_SPACE:
                    is_running = False
                elif show_confirm and event.key == pygame.K_n:
                    show_confirm = False

        screen.fill((26,28,34))

        if show_confirm:
            box = pygame.Rect(0, 0, 520, 160); box.center = (W//2, H//2)
            pygame.draw.rect(screen, (40,46,62), box, 0, border_radius=12)
            pygame.draw.rect(screen, (120,160,220), box, 2, border_radius=12)
            t1 = font.render('Выйти из приложения?', True, (235,235,240))
            t2 = font.render('SPACE — да, N — нет', True, (200,210,220))
            screen.blit(t1, (box.x+24, box.y+32))
            screen.blit(t2, (box.x+24, box.y+78))

        pygame.display.flip()

    pygame.quit()
    sys.exit()

if __name__ == '__main__':
    main()`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Двойной ESC:</strong> первый <kbd>ESC</kbd> — показать диалог, второй — подтвердить выход.</li>
          <li><strong>Таймаут:</strong> после показа диалога дать 5 секунд на ответ, затем отменить.</li>
          <li><strong>Красивая рамка:</strong> добавь полупрозрачный тёмный фон за окном подтверждения.</li>
          <li><strong>Оптимизация событий:</strong> разреши только <code>QUIT</code> и клавиатуру через <code>pygame.event.set_allowed</code>.</li>
          <li><strong>Лог при выходе:</strong> выведи в консоль «Saving… Done!» перед <code>pygame.quit()</code>.</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Полупрозрачный фон под диалог
overlay = pygame.Surface((W,H), pygame.SRCALPHA)
overlay.fill((0,0,0,140))
screen.blit(overlay, (0,0))`}</CodeBlock>
        <CodeBlock language="python">{`# Таймер для отмены диалога через 5 секунд
CONFIRM_OFF = pygame.USEREVENT + 1
pygame.time.set_timer(CONFIRM_OFF, 5000, loops=1)
# в обработчике: if event.type == CONFIRM_OFF: show_confirm = False`}</CodeBlock>
        <CodeBlock language="python">{`# Разрешить только нужные события
pygame.event.set_allowed([pygame.QUIT, pygame.KEYDOWN, pygame.KEYUP])`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Забыть про <code>pygame.quit()</code> — модуль может висеть в памяти.</li>
          <li>Вызывать <code>sys.exit()</code> без выхода из игрового цикла — код после продолжает выполняться.</li>
          <li>Игнорировать <code>QUIT</code> — окно «не закрывается» по крестику.</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m12.zip">m12.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m12.zip">m12.zip</a></li>
        </ul>
      </Section>

    </div>
  )
}
