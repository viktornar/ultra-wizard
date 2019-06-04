import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import WizardApp from './WizardApp';

// This can be fetched from form api.
const wizardConfig = {
  questions: [
    {
      "question": "What is your age?",
      "step": 1,
      "depends": []
    },
    {
      "question": "Term of loans?",
      "step": 2,
      "depends": []
    },
    {
      "question": "Payment frequency?",
      "step": 3,
      "depends": []
    }
  ]
};

ReactDOM.render(
  <WizardApp wizardConfig={wizardConfig}/>,
  document.getElementById('wizard')
);
