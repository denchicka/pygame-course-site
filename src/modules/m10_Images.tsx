import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Изображения'>
        <CodeBlock language="python">{`
import pygame, sys
pygame.init()
screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Изображения: загрузка и трансформации')
clock_for_fps_control = pygame.time.Clock()
ball_surface = pygame.image.load('assets/ball.bmp').convert()
ball_surface.set_colorkey((0, 0, 0))
ball_position_x: float = 100.0
ball_position_y: float = 100.0
ball_speed_x: float = 150.0
angle_in_degrees: float = 0.0
is_running: bool = True
while is_running:
    delta_time_in_seconds: float = clock_for_fps_control.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
    ball_position_x += ball_speed_x * delta_time_in_seconds
    if ball_position_x > 760 or ball_position_x < 0:
        ball_speed_x *= -1
    angle_in_degrees += 90.0 * delta_time_in_seconds
    rotated = pygame.transform.rotate(ball_surface, angle_in_degrees)
    screen_surface.fill((240,240,255))
    screen_surface.blit(rotated, (int(ball_position_x), int(ball_position_y)))
    pygame.display.flip()
pygame.quit()
sys.exit()
        `}</CodeBlock>
      </Section>
    </div>
  );
}
