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
          input={{ name: 'example', onChange: this.updateSelection, onBlur: _.noop, value: this.state.selectedOption }}
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
  ));
