import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import Icon from '../icon';
import Transition from '../transition';

import { fade } from '../../styles/transitions';

import colors from './colors';

const ColorPickerFrame = styled.div`
  background: #ffffff;
  border: 2px solid #2a2a2a;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  left: 0;
  margin: 0 auto;
  max-width: 300px;
  max-height: 500px;
  overflow: scroll;
  padding: 1rem;
  padding-top: 2rem;
  position: fixed;
  right: 0;
  top: 10%;
  width: 80%;
`;

const ColorTile = styled.a`
  background: ${({ color }) => color};
  cursor: pointer;
  width: 15%;
  height: 50px;
  margin: 2px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #000000;
  opacity: 0.7;

  ${fade(0.7)}
`;

const ColorPicker = ({ isOpen, onClose, onSelect }) => (
  <div>
    <Transition classname="fade" in={isOpen}>
      <Overlay
        onClick={onClose}
      />
    </Transition>
    <Transition classname="fade" in={isOpen}>
      <ColorPickerFrame>
        <Button invisible onClick={onClose} overrides={{ position: 'absolute', right: '0.4rem', top: '0.4rem' }}>
          <Icon name="clear" color="#2a2a2a" />
        </Button>
        {_.map(colors, color => <ColorTile color={color} onClick={() => onSelect(color)} />)}
      </ColorPickerFrame>
    </Transition>
  </div>
);

ColorPicker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ColorPicker;
