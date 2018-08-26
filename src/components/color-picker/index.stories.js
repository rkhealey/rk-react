import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Button from '../button';
import ColorPicker from './';

const Box = styled.div`
  background: ${({ color }) => color};
  border: 2px solid #2c2c2c;
  height: 200px;
  margin-top: 1rem;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2rem;
`;

class ColorPickerExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedColor: null,
    };

    this.selectColor = this.selectColor.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  selectColor(color) {
    this.setState({ selectedColor: color }, () => {
      this.updateSelection(false);
    });
  }

  updateSelection(newSelection) { this.setState({ isOpen: newSelection }); }

  render() {
    return (
      <div>
        <ColorPicker
          isOpen={this.state.isOpen}
          onSelect={this.selectColor}
          onClose={() => this.updateSelection(false)}
        />
        <Button
          onClick={() => this.updateSelection(true)}
          theme={{ colorPrimary: 'purple' }}
        >
          Select Color
        </Button>
        <Box color={this.state.selectedColor}>
          {this.state.selectedColor}
        </Box>
      </div>);
  }
}

storiesOf('Color Picker', module)
  .add('Color Picker default', () => (
    <ColorPickerExample />
  ));
