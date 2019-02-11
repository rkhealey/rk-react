import { DatePickerInput } from 'rc-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import DPStyles from './styles';

const DATE_FORMAT = 'Do MMM YYYY';

const DatePickerWrapper = styled.div`
  ${({ theme }) => DPStyles(theme)}
`;

const DatePicker = ({ input, displayFormat }) => {
  const date = !input.value ? moment() : moment(input.value, DATE_FORMAT);
  return (
    <DatePickerWrapper>
      <DatePickerInput
        className="rk-datepicker"
        iconClassName="material-icons calendar"
        onChange={input.onChange}
        value={date}
        displayFormat={displayFormat}
      />
    </DatePickerWrapper>
  );
};

DatePicker.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  displayFormat: PropTypes.string,
};

DatePicker.defaultProps = {
  displayFormat: DATE_FORMAT,
};

export default DatePicker;
