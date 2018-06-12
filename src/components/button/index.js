import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => _.get(theme, 'colorPrimary')};
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 1rem 2.5rem;

  ${({ block }) =>
    block && css`
      width: 100%;
    `}

  ${({ invisible }) =>
    invisible && css`
      background-color: transparent;
      color: ${({ theme }) => _.get(theme, 'colorText')};
      padding: 0;
    `}
  
  ${({ overrides }) => overrides}
`;

const Button = ({ block, children, invisible, onClick, overrides, theme, type }) => (
  <StyledButton
    onClick={onClick}
    type={type}
    block={block}
    invisible={invisible}
    overrides={overrides}
    theme={theme}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  invisible: PropTypes.bool,
  onClick: PropTypes.func,
  overrides: PropTypes.string,
  theme: PropTypes.shape({}),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  block: false,
  invisible: false,
  onClick: _.noop,
  overrides: '',
  theme: null,
  type: 'button',
};

export default Button;

export { StyledButton };
