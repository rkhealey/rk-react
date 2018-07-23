import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../button';

const StyledIcon = styled.i`
  color: ${({ color, theme }) => color || _.get(theme, 'colorText')};
`;

const Icon = ({ color, onClick, name, theme }) => {
  if (!_.isNull(onClick)) {
    return (
      <Button onClick={onClick} invisible theme={theme} className={color}>
        <StyledIcon color={color} className="material-icons">{name}</StyledIcon>
      </Button>
    );
  }
  return (
    <StyledIcon color={color} className="material-icons">{name}</StyledIcon>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.shape({}),
};

Icon.defaultProps = {
  color: null,
  onClick: null,
  theme: {},
};

export default Icon;

