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
    ${({ floating }) =>
    floating && css`
      border-radius: 50%;
      bottom: ${_.get(floating, 'bottom', 'auto')};
      box-shadow: ${({ theme }) => _.get(theme, 'boxShadow')};
      left: ${_.get(floating, 'left', 'auto')};
      padding: 1.5rem;
      position: fixed;
      right: ${_.get(floating, 'right', 'auto')};
      top: ${_.get(floating, 'top', 'auto')};
    `}
  
  ${({ overrides }) => overrides}
`;

const Button = ({ block, children, floating, invisible, onClick, overrides, theme, type }) => (
  <StyledButton
    onClick={onClick}
    type={type}
    block={block}
    floating={floating}
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
  floating: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
  }),
  invisible: PropTypes.bool,
  onClick: PropTypes.func,
  overrides: PropTypes.shape({}),
  theme: PropTypes.shape({}),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  block: false,
  floating: null,
  invisible: false,
  onClick: _.noop,
  overrides: null,
  theme: null,
  type: 'button',
};

export default Button;

export { StyledButton };
