import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import WizardApp from './WizardApp';
import { wizardConfig } from './config';
import {initialState} from './redux/reducers/wizard';

it('renders without crashing', () => {

  const mockStore = configureMockStore();
  const store = mockStore({ wizard: initialState });

  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <WizardApp wizardConfig={wizardConfig}/>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
