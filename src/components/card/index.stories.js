import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './';

storiesOf('Card', module)
  .add('card default', () => (
    <Card>
      <h3>I’m the card component</h3>
    </Card>
  ));
