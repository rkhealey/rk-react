import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../button';

const StyledIcon = styled.i`
  color: ${({ color, theme }) => color || _.get(theme, 'colorText')};
  font-size: ${({ size }) => size}px;
`;

const Icon = ({ color, onClick, name, size, theme }) => {
  if (!_.isNull(onClick)) {
    return (
      <Button onClick={onClick} invisible theme={theme} className={color}>
        <StyledIcon color={color} className="material-icons" size={size}>{name}</StyledIcon>
      </Button>
    );
  }
  return (
    <StyledIcon color={color} size={size} className="material-icons">{name}</StyledIcon>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  theme: PropTypes.shape({}),
};

Icon.defaultProps = {
  color: null,
  onClick: null,
  size: 24,
  theme: {},
};

export default Icon;

