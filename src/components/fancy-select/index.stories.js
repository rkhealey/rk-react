import _ from 'lodash';
import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import FancySelect from './';

const simpleProps = {
  field: {
    name: 'color',
    onBlur: _.noop,
    value: 'strawberry',
  },
  options: [{
    label: 'Apple',
    value: 'apple',
    group: 'skin',
    icon: 'fastfood',
  }, {
    label: 'Banana',
    value: 'banana',
    group: 'skin',
  }, {
    label: 'Strawberry',
    value: 'strawberry',
    group: 'berry',
  }],
  form: {
    touched: {},
    errors: {},
  },
  onChange: _.noop,
};

const errorProps = {
  touched: {
    example: true,
  },
  errors: {
    example: 'Oops, something went wrong',
  },
};

class FancySelectExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: {
        value: 'strawberry',
        label: 'Strawberry',
      },
    };

    this.updateSelection = this.updateSelection.bind(this);
  }
  updateSelection(obj) { this.setState({ selectedOption: obj }); }

  render() {
    return (
      <div>
        <FancySelect
          {...this.props}
          field={{ name: 'example', onBlur: _.noop, value: this.state.selectedOption }}
          onChange={this.updateSelection}
        />
        <p>Selected Option: {this.state.selectedOption.label || this.state.selectedOption}</p>
      </div>);
  }
}

storiesOf('Fancy Select', module)
  .add('fancy select default', () => (
    <ThemeProvider theme={defaultTheme}>
      <FancySelectExample {...simpleProps} />
    </ThemeProvider>
  ))
  .add('fancy select grouped', () => (
    <ThemeProvider theme={defaultTheme}>
      <FancySelectExample {...simpleProps} isGrouped />
    </ThemeProvider>
  ))
  .add('fancy select with default icon', () => (
    <ThemeProvider theme={defaultTheme}>
      <FancySelectExample {...simpleProps} defaultIcon="font_download" />
    </ThemeProvider>
  ))
  .add('fancy select with errors', () => (
    <ThemeProvider theme={defaultTheme}>
      <FancySelectExample {...simpleProps} form={errorProps} />
    </ThemeProvider>
  ));
