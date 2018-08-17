import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../button';
import Transition from './';

import { fade } from '../../styles/transitions';

const Box = styled.div`
  background: purple;
  height: 75px;
  margin-top: 1rem;
  width: 150px;

  ${fade}
`;

class ToggleFixture extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <div>
          <Button
            onClick={() => this.setState({ show: !this.state.show })}
            theme={{ colorPrimary: 'purple', colorText: '#fff' }}
          >
            Toggle
          </Button>
        </div>
        {React.cloneElement(this.props.children, {
          in: this.state.show,
          classname: 'fade',
        })}
      </div>
    );
  }
}

storiesOf('Transition', module)
  .add('Fade', () => (
    <ToggleFixture>
      <Transition >
        <Box />
      </Transition>
    </ToggleFixture>
  ));

ToggleFixture.propTypes = {
  children: PropTypes.node.isRequired,
};
