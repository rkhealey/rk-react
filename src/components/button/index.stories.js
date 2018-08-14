import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import Button from './';

storiesOf('Button', module)
  .add('button default', () => (
    <ThemeProvider theme={defaultTheme}>
      <Button>
        click me
      </Button>
    </ThemeProvider>
  ))
  .add('button block', () => (
    <ThemeProvider theme={defaultTheme}>
      <Button block>
        click me
      </Button>
    </ThemeProvider>
  ))
  .add('button invisible', () => (
    <ThemeProvider theme={defaultTheme}>
      <Button invisible>
        click me
      </Button>
    </ThemeProvider>
  ))
  .add('button floating', () => (
    <ThemeProvider theme={defaultTheme}>
      <Button floating={{ top: '3rem', left: '6rem' }}>
        click me
      </Button>
    </ThemeProvider>
  ));
