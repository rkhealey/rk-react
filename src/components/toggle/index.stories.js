import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/theme';

import Toggle from './';

const LightBox = styled.div`
  background-color: ${({ toggleOn }) => (toggleOn ? '#cfff04' : '#f2f2f2')};
  border: 1px solid #2c2c2c;
  height: 100px;
  margin-top: 1rem;
  width: 100px;
`;

class ToggleExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toggleOn: true,
    };

    this.updateToggle = this.updateToggle.bind(this);
  }
  updateToggle(isChecked) { this.setState({ toggleOn: isChecked }); }

  render() {
    return (
      <div>
        <Toggle onToggle={this.updateToggle} checked />
        <LightBox toggleOn={this.state.toggleOn} />
      </div>);
  }
}

storiesOf('Toggle', module)
  .add('toggle default', () => (
    <ThemeProvider theme={defaultTheme}>
      <ToggleExample />
    </ThemeProvider>
  ));
