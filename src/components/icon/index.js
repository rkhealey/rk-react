import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../button';

const StyledIcon = styled.i`
  color: ${({ color, theme }) => color || _.get(theme, 'colorText')};
  font-size: ${({ size }) => size}px;

  ${({ overrides }) => overrides}
`;

const Icon = ({ color, onClick, overrides, name, size, theme }) => {
  if (!_.isNull(onClick)) {
    return (
      <Button onClick={onClick} invisible theme={theme} className={color}>
        <StyledIcon color={color} className="material-icons" size={size} overrides={overrides}>{name}</StyledIcon>
      </Button>
    );
  }
  return (
    <StyledIcon color={color} size={size} className="material-icons" overrides={overrides}>{name}</StyledIcon>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  overrides: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  size: PropTypes.number,
  theme: PropTypes.shape({}),
};

Icon.defaultProps = {
  color: null,
  onClick: null,
  overrides: '',
  size: 24,
  theme: {},
};

export default Icon;

