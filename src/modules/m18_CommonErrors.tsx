import React from 'react';
import Section from '../components/Section';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Частые ошибки'>
        <ul>
          <li>Нет <code>pygame.init()</code></li>
          <li>Отсутствует <code>pygame.display.flip()</code></li>
          <li>Пути к файлам</li>
          <li>Нет <code>mixer.init()</code></li>
        </ul>
      </Section>
    </div>
  );
}
