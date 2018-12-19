import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledPanel = styled.div`
  display: none;
  padding: 3rem;

  ${({ isActive }) =>
    isActive && css`
      display: block;
    `}
`;

const TabPanel = ({ isActive, children }) => (
  <StyledPanel
    role="tabpanel"
    aria-hidden={!isActive}
    isActive={isActive}
  >
    {children}
  </StyledPanel>
);

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

TabPanel.defaultProps = {
  isActive: false,
};

export default TabPanel;
