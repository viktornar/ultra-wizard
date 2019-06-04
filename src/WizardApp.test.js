import React from 'react';
import ReactDOM from 'react-dom';
import WizardApp from './WizardApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WizardApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
