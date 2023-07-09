'use client';

import React, { ReactNode } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '@/src/aws-exports';
import { ThemeProvider, defaultDarkModeOverride } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

export default function AmplifyUITheme(props: {children: ReactNode}){

  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  return (
    <ThemeProvider theme={theme} colorMode="system" >
      {props.children}
    </ThemeProvider>
  )
}
