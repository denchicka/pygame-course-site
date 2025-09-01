import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='pygame.Rect атрибуты'>
        <CodeBlock language="python">{`
import pygame, sys
pygame.init()
screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Атрибуты Rect')
clock_for_fps_control = pygame.time.Clock()
player_rectangle = pygame.Rect(100, 100, 80, 60)
is_running: bool = True
while is_running:
    delta_time_in_seconds: float = clock_for_fps_control.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
    player_rectangle.x += int(120 * delta_time_in_seconds)
    player_rectangle.centery = 300
    if player_rectangle.left > 800:
        player_rectangle.right = 0
    screen_surface.fill((255, 255, 255))
    pygame.draw.rect(screen_surface, (0, 120, 255), player_rectangle)
    pygame.display.flip()
pygame.quit()
sys.exit()
        `}</CodeBlock>
      </Section>
    </div>
  );
}
