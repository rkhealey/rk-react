import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import defaultTheme from '../../../styles/theme';

const StyledTab = styled.li`
  color: #cccccc;
  cursor: pointer;
  padding: 1rem 3rem;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 0;

  &:focus,
    &:active,
    &visited {
      outline: none;
    }
  
  ${({ isActive }) =>
    isActive && css`
      .title {
        color: ${defaultTheme.colorPrimary};
      }
    `}
`;

const StyledText = styled.h3`
  color: #b5b5b5;
  text-transform: uppercase;
  text-decoration: none;
`;

const Tab = ({ children, id, isActive, onClick }) => (
  <StyledTab
    aria-controls={id}
    aria-selected={isActive}
    role="tab"
    className={isActive ? 'active' : ''}
  >
    <StyledButton
      onClick={() => { onClick(id); }}
      isActive={isActive}
    >
      <StyledText className="title">{children}</StyledText>
    </StyledButton>
  </StyledTab>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Tab.defaultProps = {
  isActive: false,
};

export default Tab;
