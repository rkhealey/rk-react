import _ from 'lodash';
import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import FancySelect from './';

const simpleProps = {
  input: {
    name: 'color',
    onChange: _.noop,
    onBlur: _.noop,
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
};

class FancySelectExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };

    this.updateSelection = this.updateSelection.bind(this);
  }
  updateSelection(obj) { this.setState({ selectedOption: _.get(obj, 'label') }); }

  render() {
    return (
      <div>
        <FancySelect {...this.props} input={{ name: 'example', onChange: this.updateSelection, onBlur: _.noop }} />
        <p>Selected Option: {this.state.selectedOption}</p>
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
  ));
