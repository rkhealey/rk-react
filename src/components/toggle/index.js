import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

const StyledToggle = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  outline: 0;
  display: block;
  width: 3rem;
  height: 1.5rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #fbfbfb;
  border-radius: 2em;
  padding: 2px;
  transition: all .4s ease;
  border: 1px solid #e8eae9;

  &:after,
  &:before {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
  }

  &:after {
    border-radius: 2em;
    background: #fbfbfb;
    transition: left .3s cubic-bezier(0.175, 0.885, 0.320, 1.275), padding .3s ease, margin .3s ease;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 4px 0 rgba(0,0,0,.08);
    left: ${({ isChecked }) => (isChecked ? '50%' : 0)};
  }

  &:hover:after {
    will-change: padding;
  }

  &:before {
    display: none;
  }

  &:active {
    box-shadow: inset 0 0 0 2em #e8eae9;
    &:after {
      padding-right: .8em;
    }
  }

  ${({ isChecked, theme }) =>
    isChecked && css`
      background: ${theme.colorPrimary};
      &:active {
        box-shadow: none;
        &:after {
          margin-left: -.8em;
        }
      }
  `}
`;

class Toggle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.checked,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ isChecked: event.target.checked });
    this.props.onToggle(event.target.checked);
  }

  render() {
    const { checked, id, overrides, theme } = this.props;

    return (
      <StyledLabel htmlFor={id} isChecked={this.state.isChecked} theme={theme}>
        <StyledToggle
          defaultChecked={checked}
          id={id}
          name={id}
          onChange={this.handleChange}
          overrides={overrides}
          type="checkbox"
          theme={theme}
        />
      </StyledLabel>
    );
  }
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  overrides: PropTypes.shape({}),
  theme: PropTypes.shape({}),
};

Toggle.defaultProps = {
  checked: false,
  overrides: null,
  theme: null,
};

export default Toggle;
