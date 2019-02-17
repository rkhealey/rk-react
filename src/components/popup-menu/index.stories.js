import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import PopupMenu from './';

const simpleProps = {
  actions: [{
    label: 'Edit',
    onClick: _.noop,
    icon: 'edit',
  }, {
    label: 'Remove',
    onClick: _.noop,
    icon: 'delete_outline',
    color: defaultTheme.colorError,
  }],
  overrides: { width: '150px;' },
};

storiesOf('Popup Menu', module)
  .add('popup menu default', () => (
    <ThemeProvider theme={defaultTheme}>
      <PopupMenu {...simpleProps} />
    </ThemeProvider>
  ));
