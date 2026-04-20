declare module '*.md' {
  const content: string;
  export default content;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/*' {
  const style: { [key: string]: { [key: string]: string } };
  export default style;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}