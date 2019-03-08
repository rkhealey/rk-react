import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAlign = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ spacing }) => spacing};
`;

const Align = ({ children, className, spacing }) => (
  <StyledAlign className={className} spacing={spacing}>
    {children}
  </StyledAlign>
);

Align.propTypes = {
  children: PropTypes.oneOf.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.string,
};

Align.defaultProps = {
  className: null,
  spacing: 'space-between',
};

export default Align;
