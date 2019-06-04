import React from 'react';
import PropTypes from 'prop-types';

import StatusBar from './wizzard/StatusBar';
import {STATE_INITIAL} from "./core/constants";

import './WizardApp.scss';
import Intro from "./wizzard/Intro";

class WizardApp extends React.Component {
  static propTypes = {
    wizardConfig: PropTypes.any,
  };

  constructor(props) {
    super(props);
    const {wizardConfig} = props;
    if (wizardConfig) {
      const {questions} = wizardConfig;

      this.state = {
        ...STATE_INITIAL,
        ...{
          steps: questions[questions.length - 1].step + 1,
          count: questions.length + 1,
          wizardConfig,
        }
      };
    }
  }

  startTest = () => {
    this.setState(() => {
      return {step: 1};
    });
  };

  render() {
    return (
      <div className="WizardApp">
        {
          this.state.step !== 0 &&
            <div className="WizardApp__button--back">Back</div>
        }
        <div className="WizardApp__body">
          {
            this.state.step === 0 &&
              <Intro onStart={this.startTest}/>
          }
        </div>
        <StatusBar step={1} count={5}/>
      </div>
    );
  }
}

export default WizardApp;
