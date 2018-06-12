import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Column, Row, Wrapper } from './';

const Inner = styled.div`
  align-items: center;
  background: purple;
  color: #ffffff;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 100%;
`;

storiesOf('Grid', module)
  .add('grid default', () => (
    <Wrapper>
      <Row>
        <Column>
          <Inner>Col 1</Inner>
        </Column>
        <Column>
          <Inner>Col 2</Inner>
        </Column>
        <Column>
          <Inner>Col 3</Inner>
        </Column>
      </Row>
    </Wrapper>
  ))
  .add('grid even columns', () => (
    <Wrapper>
      <Row>
        <Column lg={6} md={4} sm={6} xs={12}>
          <Inner>Col 1</Inner>
        </Column>
        <Column lg={6} md={4} sm={6} xs={12}>
          <Inner>Col 2</Inner>
        </Column>
        <Column lg={6} md={4} sm={6} xs={12}>
          <Inner>Col 3</Inner>
        </Column>
      </Row>
    </Wrapper>
  ));
