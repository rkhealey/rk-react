import { storiesOf } from '@storybook/react';
import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import TabGroup from './';


import defaultTheme from '../../styles/theme';

const Heading = styled.h3`
  text-transform: uppercase;
`;


class TabGroupExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 'foo',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(newSelection) { this.setState({ value: newSelection }); }

  render() {
    const options = [{
      panel: <Heading>Foo Panel</Heading>,
      text: 'Foo Title',
      value: 'foo',
    }, {
      panel: <Heading>Bar Panel</Heading>,
      text: 'Bar Title',
      value: 'bar',
    }, {
      panel: <Heading>Baz Panel</Heading>,
      text: 'Baz Title',
      value: 'baz',
    }];
    return (
      <TabGroup
        input={{
          onChange: this.onChange,
          value: this.state.value,
        }}
        options={options}
      />);
  }
}

storiesOf('TabGroup', module)
  .add('default', () => (
    <ThemeProvider theme={defaultTheme}>
      <TabGroupExample />
    </ThemeProvider>
  ));
