import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Закрытие окна'>
        <CodeBlock language="python">{`
for event in pygame.event.get():
    if event.type == pygame.QUIT:
        is_running = False
        `}</CodeBlock>
      </Section>
    </div>
  );
}
