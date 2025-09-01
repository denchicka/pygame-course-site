import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Module() {
  return (
    <div className='space-y-4'>
      <Section title='Подготовка окружения'>
        <>
          <p>Windows + VS Code/PyCharm, Python 3.10+ (рекомендуем 3.12+).</p>
          <CodeBlock language="bash">{`
mkdir pygame_course && cd pygame_course
python -m venv .venv
.venv\\Scripts\\activate
pip install pygame
python -m pip install --upgrade pip
          `}</CodeBlock>
        </>
      </Section>
    </div>
  );
}
