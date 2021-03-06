import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledChip = styled.div`
  background-color: #e7e7e7;
  color: ${({ theme }) => theme.colorText};
  border: none;
  height: 2rem;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  outline: none;
  font-size: 0.8125rem;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  white-space: nowrap;
  align-items: center;
  border-radius: 1rem;
  text-decoration: none;
  justify-content: center;
  margin-right: 0.5rem;
  padding: 0 0.75rem;

  &:hover {
    background-color: #d8d8d8;
  }

  ${({ active }) =>
    active && css`
      background: ${({ bgColor, theme }) => bgColor || theme.colorPrimary};
      color: ${({ color, theme }) => color || theme.colorWhite};

      &:hover {
        background: ${({ bgColor, theme }) => bgColor || theme.colorPrimary};
      }
    `}
`;

const Chip = props => (
  <StyledChip {...props} onClick={props.onClick} />
);

Chip.propTypes = {
  onClick: PropTypes.func,
};

Chip.defaultProps = {
  onClick: null,
};

export default Chip;
