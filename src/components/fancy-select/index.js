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

    // this.state = {
    //   transformedValue,
    //   formattedOptions
    // };

    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   const { input: { value } } = nextProps;
  //   if (value !== _.get(this, 'props.input.value') && _.isString(value)) {
  //     const transformedValue = transformValue(value, this.props.options);
  //     this.setState({ transformedValue });
  //   }
  // }

  handleChange(event) {
    if (this.props.input.onChange && event != null) {
      this.props.input.onChange(event.value);
    } else {
      this.props.input.onChange(null);
    }
  }

  render() {
    const {
      input: {
        name,
        value,
        onFocus,
        onBlur,
      },
      options,
      isGrouped,
      overrides,
      defaultIcon,
    } = this.props;

    const formattedOptions = isGrouped ? groupOptions(options, defaultIcon) : transformOptions(options, defaultIcon);

    const transformedValue = _.isString(value) ?
      transformValue(value, options) :
      transformValue(_.get(value, 'value'), options);
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
          onChange={this.handleChange}
          onFocus={onFocus}
          onBlur={() => onBlur(value)}
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
