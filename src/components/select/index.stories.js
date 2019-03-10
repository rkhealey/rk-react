import _ from 'lodash';
import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import Select from './';

const simpleProps = {
  field: {
    name: 'color',
    onChange: _.noop,
  },
  options: [{
    label: 'Apple',
    value: 'apple',
  }, {
    label: 'Banana',
    value: 'banana',
  }, {
    label: 'Strawberry',
    value: 'strawberry',
  }],
};

class SelectExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };

    this.updateSelection = this.updateSelection.bind(this);
    this.customAction = this.customAction.bind(this);
  }
  updateSelection(event) { this.setState({ selectedOption: event.target.value }); }
  customAction(action) { this.setState({ selectedOption: action }); }

  render() {
    return (
      <div>
        <Select {...this.props} input={{ name: 'example', onChange: this.updateSelection }} />
        <p>Selected Option: {this.state.selectedOption}</p>
      </div>);
  }
}

storiesOf('Select', module)
  .add('select default', () => (
    <ThemeProvider theme={defaultTheme}>
      <SelectExample {...simpleProps} />
    </ThemeProvider>
  ))
  .add('select with default option', () => (
    <ThemeProvider theme={defaultTheme}>
      <SelectExample {...simpleProps} defaultOption="Please select an option" />
    </ThemeProvider>
  ))
  .add('select with error', () => (
    <ThemeProvider theme={defaultTheme}>
      <SelectExample {...simpleProps} meta={{ touched: true, error: 'This field is required' }} />
    </ThemeProvider>
  ));
