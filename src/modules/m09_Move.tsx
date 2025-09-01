import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Движение фигур'>
        <CodeBlock language="python">{`
import pygame, sys
pygame.init()
screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Движение фигур и отскоки')
clock_for_fps_control = pygame.time.Clock()
rectangle = pygame.Rect(100, 100, 80, 60)
rectangle_velocity_x: float = 220.0
rectangle_velocity_y: float = 160.0
circle_position_x: float = 400.0
circle_position_y: float = 300.0
circle_radius: int = 30
circle_velocity_x: float = -180.0
circle_velocity_y: float = 140.0
is_running: bool = True
while is_running:
    delta_time_in_seconds: float = clock_for_fps_control.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
    rectangle.x += int(rectangle_velocity_x * delta_time_in_seconds)
    rectangle.y += int(rectangle_velocity_y * delta_time_in_seconds)
    if rectangle.left < 0 or rectangle.right > 800:
        rectangle_velocity_x *= -1
    if rectangle.top < 0 or rectangle.bottom > 600:
        rectangle_velocity_y *= -1
    circle_position_x += circle_velocity_x * delta_time_in_seconds
    circle_position_y += circle_velocity_y * delta_time_in_seconds
    if circle_position_x - circle_radius < 0 or circle_position_x + circle_radius > 800:
        circle_velocity_x *= -1
    if circle_position_y - circle_radius < 0 or circle_position_y + circle_radius > 600:
        circle_velocity_y *= -1
    screen_surface.fill((18, 18, 24))
    pygame.draw.rect(screen_surface, (255, 120, 0), rectangle)
    pygame.draw.circle(screen_surface, (0, 200, 255), (int(circle_position_x), int(circle_position_y)), circle_radius)
    pygame.display.flip()
pygame.quit()
sys.exit()
        `}</CodeBlock>
      </Section>
    </div>
  );
}
