import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = ({ isActive, children }) => {
  if (!isActive) {
    return null;
  }
  return (
    <div
      role="tabpanel"
      aria-hidden={!isActive}
      className="tabPanel"
    >
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

TabPanel.defaultProps = {
  isActive: false,
};

export default TabPanel;
