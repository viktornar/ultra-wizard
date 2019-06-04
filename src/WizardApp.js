import React from 'react';
import PropTypes from 'prop-types';

import StatusBar from './wizzard/StatusBar';
import {STATE_INITIAL, STATE_STARTED} from "./core/constants";

import './WizardApp.scss';
import Intro from "./wizzard/Intro";
import {historyGoBack, historyRecord} from "./core/history";

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

  startWizard = () => {
    this.setState(() => {
      return {step: 1};
    });
    historyRecord(this, STATE_STARTED);
  };

  goBack = () => historyGoBack(this);

  recordAnswerAndStep = () => {
    let step = 0;
    debugger;
    let nextStep = this.state.step + 1;

    if (nextStep >= this.state.count) {
      step = this.state.count;
    } else {
      step = nextStep;
    }

    historyRecord(this, {
      step
    });

    this.setState({step});
  };

  render() {
    return (
      <div className="WizardApp">
        {
          this.state.step > 1 &&
          <div
            className="WizardApp__button--back"
            onClick={this.goBack}>
            Back
          </div>
        }
        <div className="WizardApp__body">
          {
            this.state.step === 0 &&
            <Intro onStart={this.startWizard}/>
          }
          {
            0 < this.state.step && this.state.step < this.state.count &&
            <div>
              <h1>Question {this.state.step}</h1>
              <button onClick={this.recordAnswerAndStep}>Next</button>
            </div>
          }
        </div>
        <StatusBar step={this.state.step} count={this.state.count}/>
      </div>
    );
  }
}

export default WizardApp;
