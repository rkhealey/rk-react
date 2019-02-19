import { DatePickerInput } from 'rc-datepicker';
import moment from 'moment';
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

const DatePicker = ({ input, displayFormat, label, position }) => {
  const date = !input.value ? moment() : moment(input.value, DATE_FORMAT);
  return (
    <DatePickerWrapper position={position}>
      <StyledLabel htmlFor={input.name}>
        {label && <span>{label}</span>}
        <DatePickerInput
          className="rk-datepicker"
          iconClassName="material-icons calendar"
          onChange={input.onChange}
          value={date}
          displayFormat={displayFormat}
        />
      </StyledLabel>
    </DatePickerWrapper>
  );
};

DatePicker.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  displayFormat: PropTypes.string,
  label: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
};

DatePicker.defaultProps = {
  displayFormat: DATE_FORMAT,
  label: null,
  position: 'bottom',
};

export default DatePicker;
