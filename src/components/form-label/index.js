import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colorMute};
`;

const FormLabel = ({ children, className, name }) => (
  <StyledLabel htmlFor={name} className={className}>
    {children}
  </StyledLabel>
);

FormLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

FormLabel.defaultProps = {
  className: null,
};

export default FormLabel;
