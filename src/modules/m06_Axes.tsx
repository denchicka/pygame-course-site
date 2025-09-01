import React from 'react';
import Section from '../components/Section';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Оси X/Y'>
        <p>Система координат: (0,0) — левый верх, X вправо, Y вниз.</p>
      </Section>
    </div>
  );
}
