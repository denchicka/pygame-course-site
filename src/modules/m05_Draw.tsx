import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Фигуры (draw)'>
        <CodeBlock language="python">{`
import pygame, sys
pygame.init()
screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Рисуем фигуры')
is_running: bool = True
while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
    screen_surface.fill((245, 245, 245))
    pygame.draw.line(screen_surface, (0, 100, 200), (50, 50), (300, 120), 5)
    pygame.draw.rect(screen_surface, (200, 50, 50), (400, 80, 200, 120), 3)
    pygame.draw.circle(screen_surface, (50, 180, 90), (200, 350), 60)
    pygame.display.flip()
pygame.quit()
sys.exit()
        `}</CodeBlock>
      </Section>
    </div>
  );
}
