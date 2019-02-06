import _ from 'lodash';
import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import Range from './';

const simpleProps = {
  input: {
    name: 'color',
    onChange: _.noop,
  },
  min: 1,
  max: 30,
  step: 1,
  overrides: { margin: '2rem auto', width: '40%' },
};

class RangeExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
    };

    this.updateAmount = this.updateAmount.bind(this);
  }
  updateAmount(event) { this.setState({ amount: event.target.value }); }

  render() {
    return (
      <div>
        <Range
          {...this.props}
          input={{
            name: 'example',
            onChange: this.updateAmount,
            value: this.state.amount,
          }}
        />
        <p>Amount: {this.state.amount}</p>
      </div>);
  }
}

storiesOf('Range', module)
  .add('range default', () => (
    <ThemeProvider theme={defaultTheme}>
      <RangeExample {...simpleProps} />
    </ThemeProvider>
  ));
