import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Звук'>
        <CodeBlock language="python">{`
import pygame, sys
pygame.init()
pygame.mixer.init()
screen_surface = pygame.display.set_mode((600, 400))
pygame.display.set_caption('Звук и музыка')
pygame.mixer.music.load('assets/sound/music.wav')
pygame.mixer.music.set_volume(0.4)
pygame.mixer.music.play(-1)
click_sound = pygame.mixer.Sound('assets/sound/beep.wav')
click_sound.set_volume(0.7)
is_running: bool = True
while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.MOUSEBUTTONDOWN:
            click_sound.play()
    screen_surface.fill((250, 250, 250))
    pygame.display.flip()
pygame.quit()
sys.exit()
        `}</CodeBlock>
      </Section>
    </div>
  );
}
