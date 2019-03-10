import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Icon from '../icon';
import FormLabel from '../form-label';

const InputWrapper = styled.div`
  flex: 1;

  ${({ overrides }) => overrides}
`;

const StyledSelect = styled.select`
  appearance: none;
  background: transparent;
  border: ${({ theme }) => `1px solid ${theme.colorBorder}`};
  border-radius: 4px;
  color: ${({ theme }) => `1px solid ${theme.colorText}`};
  cursor: pointer;
  display: block;
  font-size: 1rem;
  margin: 10px 0;
  outline: none;
  padding: 1rem;
  position: relative;
  width: 100%;
  z-index: 101;

  option {
    color: ${({ theme }) => `1px solid ${theme.colorText}`};
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled(FormLabel)`
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
  top: 0.75rem;
  right: 1rem;
  font-size: 1.75rem;
  z-index: 100;
`;

const Select = ({ className, form, field, label, options, defaultOption }) => (
  <InputWrapper className={className}>
    <StyledLabel name={field.name}>
      {label && label}
      <StyledSelect {...field} value={_.get(field, 'value', '')} noValidate>
        {defaultOption && <option value="" disabled>{defaultOption}</option>}
        {_.map(options, option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </StyledSelect>
      <Icon name="keyboard_arrow_down" overrides={IconOverrides} />
    </StyledLabel>
    {
      form.touched[field.name] && form.errors[field.name] &&
        <Error>{form.errors[field.name]}</Error>
    }
  </InputWrapper>
);

Select.propTypes = {
  className: PropTypes.string,
  form: PropTypes.shape({
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({}),
  }).isRequired,
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.string,
  })).isRequired,
  defaultOption: PropTypes.string,
};

Select.defaultProps = {
  label: null,
  className: '',
  defaultOption: null,
};

export default Select;
