import React from 'react';
import Section from '../components/Section';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Система событий'>
        <p>
          Клавиатура, мышь, таймеры: обрабатываем <code>pygame.event.get()</code>,{' '}
          <code>pygame.key.get_pressed()</code> и пр.
        </p>
      </Section>
    </div>
  );
}
