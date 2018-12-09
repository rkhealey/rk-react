import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Align from './';

const Box = styled.div`
  width: 250px;
  height: 150px;
  background: purple;
`;

storiesOf('Align', module)
  .add('align with space between', () => (
    <Align>
      <Box />
      <Box />
    </Align>
  ))
  .add('align with center', () => (
    <Align spacing="center">
      <Box />
      <Box />
    </Align>
  ))
  .add('align with flex start', () => (
    <Align spacing="flex-start">
      <Box />
      <Box />
    </Align>
  ))
  .add('align with flex end', () => (
    <Align spacing="flex-end">
      <Box />
      <Box />
    </Align>
  ))
  .add('align with space around', () => (
    <Align spacing="space-around">
      <Box />
      <Box />
    </Align>
  ))
  .add('align with overrides', () => (
    <Align overrides={{ 'background-color': 'pink' }}>
      <Box />
      <Box />
    </Align>
  ));
