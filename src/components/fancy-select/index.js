// @TODO styles
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.field.onChange && event != null) {
      this.props.field.onChange(event.value);
    } else {
      this.props.field.onChange(null);
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
            valueKey="value"
            components={{ Option }}
            options={formattedOptions}
            formatGroupLabel={formatGroupLabel}
            filterOption={filterOptions}
            styles={selectStyles}
            name={name}
            onChange={this.handleChange}
            onFocus={onFocus}
            onBlur={() => onBlur(value)}
            value={transformedValue}
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
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  isGrouped: PropTypes.bool,
  defaultIcon: PropTypes.string,
};

FancySelect.defaultProps = {
  className: '',
  defaultIcon: null,
  isGrouped: false,
  label: null,
};

export default FancySelect;
