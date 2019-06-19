import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import WizardApp from './WizardApp';
import { wizardConfig } from './config';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <WizardApp wizardConfig={wizardConfig}/>
  </Provider>,
  document.getElementById('wizard')
);
