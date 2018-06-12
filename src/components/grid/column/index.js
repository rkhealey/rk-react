import PropTypes from 'prop-types';
import styled from 'styled-components';

const columnType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const getWidth = function getWidth(span) {
  const width = (span / 12) * 100;
  const style = `flex-basis: ${width}%;
  max-width: ${width}%;
  width: ${width}%;`;
  return style;
};

const Column = styled.div`
  flex: 0 0 auto;
  flex-basis: 0;
  flex-grow: 1;
  padding-left: 15px;
  padding-right: 15px;
  ${({ xs }) => (xs ? getWidth(xs) : getWidth(12))};

  @media only screen and (min-width: 480px) {
    ${({ sm }) => sm && getWidth(sm)};
  }

  @media only screen and (min-width: 768px) {
    ${({ md }) => md && getWidth(md)};
  }

  @media only screen and (min-width: 992px) {
    ${({ lg }) => lg && getWidth(lg)};
  }
`;

Column.propTypes = {
  xs: columnType,
  sm: columnType,
  md: columnType,
  lg: columnType,
};

Column.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
};

export default Column;
