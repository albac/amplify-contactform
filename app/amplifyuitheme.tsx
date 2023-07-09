'use client';

import { Amplify } from 'aws-amplify';
import awsconfig from '@/src/aws-exports';
import { ThemeProvider, defaultDarkModeOverride } from '@aws-amplify/ui-react';
import studioTheme from '@/src/ui-components/studioTheme';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

export default function AmplifyUITheme({children}){

  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  return (
    <ThemeProvider theme={theme} colorMode="system" >
      {children}
    </ThemeProvider>
  )
}
