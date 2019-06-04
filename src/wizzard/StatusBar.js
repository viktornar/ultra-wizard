import React from 'react';
import PropTypes from 'prop-types';

import './StatusBar.scss';

function StatusBar(props) {
  const steps = [];
  for (let i = 0; i < props.count; ++i) {
    steps[i] = "";
  }
  for (let i = 0; i < props.step - 1; ++i) {
    steps[i] += 'seen ';
  }
  steps[props.step - 1] += 'active ';
  steps[props.count - 1] += 'final ';

  return (
    <ul className="StatusBar">
      {
        steps.map(function (classes, i) {
          return (<li key={i} className={classes}><i/></li>);
        })
      }
    </ul>
  );
}

StatusBar.propTypes = {
  step: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
};

export default StatusBar;
