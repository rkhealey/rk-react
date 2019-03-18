// @TODO creatable
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';
import { rgba } from 'polished';

import FormLabel from '../form-label';
import Icon from '../icon';

import defaultTheme from '../../styles/theme';

import { transformOptions, groupOptions, transformValue } from './helpers';

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
    background: ${({ theme }) => rgba(theme.colorPrimary, 0.16)};
  }
`;

const Error = styled.p`
  color: ${({ theme }) => theme.colorError};
  margin-top: 0;
  margin-bottom: 1rem;
`;

const selectStyles = error => ({
  container: styles => ({ ...styles, 'margin-bottom': error ? '0.5rem' : '1.5rem' }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'white',
    'border-color': error ? defaultTheme.colorError : defaultTheme.colorBorder,
    padding: '1rem',
    'min-height': 0,
    outline: 'none',
    'box-shadow': state.isFocused ? `0 0 5px ${defaultTheme.colorSecondary}` : 'none',
  }),
  input: styles => ({ ...styles, margin: 0, padding: 0 }),
  placeholder: styles => ({ ...styles, color: defaultTheme.colorText }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: styles => ({ ...styles, padding: '0 8px' }),
  menu: styles => ({ ...styles, 'z-index': 200 }),
});


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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.onChange && event != null) {
      this.props.onChange(event.value);
    } else {
      this.props.onChange(null);
    }
  }

  render() {
    const {
      field: {
        name,
        value,
        onFocus,
        onBlur,
      },
      className,
      form: {
        touched,
        errors,
      },
      label,
      options,
      isGrouped,
      defaultIcon,
    } = this.props;

    const formattedOptions = isGrouped ? groupOptions(options, defaultIcon) : transformOptions(options, defaultIcon);

    const transformedValue = _.isString(value) ?
      transformValue(value, options) :
      transformValue(_.get(value, 'value'), options);
    return (
      <InputWrapper className={className}>
        <FormLabel name={name}>
          {label && label}
          <ReactSelect
            options={formattedOptions}
            name={name}
            value={transformedValue}
            components={{ Option }}
            onChange={this.handleChange}
            formatGroupLabel={formatGroupLabel}
            filterOption={filterOptions}
            styles={selectStyles(errors[name])}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormLabel>
        {
          touched[name] && errors[name] &&
            <Error>{errors[name]}</Error>
        }
      </InputWrapper>
    );
  }
}

FancySelect.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    group: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    highlight: PropTypes.bool,
    tags: PropTypes.string,
  })).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({}),
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isGrouped: PropTypes.bool,
  defaultIcon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FancySelect.defaultProps = {
  className: '',
  defaultIcon: null,
  isGrouped: false,
  label: null,
};

export default FancySelect;
