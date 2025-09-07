import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          Управление вводом: клавиатура (<code>KEYDOWN/KEYUP</code> vs <code>get_pressed()</code>), модификаторы (Ctrl/Shift/Alt),
          мышь (клики, двойной клик, перетаскивание, колесо), а также базовый текстовый ввод через <code>pygame.TEXTINPUT</code>.
        </p>
      </Section>

      <Section title="Клава: разовые события и удержание">
        <CodeBlock language="python">{`# Разовое действие — KEYDOWN/KEYUP
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
        print('jump once')

# Удержание — каждый кадр по состоянию клавиш
keys = pygame.key.get_pressed()
dx = (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * speed * dt
dy = (keys[pygame.K_DOWN] - keys[pygame.K_UP]) * speed * dt`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Для непрерывных действий (движение) используй <code>get_pressed()</code>. Для триггеров (прыжок, выстрел) — <code>KEYDOWN</code>.
        </p>
      </Section>

      <Section title="Модификаторы: Ctrl/Shift/Alt">
        <CodeBlock language="python">{`mods = pygame.key.get_mods()
if (mods & pygame.KMOD_CTRL) and event.type == pygame.KEYDOWN and event.key == pygame.K_s:
    print('Ctrl+S')`}</CodeBlock>
      </Section>

      <Section title="Текстовый ввод (TEXTINPUT) + спец. клавиши">
        <CodeBlock language="python">{`name = ""
for event in pygame.event.get():
    if event.type == pygame.TEXTINPUT:
        name += event.text              # добавляет локализованные символы
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_BACKSPACE: name = name[:-1]
        if event.key == pygame.K_RETURN:    print('entered:', name)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          <code>TEXTINPUT</code> учитывает раскладку и язык. Для «командных» клавиш (Enter/Backspace/Arrows) продолжай использовать <code>KEYDOWN</code>.
        </p>
      </Section>

      <Section title="Мышь: клики/двойной клик/перетаскивание/колесо">
        <CodeBlock language="python">{`last_click = 0
DOUBLE_MS = 250

if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
    now = pygame.time.get_ticks()
    is_double = (now - last_click) <= DOUBLE_MS
    last_click = now
    if rect.collidepoint(event.pos):
        dragging = True
        drag_offset = pygame.Vector2(event.pos) - rect.topleft
        if is_double: start_text_input()

if event.type == pygame.MOUSEMOTION and dragging:
    rect.topleft = (event.pos[0] - drag_offset.x, event.pos[1] - drag_offset.y)

if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
    dragging = False

# Колесо — масштаб
if event.type == pygame.MOUSEBUTTONDOWN and event.button in (4,5):
    rect.inflate_ip(10 if event.button==4 else -10, 6 if event.button==4 else -6)`}</CodeBlock>
      </Section>

      <Section title="Собранный пример (редактор прямоугольников)">
        <CodeBlock language="python">{`# Полный runnable-проект — в архиве. 
# Возможности: выбор ЛКМ, перетаскивание, двойной клик/ F2 — переименование, 
# стрелки — микросдвиг (Shift ускоряет), колесо — масштаб, Ctrl+D — дублирование, Ctrl+A — выделить все, DEL — удалить.`}</CodeBlock>
      </Section>

      <Section title="Практика — задания">
        <ol className="space-y-2">
          <li><strong>Ограничитель перетаскивания:</strong> при удержании <kbd>Shift</kbd> двигать только по X, при <kbd>Alt</kbd> — только по Y.</li>
          <li><strong>Прямоугольное выделение:</strong> нарисуй «рамку выбора» при протаскивании правой кнопкой мыши; выбери все попавшие объекты.</li>
          <li><strong>Снап к сетке:</strong> при отпускании ЛКМ округляй координаты к ближайшим 10 px.</li>
          <li><strong>История действий:</strong> добавь стек отмены (Ctrl+Z) — сохраняй копию списка перед изменением.</li>
          <li><strong>Тянущиеся края:</strong> реализуй ресайз за углы (курсор над углом — меняется курсор/режим).</li>
        </ol>
      </Section>

      <Section title="Подсказки (фрагменты)">
        <CodeBlock language="python">{`# Ограничение направления при перетаскивании
mods = pygame.key.get_mods()
if mods & pygame.KMOD_SHIFT: new_pos.y = rect.y
if mods & pygame.KMOD_ALT:   new_pos.x = rect.x`}</CodeBlock>
        <CodeBlock language="python">{`# Снап к сетке 10px
rect.x = round(rect.x / 10) * 10
rect.y = round(rect.y / 10) * 10`}</CodeBlock>
        <CodeBlock language="python">{`# Рамка выделения
selecting = False; select_rect = pygame.Rect(0,0,0,0)
# on RMB down: selecting=True; select_rect.topleft=pos
# on motion: select_rect.size = (pos.x - select_rect.x, pos.y - select_rect.y)
# on up: для каждого box: if select_rect.colliderect(box.rect): box.selected=True`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Обрабатываешь набор символов через <code>KEYDOWN</code> — не будет работать раскладка. Используй <code>TEXTINPUT</code>.</li>
          <li>Перетаскивание без учёта смещения — «скачок» при начале драга.</li>
          <li>Не различаешь разовые события и удержание — движение «рывками».</li>
        </ul>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m15.zip">m15.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m15.zip">m15.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
