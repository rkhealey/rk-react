import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Align from '../align';
import Button from '../button';
import Icon from '../icon';
import FormLabel from '../form-label';

const InputWrapper = styled.div`
  flex: 1;
`;

const IncrementButton = styled(Button)`
  background-color: ${({ theme }) => theme.colorWhite};
  border: ${({ theme }) => `1px solid ${theme.colorBorder}`};
  color: ${({ theme }) => theme.colorText};
  font-size: 18px;
  line-height: 18px;
  margin-left: 1rem;
`;

const DecrementButton = styled(IncrementButton)`
  margin-left: 0;
  margin-right: 1rem;
`;

const Wrapper = styled(Align)`
  margin: 10px 0;
`;

class NumberPicker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: _.clamp(props.startingValue, props.minValue, props.maxValue),
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.isAtMax = this.isAtMax.bind(this);
    this.isAtMin = this.isAtMin.bind(this);
  }

  increment() {
    const { currentValue } = this.state;
    const { incrementBy, maxValue, onChange } = this.props;

    const newValue = currentValue + incrementBy;
    this.setState({ currentValue: this.isAtMax(newValue) ? maxValue : newValue }, () => {
      onChange(this.state.currentValue);
    });
  }

  decrement() {
    const { currentValue } = this.state;
    const { incrementBy, minValue, onChange } = this.props;

    const newValue = currentValue - incrementBy;
    this.setState({ currentValue: this.isAtMin(newValue) ? minValue : newValue }, () => {
      onChange(this.state.currentValue);
    });
  }

  isAtMax(value = this.state.currentValue) {
    const { maxValue } = this.props;
    return value >= maxValue;
  }

  isAtMin(value = this.state.currentValue) {
    const { minValue } = this.props;

    return value <= minValue;
  }

  render() {
    const { field, label, value } = this.props;
    return (
      <InputWrapper>
        <FormLabel name={field.name}>
          {label}
          <Wrapper>
            <DecrementButton
              onClick={this.decrement}
              disabled={this.isAtMin()}
            >
              <Icon name="keyboard_arrow_down" size={16} />
            </DecrementButton>
            <span>{this.state.currentValue}</span>
            <IncrementButton
              onClick={this.increment}
              disabled={this.isAtMax()}
            >
              <Icon name="keyboard_arrow_up" size={16} />
            </IncrementButton>
            <input
              hidden
              {...field}
              value={value}
              noValidate
              type="string"
            />
          </Wrapper>
        </FormLabel>
      </InputWrapper>
    );
  }
}

NumberPicker.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({}),
  }).isRequired,
  incrementBy: PropTypes.number,
  startingValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

NumberPicker.defaultProps = {
  label: '',
  incrementBy: 1,
  startingValue: 0,
  minValue: -100,
  maxValue: 100,
  value: '',
};

export default NumberPicker;
