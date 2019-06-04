import React from 'react';
import PropTypes from 'prop-types';

import FadeTransition from '../core/FadeTransition';

import './Intro.scss';

function Intro(props) {
  const { onStart } = props;

  return (
    <FadeTransition {...props}>
      <div className="Intro">
        <h2>We will help for you to take a right loan</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="Intro__button" onClick={onStart}>Start</button>
      </div>
    </FadeTransition>
  );
}

Intro.propTypes = {
  onStart: PropTypes.func.isRequired
};

export default Intro;
