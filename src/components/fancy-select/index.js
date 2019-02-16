// @TODO styles
// @TODO creatable
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';
import { rgba } from 'polished';

import defaultTheme from '../../styles/theme';

import Icon from '../icon';

import { transformOptions, groupOptions } from './helpers';

const InputWrapper = styled.div`
  flex: 1;

  ${({ overrides }) => overrides}
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${rgba(defaultTheme.colorPrimary, 0.16)};
  }
`;

const selectStyles = {
  container: styles => ({ ...styles, 'margin-bottom': '1.5rem' }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    'border-color': defaultTheme.colorBorder,
    padding: '1rem',
    'min-height': 0,
  }),
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles, color: defaultTheme.colorText }),
};

const formatGroupLabel = data => (
  <div>
    <span>{data.label}</span>
  </div>
);

const Option = ({ innerProps, data, children }) => { /* eslint-disable-line */
  const name = _.get(data, 'icon', null);
  return (
    <StyledOption {...innerProps}>
      {name && <Icon name={name} overrides={{ 'margin-right': '0.5rem' }} />}
      <span>{children}</span>
    </StyledOption>
  );
};

const filterOptions = (candidate, input) => {
  if (input) {
    return _.includes(candidate.value, input) || _.includes(_.get(candidate, 'data.tags', ''), input);
  }
  return true;
};

class FancySelect extends PureComponent {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.transformValue = this.transformValue.bind(this);
  }

  changeHandler(func) {
    return function handleChange(value) {
      func(value ? value.value : '');
    };
  }

  transformValue(value, options) {
    const filteredOptions = options.filter(option => option.value === value);

    return filteredOptions[0];
  }

  render() {
    const { input: { name, value, onChange, onFocus }, options, isGrouped, overrides, defaultIcon } = this.props;
    const transformedValue = this.transformValue(value, options);
    const formattedOptions = isGrouped ? groupOptions(options, defaultIcon) : transformOptions(options, defaultIcon);
    return (
      <InputWrapper overrides={overrides}>
        <ReactSelect
          valueKey="value"
          components={{ Option }}
          options={formattedOptions}
          formatGroupLabel={formatGroupLabel}
          filterOption={filterOptions}
          styles={selectStyles}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          value={transformedValue}
        />
      </InputWrapper>
    );
  }
}

FancySelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    group: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    highlight: PropTypes.bool,
    tags: PropTypes.string,
  })).isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isGrouped: PropTypes.bool,
  overrides: PropTypes.shape({}),
  defaultIcon: PropTypes.string,
};

FancySelect.defaultProps = {
  isGrouped: false,
  overrides: {},
  defaultIcon: null,
};

export default FancySelect;
