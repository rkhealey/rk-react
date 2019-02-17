import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Button from '../button';
import Icon from '../icon';
import Transition from '../transition';

import { fade } from '../../styles/transitions';

import defaultTheme from '../../styles/theme';

const IconButton = css`
align-items: center;
border-radius: 50%;
display: flex;
height: 30px;
justify-content: center;
width: 30px;

&:hover {
  background-color: ${defaultTheme.colorBgLight};
}
`;

const Container = styled.div`
  position: relative;

  ${({ overrides }) => overrides}
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${defaultTheme.colorWhite};
  box-shadow: ${defaultTheme.boxShadow};
  position: absolute;
  right: 0;

  ${fade(1)}
`;

const MenuItem = styled.button`
  border: 0;
  background-color: transparent;
  color: ${({ color }) => color || defaultTheme.colorText};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  padding-left: 1rem;
  font-size: 0.875rem;
  text-align: left;

  &:hover {
    background: ${defaultTheme.colorBgLight};
  }

  &:focus, &:active {
    outline: 1px solid ${defaultTheme.colorSecondary};
  }
`;

class PopupMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showing: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClick(func) {
    this.setState({ showing: false }, () => {
      func();
    });
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showing: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showing: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }


  render() {
    const { actions, overrides, triggerIcon } = this.props;
    const { showing } = this.state;
    return (
      <Container overrides={overrides}>
        <Button
          onClick={showing ? this.closeMenu : this.showMenu}
          invisible
          overrides={IconButton}
        >
          <Icon name={triggerIcon} />
        </Button>
        <Transition classname="fade" in={showing}>
          <MenuContainer>
            {_.map(actions, item => (
              <MenuItem
                key={item.label}
                onClick={() => this.handleClick(item.onClick)}
                color={item.color}
              >
                {
                  item.icon &&
                    <Icon
                      name={item.icon}
                      color={item.color || defaultTheme.colorMute}
                      overrides={{ 'margin-right': '1rem' }}
                    />
                } {item.label}
              </MenuItem>
            ))}
          </MenuContainer>
        </Transition>
      </Container>
    );
  }
}

PopupMenu.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
    color: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
  overrides: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  triggerIcon: PropTypes.string,
};

PopupMenu.defaultProps = {
  overrides: '',
  triggerIcon: 'more_horiz',
};

export default PopupMenu;
