import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledPanel = styled.div`
  display: none;

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
    className="tabPanel"
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
