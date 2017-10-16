import { action } from '@storybook/addon-actions';
// eslint-disable-next-line  import/no-extraneous-dependencies
import { Button } from 'rk-react';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
