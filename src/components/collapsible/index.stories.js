import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import Collapsible from './';

storiesOf('Collapsible', module)
  .add('collapsible default', () => (
    <ThemeProvider theme={defaultTheme}>
      <Collapsible />
    </ThemeProvider>
  ));
