import React from 'react'\nimport Section from '../components/Section'\nimport CodeBlock from '../components/CodeBlock'\nexport default function Module(){return(<div className='space-y-4'><Section title='FPS и delta-time'><>
<CodeBlock language="python">{`import pygame, sys
pygame.init()
screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('FPS и delta-time')
clock_for_fps_control = pygame.time.Clock()
frames_per_second_limit: int = 60
circle_position_x: float = 100.0
circle_position_y: float = 300.0
circle_speed_in_pixels_per_second: float = 200.0
is_running: bool = True
while is_running:
    delta_time_in_seconds: float = clock_for_fps_control.tick(frames_per_second_limit) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
    circle_position_x += circle_speed_in_pixels_per_second * delta_time_in_seconds
    if circle_position_x > 820:
        circle_position_x = -20
    screen_surface.fill((20, 20, 24))
    pygame.draw.circle(screen_surface, (255, 200, 0), (int(circle_position_x), int(circle_position_y)), 20)
    pygame.display.flip()
pygame.quit()
sys.exit()`}</CodeBlock>
<CodeBlock language="python">{`import math
angle_in_degrees: float = 45.0
angle_in_radians: float = math.radians(angle_in_degrees)
vector_x = math.cos(angle_in_radians)
vector_y = math.sin(angle_in_radians)`}</CodeBlock>
</></Section></div>)}\n