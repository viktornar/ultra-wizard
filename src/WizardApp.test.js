import React from 'react';
import ReactDOM from 'react-dom';
import WizardApp from './WizardApp';
import {wizardConfig} from "./config";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WizardApp wizardConfig={wizardConfig}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
