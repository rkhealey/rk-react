import PropTypes from 'prop-types';
import styled from 'styled-components';

const Align = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ spacing }) => spacing};
`;

Align.propTypes = {
  spacing: PropTypes.string,
};

Align.defaultProps = {
  spacing: 'space-between',
};

export default Align;
