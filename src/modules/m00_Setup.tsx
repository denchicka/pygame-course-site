import React from 'react'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'

export default function Module() {
  return (
    <div className="space-y-6">
      <Section title="Цель модуля">
        <p>
          Подготовим окружение под Windows: установим Python <strong>3.10+</strong> (рекомендуется <strong>3.12+</strong>),
          настроим виртуальное окружение, поставим <code>pygame</code>, запустим первый скрипт.
          Краткая выжимка по переменным, циклам, условиям и классам — в конце.
        </p>
      </Section>

      <Section title="Что установить">
        <ul>
          <li>Python 3.10+ (лучше 3.12+) — при установке включить галочку <em>“Add Python to PATH”</em>.</li>
          <li>Редактор: VS Code (расширение <em>Python</em>) или PyCharm (Community).</li>
          <li>Опционально: Git (для работы с GitHub).</li>
        </ul>
      </Section>

      <Section title="Проверка установки Python">
        <p>Открыть <em>PowerShell</em> и проверить:</p>
        <CodeBlock language="bash">{`python --version
py -V
# если установлена 3.12:
py -3.12 --version`}</CodeBlock>
        <p className="text-sm text-gray-500">
          Удобно использовать лаунчер <code>py</code>: <code>py -3.12</code> запускает конкретную версию.
        </p>
      </Section>

      <Section title="Создание проекта и виртуального окружения (Windows)">
        <CodeBlock language="bash">{`mkdir pygame_course && cd pygame_course
# создать виртуальное окружение под 3.12 (если установлена)
py -3.12 -m venv .venv

# активировать окружение
.venv\\Scripts\\activate

# обновить pip (по желанию)
python -m pip install --upgrade pip`}</CodeBlock>
        <p>Далее все пакеты устанавливаются внутри активированного окружения.</p>
      </Section>

      <Section title="Установка PyGame">
        <CodeBlock language="bash">{`pip install pygame`}</CodeBlock>
        <p>Быстрая проверка:</p>
        <CodeBlock language="python">{`import pygame
print(pygame.__version__)`}</CodeBlock>
      </Section>

      <Section title="Первый запуск — минимальное окно">
        <CodeBlock language="python">{`import pygame, sys

pygame.init()

screen_width: int = 800
screen_height: int = 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('PyGame — первое окно')

is_running: bool = True
while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill((230, 230, 240))
    pygame.display.flip()

pygame.quit()
sys.exit()`}</CodeBlock>
        <p>Откроется окно 800×600 с однотонным фоном.</p>
      </Section>

      <Section title="VS Code — быстрый старт">
        <ol>
          <li>Установить расширение <em>Python</em>.</li>
          <li>Выбрать интерпретатор — указать <code>.venv</code>.</li>
          <li>Создать <code>.vscode/launch.json</code> для запуска <code>main.py</code>:</li>
        </ol>
        <CodeBlock language="json">{`{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Запуск main.py",
      "type": "python",
      "request": "launch",
      "program": "\${workspaceFolder}/main.py",
      "console": "integratedTerminal"
    }
  ]
}`}</CodeBlock>
        <p>Запуск — <kbd>F5</kbd> или меню Run.</p>
      </Section>

      <Section title="PyCharm — быстрый старт">
        <ol>
          <li>Open → выбрать папку проекта <code>pygame_course</code>.</li>
          <li>File → Settings → Python Interpreter → выбрать интерпретатор из <code>.venv</code> (Add → Existing).</li>
          <li>ПКМ по <code>main.py</code> → Run.</li>
        </ol>
      </Section>

      <Section title="База Python (кратко): переменные, условия, циклы, функции, классы">
        <CodeBlock language="python">{`# Переменные и типы
player_name: str = "Alex"
player_score: int = 0
speed_in_pixels_per_second: float = 120.0
is_running: bool = True

# Условие
if player_score >= 10:
    print("Level up!")
else:
    print("Keep going!")

# Циклы
for i in range(3):
    print("i =", i)

counter: int = 0
while counter < 3:
    print("counter =", counter)
    counter += 1

# Функции
def add_score(current: int, delta: int) -> int:
    return current + delta

player_score = add_score(player_score, 5)

# Классы
class Player:
    def __init__(self, name: str, x: int, y: int):
        self.name = name
        self.x = x
        self.y = y

    def move_by(self, dx: int, dy: int) -> None:
        self.x += dx
        self.y += dy

hero = Player("Alex", 100, 100)
hero.move_by(10, -5)
print(hero.name, hero.x, hero.y)`}</CodeBlock>
      </Section>

      <Section title="Частые ошибки">
        <ul>
          <li>Не активировано виртуальное окружение → <code>pygame</code> не находится.</li>
          <li>Отсутствует <code>pygame.init()</code> — часть модулей не работает.</li>
          <li>Нет цикла или нет <code>pygame.display.flip()</code> — «пустой экран».</li>
          <li>Запуск не из папки проекта → неверные пути к ресурсам.</li>
          <li>В VS Code выбран не тот интерпретатор (не из <code>.venv</code>).</li>
        </ul>
      </Section>

      <Section title="Задания">
        <ol className="space-y-2">
          <li><strong>Окно:</strong> создать окно 900×600 и заголовок «Мой первый проект на PyGame».</li>
          <li><strong>Фон:</strong> вынести цвет фона в переменную <code>background_color</code> и использовать её.</li>
          <li><strong>Кнопка выхода:</strong> добавить обработку события <code>QUIT</code> в цикле.</li>
          <li><strong>VS Code:</strong> настроить <code>.vscode/launch.json</code> и запустить <code>main.py</code> с <kbd>F5</kbd>.</li>
        </ol>
      </Section>

      <Section title="Подсказки и ответы (фрагменты)">
        <CodeBlock language="python">{`# 1) Окно 900x600 + заголовок
screen_surface = pygame.display.set_mode((900, 600))
pygame.display.set_caption('Мой первый проект на PyGame')`}</CodeBlock>

        <CodeBlock language="python">{`# 2) Фон как переменная
background_color = (230, 230, 240)
screen_surface.fill(background_color)`}</CodeBlock>

        <CodeBlock language="python">{`# 3) Закрытие окна
for event in pygame.event.get():
    if event.type == pygame.QUIT:
        is_running = False`}</CodeBlock>

        <CodeBlock language="json">{`# 4) .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    { "name": "Python: Запуск main.py", "type": "python", "request": "launch", "program": "\${workspaceFolder}/main.py", "console": "integratedTerminal" }
  ]
}`}</CodeBlock>
      </Section>

      <Section title="Скачать материалы">
        <ul>
          <li>📦 Заготовка (starter): <a href="https://denchicka.github.io/pygame-course-site/downloads/starter/m00.zip">m00.zip</a></li>
          <li>📦 Итог (final): <a href="https://denchicka.github.io/pygame-course-site/downloads/final/m00.zip">m00.zip</a></li>
        </ul>
      </Section>
    </div>
  )
}
