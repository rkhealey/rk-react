import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import Chip from './';

storiesOf('Chip', module)
  .add('chip default', () => (
    <ThemeProvider theme={defaultTheme}>
      <Chip>
        Banana
      </Chip>
    </ThemeProvider>
  ))
  .add('chip active', () => (
    <ThemeProvider theme={defaultTheme}>
      <Chip active>
        Banana
      </Chip>
    </ThemeProvider>
  ));
