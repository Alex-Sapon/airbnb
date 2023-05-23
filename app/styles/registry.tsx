'use client';

import { useState } from 'react';

import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const StyledComponentsRegistry = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // @ts-ignore
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  if (typeof window !== 'undefined') return children;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};
