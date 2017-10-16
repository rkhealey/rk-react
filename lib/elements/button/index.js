import styled from 'styled-components';
import PropTypes from 'prop-types';

import themes from './themes';

const Button = styled.button`
  background-color: ${({ theme }) => themes[theme].background};
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => themes[theme].color};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  transition: all 300ms ease;
  &:hover {
    background: ${({ theme }) => themes[theme].hoverBackground};
  }
`;


Button.propTypes = {
  theme: PropTypes.string,
};

Button.defaultProps = {
  theme: 'black',
};

export default Button;
