import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Icon from '../icon';

const InputWrapper = styled.div`
  flex: 1;

  ${({ overrides }) => overrides}
`;

const StyledSelect = styled.select`
  appearance: none;
  background: transparent;
  border: 1px solid #cccccc;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  margin: 10px 0;
  outline: none;
  padding: 1rem;
  position: relative;
  width: 100%;
  z-index: 101;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  background: #ffffff;
  border-radius: 4px;
  display: block;
  position: relative;
`;

const Error = styled.p`
  color: ${({ theme }) => theme.colorError};
  margin-top: 0;
`;

const IconOverrides = `
  color: #cccccc;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 2.5rem;
  z-index: 100;
`;

const Select = ({ meta, input, options, theme, defaultOption, overrides }) => (
  <InputWrapper overrides={overrides}>
    <StyledLabel htmlFor={input.name}>
      <StyledSelect {...input} theme={theme} noValidate defaultValue="">
        {defaultOption && <option value="" disabled>{defaultOption}</option>}
        {_.map(options, option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </StyledSelect>
      <Icon name="arrow_drop_down" overrides={IconOverrides} />
    </StyledLabel>
    {meta.error && meta.touched && <Error theme={theme}>{meta.error}</Error>}
  </InputWrapper>
);

Select.propTypes = {
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.string,
  })).isRequired,
  theme: PropTypes.shape({}),
  defaultOption: PropTypes.string,
  overrides: PropTypes.shape({}),
};

Select.defaultProps = {
  meta: {},
  theme: null,
  defaultOption: null,
  overrides: {},
};

export default Select;
