import React from 'react';
import { createRoot } from 'react-dom/client';
import { Box, Deck, FlexBox, FullScreen, MarkdownSlideSet, Text } from 'spectacle';
import jsTypescriptImg from './assets/js-today-typescript.png';
import typescriptLifecycleImg from './assets/typescript-lifecycle.png';
import modulesImg from './assets/modules.png';
import './styles.css';

import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

// Make tomorrow available globally so the markdown can reference it
(window as any).tomorrow = tomorrow;

// Slide files in alphabetical order, limited to the part picked in scripts/start.mjs
const slideFiles = require.context('./slides', true, /\.md$/);
const selectedFiles = slideFiles
  .keys()
  .sort()
  .filter((file) => !process.env.SLIDES_DIR || file.startsWith(`./${process.env.SLIDES_DIR}/`));

const withImages = (md: string) =>
  md
    .replace('./assets/js-today-typescript.png', jsTypescriptImg)
    .replace('./assets/typescript-lifecycle.png', typescriptLifecycleImg)
    .replace('./assets/modules.png', modulesImg);

// Spectacle's DefaultTemplate with the progress dots swapped for a "1/125" counter
const template = ({ slideNumber, numberOfSlides }: { slideNumber: number; numberOfSlides: number }) => (
  <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
    <Box padding="0 1em">
      <FullScreen color="#fff" />
    </Box>
    <Text fontSize="18px" padding="0 1em">
      {slideNumber}/{numberOfSlides}
    </Text>
  </FlexBox>
);

const Presentation = () => (
  <Deck template={template}>
    {selectedFiles.map((file) => (
      <MarkdownSlideSet key={file}>{withImages(slideFiles(file).default)}</MarkdownSlideSet>
    ))}
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
