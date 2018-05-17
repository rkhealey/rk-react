import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ children }) => (
  <div>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
