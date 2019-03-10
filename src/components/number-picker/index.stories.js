import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import NumberPicker from './';

const simpleProps = {
  field: {
    name: 'number-picker',
    onChange: _.noop,
  },
  label: 'Choose an amount',
  form: {
    touched: false,
    errors: {},
  },
  onChange: _.noop,
};


storiesOf('NumberPicker', module)
  .add('number picker default', () => (
    <ThemeProvider theme={defaultTheme}>
      <NumberPicker {...simpleProps} label="Choose an amount" />
    </ThemeProvider>
  ))
  .add('with min value', () => (
    <ThemeProvider theme={defaultTheme}>
      <NumberPicker {...simpleProps} minValue={0} />
    </ThemeProvider>
  ))
  .add('with max value', () => (
    <ThemeProvider theme={defaultTheme}>
      <NumberPicker {...simpleProps} maxValue={5} />
    </ThemeProvider>
  ))
  .add('with starting value', () => (
    <ThemeProvider theme={defaultTheme}>
      <NumberPicker {...simpleProps} startingValue={15} />
    </ThemeProvider>
  ))
  .add('increment by 10', () => (
    <ThemeProvider theme={defaultTheme}>
      <NumberPicker {...simpleProps} incrementBy={10} />
    </ThemeProvider>
  ))
  .add('with max value and increment by 10', () => (
    <ThemeProvider theme={defaultTheme}>
      <NumberPicker {...simpleProps} maxValue={25} incrementBy={10} />
    </ThemeProvider>
  ));
