import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Задача модуля">
        <p>
          В этом модуле собраны <strong>частые ошибки</strong> при работе с PyGame и способы их исправления.  
          Они разделены на категории: инициализация, игровой цикл, FPS, события, спрайты, пути к файлам и звук.
        </p>
      </Section>

      <Section title="1. Не вызвали pygame.init()">
        <CodeBlock language="python">{`import pygame

# ❌ Ошибка
pygame.display.set_mode((800, 600))  # Ошибка: "video system not initialized"

# ✅ Правильно
pygame.init()
screen = pygame.display.set_mode((800, 600))`}</CodeBlock>
        <p className="text-sm text-gray-500">Всегда инициализируй PyGame перед использованием любых модулей.</p>
      </Section>

      <Section title="2. Нет pygame.display.flip() / update()">
        <CodeBlock language="python">{`# ❌ Экран остаётся пустым
pygame.draw.circle(screen, (255,0,0), (100,100), 30)

# ✅ Правильно
pygame.draw.circle(screen, (255,0,0), (100,100), 30)
pygame.display.flip()`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Без <code>pygame.display.flip()</code> или <code>pygame.display.update()</code> экран не обновляется.
        </p>
      </Section>

      <Section title="3. Нет обработки событий">
        <CodeBlock language="python">{`# ❌ Ошибка: окно зависает
while True:
    screen.fill((0,0,0))
    pygame.display.flip()

# ✅ Правильно
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    screen.fill((0,0,0))
    pygame.display.flip()`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Если не обрабатывать <code>pygame.event.get()</code>, ОС считает окно «неотвечающим».
        </p>
      </Section>

      <Section title="4. FPS и зависимость скорости от частоты кадров">
        <CodeBlock language="python">{`# ❌ Ошибка: движение быстрее при высоком FPS
x += 5  # фиксированный шаг -> разная скорость

# ✅ Правильно (используем delta time)
dt = clock.tick(60) / 1000.0
x += 250 * dt  # пикселей в секунду`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Всегда используй <code>dt</code> (время одного кадра) для равномерного движения.
        </p>
      </Section>

      <Section title="5. Прямое сравнение событий">
        <CodeBlock language="python">{`# ❌ Ошибка
if event == pygame.KEYDOWN:
    ...

# ✅ Правильно
if event.type == pygame.KEYDOWN:
    ...`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Всегда сравнивай <code>event.type</code>, а не сам объект события.
        </p>
      </Section>

      <Section title="6. Проблемы с путями к файлам">
        <CodeBlock language="python">{`# ❌ Ошибка
img = pygame.image.load("player.png")  # может не найти файл

# ✅ Правильно
import os
img = pygame.image.load(os.path.join("assets", "images", "player.png"))`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Всегда строй пути через <code>os.path.join</code> и храни ассеты в отдельной папке <code>assets/</code>.
        </p>
      </Section>

      <Section title="7. Ошибки со звуком">
        <CodeBlock language="python">{`# ❌ Ошибка: звук не играет
pygame.mixer.Sound("sound.wav").play()

# ✅ Правильно
pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.init()
click = pygame.mixer.Sound("assets/click.wav")
click.play()`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Для корректной работы звука важно вызывать <code>pygame.mixer.pre_init()</code> до <code>pygame.init()</code>.
        </p>
      </Section>

      <Section title="8. Сброс rect после трансформации">
        <CodeBlock language="python">{`# ❌ Ошибка: rect теряет позицию
sprite.image = pygame.transform.scale(sprite.image, (64,64))

# ✅ Правильно
center = sprite.rect.center
sprite.image = pygame.transform.scale(sprite.image, (64,64))
sprite.rect = sprite.image.get_rect(center=center)`}</CodeBlock>
        <p className="text-sm text-gray-500">
          После изменения размера изображения всегда пересобирай <code>rect</code>.
        </p>
      </Section>

      <Section title="9. Обработка исключений">
        <CodeBlock language="python">{`try:
    img = pygame.image.load("missing.png")
except pygame.error:
    print("Файл не найден")`}</CodeBlock>
      </Section>

      <Section title="Частые тексты ошибок">
        <CodeBlock language="text">{`pygame.error: video system not initialized   ->  pygame.init() не вызван
pygame.error: Couldn't open file               ->  путь к файлу неверный
AttributeError: 'Event' object has no attribute 'key'  ->  проверяй event.type перед event.key
pygame.error: mixer not initialized           ->  вызови pygame.mixer.init()`}</CodeBlock>
      </Section>

      <Section title="Задания">
        <ol className="space-y-2">
          <li>Исправь код, который открывает окно, но не вызывает <code>pygame.init()</code>.</li>
          <li>Напиши функцию <code>safe_load_image(path)</code>, которая загружает изображение, но не падает при ошибке.</li>
          <li>Добавь обработку событий <code>QUIT</code> в существующий игровой цикл.</li>
          <li>Сделай перемещение персонажа равномерным, используя <code>dt</code>.</li>
        </ol>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Шпаргалка по ошибкам: <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m18.zip">m18.zip</a></li>
          <li>📦 Starter-файлы: <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m18.zip">m18.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
