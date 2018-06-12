import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  align-items: ${props => props.alignment};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props => props.spacing};
  margin-left: -1rem;
  margin-right: -1rem;
`;

Row.propTypes = {
  alignment: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch']),
  spacing: PropTypes.oneOf(['space-around', 'flex-start', 'flex-end', 'space-between']),
};

Row.defaultProps = {
  alignment: 'flex-start',
  spacing: 'space-between',
};

export default Row;
