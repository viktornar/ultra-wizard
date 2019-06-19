import React from 'react';
import PropTypes from 'prop-types';

import './StatusBar.scss';

function StatusBar(props) {
  const stepsClassNames = [];
  for (let i = 0; i < props.count; ++i) {
    stepsClassNames[i] = "";
  }
  for (let i = 0; i < props.step - 1; ++i) {
    stepsClassNames[i] += 'seen ';
  }
  stepsClassNames[props.step - 1] += 'active ';
  stepsClassNames[props.count - 1] += 'final ';

  return (
    <ul className="StatusBar">
      {
        stepsClassNames.map(function (className, i) {
          return (<li key={i} className={className}><i/></li>);
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
