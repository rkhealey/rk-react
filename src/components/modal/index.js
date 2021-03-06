import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import Card from '../card';
import Icon from '../icon';
import Transition from '../transition';

import { fade, slide } from '../../styles/transitions';

const StyledModal = styled.div`
  position: fixed;
  top: 3%;
  left: 0;
  margin: 0 auto;
  right: 0;
  width: 80%;
  z-index: 10000;

  ${slide}

  ${({ overrides }) => overrides}
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
  z-index: 9999;

  ${fade(0.7)}
`;

const Modal = ({ children, isOpen, onClose, overrides }) => (
  <div>
    <Transition classname="fade" in={isOpen}>
      <Overlay
        onClick={onClose}
      />
    </Transition>
    <Transition classname="slide" in={isOpen}>
      <StyledModal overrides={overrides}>
        <Card>
          <Button invisible onClick={onClose} overrides={{ position: 'absolute', right: '1rem' }}>
            <Icon name="clear" color="#2a2a2a" />
          </Button>
          {children}
        </Card>
      </StyledModal>
    </Transition>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  overrides: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
};

Modal.defaultProps = {
  isOpen: false,
  overrides: '',
};

export default Modal;
