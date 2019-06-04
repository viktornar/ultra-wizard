import React from 'react';

import StatusBar from './wizzard/StatusBar';

import './WizardApp.scss';

function WizardApp() {
  return (
    <div className="WizardApp">
      <div className="WizardApp__button--back">Back</div>
      <div className="WizardApp__body">
        Intro step
      </div>
      <StatusBar step={1} count={5}/>
    </div>
  );
}

export default WizardApp;
