import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Фон и flip'>
        <CodeBlock language="python">{`
import pygame, sys
pygame.init()
screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Фон и flip')
is_running: bool = True
while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
    screen_surface.fill((64, 128, 200))
    pygame.display.flip()
pygame.quit()
sys.exit()
        `}</CodeBlock>
      </Section>
    </div>
  );
}
