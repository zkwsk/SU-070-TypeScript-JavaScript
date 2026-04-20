import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet } from 'spectacle';
import mdContent from './slides.md';
import jsTypescriptImg from './assets/js-today-typescript.png';
import typescriptLifecycleImg from './assets/typescript-lifecycle.png';
import modulesImg from './assets/modules.png';
import './styles.css';

import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

// Make tomorrow available globally so the markdown can reference it
(window as any).tomorrow = tomorrow;

const mdWithImages = mdContent
  .replace('./assets/js-today-typescript.png', jsTypescriptImg)
  .replace('./assets/typescript-lifecycle.png', typescriptLifecycleImg)
  .replace('./assets/modules.png', modulesImg);

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />} >
    <MarkdownSlideSet>{mdWithImages}</MarkdownSlideSet>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);