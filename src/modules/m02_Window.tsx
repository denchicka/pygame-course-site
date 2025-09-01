import React from 'react'\nimport Section from '../components/Section'\nimport CodeBlock from '../components/CodeBlock'\nexport default function Module(){return(<div className='space-y-4'><Section title='Создание окна'><CodeBlock language="python">{`import pygame, sys
pygame.init()
screen_width: int = 900
screen_height: int = 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Окно PyGame — базовая настройка')
is_running: bool = True
while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
    screen_surface.fill((30, 30, 40))
    pygame.display.flip()
pygame.quit()
sys.exit()`}</CodeBlock></Section></div>)}\n