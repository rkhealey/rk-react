import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import DatePicker from './';

const simpleProps = {
  onChange: _.noop,
};

storiesOf('Date Picker', module)
  .add('date picker default', () => (
    <ThemeProvider theme={defaultTheme}>
      <DatePicker input={simpleProps} />
    </ThemeProvider>
  ));
