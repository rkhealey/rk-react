import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Align from '../align';
import Button from '../button';
import FormLabel from '../form-label';
import TextInput from '../text-input';

const InputWrapper = styled.div`
  flex: 1;
`;

const IncrementButton = styled(Button)`
  margin-left: 1rem;
`;

const DecrementButton = styled(Button)`
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
    const { incrementBy, maxValue } = this.props;

    const newValue = currentValue + incrementBy;
    this.setState({ currentValue: this.isAtMax(newValue) ? maxValue : newValue });
  }

  decrement() {
    const { currentValue } = this.state;
    const { incrementBy, minValue } = this.props;

    const newValue = currentValue - incrementBy;
    this.setState({ currentValue: this.isAtMin(newValue) ? minValue : newValue });
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
    const { name, field, form, label } = this.props;
    return (
      <InputWrapper>
        <FormLabel name={name}>
          {label}
          <Wrapper>
            <DecrementButton onClick={this.decrement} disabled={this.isAtMin()}>Down</DecrementButton>
            <span>{this.state.currentValue}</span>
            <IncrementButton onClick={this.increment} disabled={this.isAtMax()}>Up</IncrementButton>
            <TextInput hidden name={name} field={field} form={form} value={this.state.currentValue} />
          </Wrapper>
        </FormLabel>
      </InputWrapper>
    );
  }
}

NumberPicker.propTypes = {
  name: PropTypes.string.isRequired,
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
};

NumberPicker.defaultProps = {
  label: '',
  incrementBy: 1,
  startingValue: 0,
  minValue: -100,
  maxValue: 100,
};

export default NumberPicker;
