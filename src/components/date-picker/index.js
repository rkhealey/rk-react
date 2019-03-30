import { DatePickerInput } from 'rc-datepicker';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import DPStyles from './styles';

const DATE_FORMAT = 'Do MMM YYYY';

const DatePickerWrapper = styled.div`
  ${({ theme, position }) => DPStyles(theme, position)}
`;

const StyledLabel = styled.label`
  background: #ffffff;
  border-radius: 4px;
  color: ${({ theme }) => theme.colorMute};
  display: block;
  position: relative;
`;

const DatePicker = ({ field, displayFormat, label, onChange, position, value }) => {
  const date = value ? new Date(value) : new Date();

  return (
    <DatePickerWrapper position={position}>
      <StyledLabel htmlFor={field.name}>
        {label && <span>{label}</span>}
        <DatePickerInput
          className="rk-datepicker"
          iconClassName="material-icons calendar"
          onChange={(dt, string) => onChange(string)}
          value={date}
          displayFormat={displayFormat}
        />
      </StyledLabel>
    </DatePickerWrapper>
  );
};

DatePicker.propTypes = {
  field: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  displayFormat: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['top', 'bottom']),
  value: PropTypes.string,
};

DatePicker.defaultProps = {
  displayFormat: DATE_FORMAT,
  label: null,
  position: 'bottom',
  value: '',
};

export default DatePicker;
