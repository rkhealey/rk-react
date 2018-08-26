import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import React from 'react';

const Transition = props => (
  <CSSTransition
    {...props}
    classNames={props.classname}
    timeout={{ enter: 500, exit: 0 }}
    unmountOnExit
  />
);

Transition.propTypes = {
  classname: PropTypes.string,
};

Transition.defaultProps = {
  classname: 'fade',
};

export default Transition;
