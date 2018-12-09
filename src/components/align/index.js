import PropTypes from 'prop-types';
import styled from 'styled-components';

const Align = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ spacing }) => spacing};

  ${({ overrides }) => overrides}
`;

Align.propTypes = {
  overrides: PropTypes.shape({}),
  spacing: PropTypes.string,
};

Align.defaultProps = {
  overrides: null,
  spacing: 'space-between',
};

export default Align;
