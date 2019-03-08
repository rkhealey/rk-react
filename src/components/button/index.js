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
  
  ${({ disabled }) =>
    disabled && css`
      cursor: auto;
      background-color: ${({ theme }) => _.get(theme, 'colorMute')};
    `}
`;

const Button = ({
  block,
  children,
  className,
  disabled,
  floating,
  invisible,
  onClick,
  theme,
  type,
}) => (
  <StyledButton
    className={className}
    onClick={onClick}
    type={type}
    block={block}
    floating={floating}
    invisible={invisible}
    theme={theme}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  floating: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    bottom: PropTypes.string,
    right: PropTypes.string,
  }),
  invisible: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.shape({}),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  block: false,
  className: null,
  disabled: false,
  floating: null,
  invisible: false,
  onClick: _.noop,
  theme: null,
  type: 'button',
};

export default Button;

export { StyledButton };
