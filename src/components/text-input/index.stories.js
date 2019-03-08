import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import TextInput from './';

const InputWrapper = styled.div`
  max-width: 500px;
  padding: 2rem;
  margin-top: 1rem;
`;

const simpleProps = {
  field: {
    name: 'example',
    onChange: _.noop,
  },
  placeholder: 'enter your name',
  label: 'Example',
  form: {
    touched: false,
    errors: {},
  },
};

const errorProps = {
  form: {
    touched: { example: true },
    errors: {
      example: 'Uh oh, something went wrong!',
    },
  },
};

storiesOf('TextInput', module)
  .add('text input default', () => (
    <ThemeProvider theme={defaultTheme}>
      <InputWrapper>
        <TextInput {...simpleProps} />
      </InputWrapper>
    </ThemeProvider>
  ))
  .add('with Error', () => (
    <ThemeProvider theme={defaultTheme}>
      <InputWrapper>
        <TextInput {...simpleProps} {...errorProps} />
      </InputWrapper>
    </ThemeProvider>
  ));
