import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../button';
import Modal from './';

class ModalExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openModal: null,
    };

    this.updateSelection = this.updateSelection.bind(this);
  }
  updateSelection(newSelection) { this.setState({ openModal: newSelection }); }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.openModal === 'modalExample'} onClose={() => this.updateSelection(null)}>
          <h3>I’m the Modal Component</h3>
        </Modal>
        <Button
          onClick={() => this.updateSelection('modalExample')}
          theme={{ colorPrimary: 'purple' }}
        >
          Open Modal
        </Button>
      </div>);
  }
}

storiesOf('Modal', module)
  .add('modal default', () => (
    <ModalExample />
  ));
