import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 2rem;
  flex: 1;
`;

const FormLabel = styled.label`
  color: ${({ theme }) => theme.colorMute};
`;

const Input = styled.input`
  background: white;
  border: ${({ theme }) => `1px solid ${theme.colorBorder}`};
  border-radius: 4px;
  display: block;
  font-size: 1rem;
  margin: 10px 0;
  outline: none;
  padding: 1rem;
  transition: box-shadow 0.3s ease;
  width: 100%;

  &:focus {
    box-shadow: ${({ theme }) => `0 0 5px ${theme.colorSecondary}`};
  }

  ${({ withError }) =>
    withError && css`
      border: ${({ theme }) => `1px solid ${theme.colorError}`};
    `}
`;

const Error = styled.p`
  color: ${({ theme }) => theme.colorError};
  margin-top: 0;
`;

const TextInput = ({
  hidden,
  field,
  form,
  onChange,
  onClick,
  placeholder,
  label,
  readOnly,
  type,
}) => {
  const inputProps = {
    ...field,
    type: hidden ? 'hidden' : type,
    readOnly,
    onClick,
    placeholder,
  };

  const { name } = field;
  const hasError = form.touched[name] && form.errors[name];

  if (!_.isNull(onChange)) {
    inputProps.onChange = onChange;
  }

  return (
    <InputWrapper>
      <FormLabel htmlFor={name}>
        {!hidden && label}
        <Input
          {...inputProps}
          noValidate
          withError={hasError}
        />
      </FormLabel>
      {hasError && <Error>{form.errors[name]}</Error>}
    </InputWrapper>
  );
};

TextInput.propTypes = {
  hidden: PropTypes.bool,
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({}),
  }).isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  hidden: false,
  label: '',
  onChange: null,
  onClick: null,
  placeholder: '',
  readOnly: false,
  type: 'text',
};

export default TextInput;
