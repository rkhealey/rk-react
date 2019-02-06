import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { rgba } from 'polished';

const InputWrapper = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  background: #ffffff;
  border-radius: 4px;
  display: block;
  position: relative;
`;

const StyledRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  margin: 1rem 0;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: ${({ theme }) => theme.colorBorder};
    border-radius: 1.3px;
    border: 0;
  }

  &::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: ${({ theme }) => theme.colorBorder};
    border-radius: 1.3px;
    border: 0;
  }

  &::-webkit-slider-thumb {
    box-shadow: ${({ theme }) => theme.boxShadow};
    height: 0.875rem;
    width: 0.875rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorPrimary};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4rem;
    transform: box-shadow 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

    &:hover, &:active {
      box-shadow: ${({ theme }) => `0px 0px 0px 9px ${rgba(theme.colorPrimary, 0.16)}`};
    }
  }

  &::-moz-range-thumb {
    box-shadow: ${({ theme }) => theme.boxShadow};
    height: 0.875rem;
    width: 0.875rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorPrimary};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4rem;
    transform: box-shadow 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

    &:hover, &:active {
      box-shadow: ${({ theme }) => `0px 0px 0px 9px ${rgba(theme.colorPrimary, 0.16)}`};
    }
  }

  &::-ms-thumb {
    box-shadow: ${({ theme }) => theme.boxShadow};
    height: 0.875rem;
    width: 0.875rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorPrimary};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4rem;
    transform: box-shadow 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

    &:hover, &:active {
      box-shadow: ${({ theme }) => `0px 0px 0px 9px ${rgba(theme.colorPrimary, 0.16)}`};
    }
  }

  &::-ms-fill-lower {
    background: #1f496d;
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 2.6px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  }

  &::-ms-fill-upper {
    background: #3071a9;
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 2.6px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  }

  ${({ overrides }) => overrides}
`;

const ColorBand = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colorPrimary};
  position: absolute;
  left: 0;
  width: ${({ width }) => `${width}%`};
  top: 50%;
`;

const Range = ({ label, input, theme, overrides, min, max, step }) => {
  const halfway = _.round((max + min) / 2);
  const difference = max - min;
  const thumbPos = min - (_.toNumber(input.value) || halfway);

  const bandWidth = -(thumbPos / difference) * 100;
  return (
    <InputWrapper>
      <StyledLabel htmlFor={input.name}>
        {label && <span id="theLabel">{label}</span>}
        <StyledRange
          type="range"
          {...input}
          theme={theme}
          min={min}
          max={max}
          step={step}
          overrides={overrides}
        />
        <ColorBand theme={theme} width={bandWidth} />
      </StyledLabel>
    </InputWrapper>
  );
};

Range.propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  theme: PropTypes.shape({}),
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  overrides: PropTypes.shape({}),
};

Range.defaultProps = {
  label: '',
  step: 1,
  min: 1,
  max: 30,
  theme: null,
  overrides: {},
};

export default Range;
