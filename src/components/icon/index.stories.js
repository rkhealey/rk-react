import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import Icon from './';

storiesOf('Icon', module)
  .add('icon default', () => (
    <ThemeProvider theme={defaultTheme}>
      <Icon name="face" />
    </ThemeProvider>
  ))
  .add('icon with color', () => (
    <ThemeProvider theme={defaultTheme}>
      <Icon name="face" color="purple" />
    </ThemeProvider>
  ))
  .add('icon with button', () => (
    <ThemeProvider theme={defaultTheme}>
      <Icon name="face" onClick={_.noop} />
    </ThemeProvider>
  ))
  .add('icon with size', () => (
    <ThemeProvider theme={defaultTheme}>
      <Icon name="face" onClick={_.noop} size={60} />
    </ThemeProvider>
  ));
