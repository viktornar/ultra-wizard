import React from 'react';
import ReactDOM from 'react-dom';
import WizardApp from './WizardApp';
import {wizardConfig} from "./config";

ReactDOM.render(
  <WizardApp wizardConfig={wizardConfig}/>,
  document.getElementById('wizard')
);
