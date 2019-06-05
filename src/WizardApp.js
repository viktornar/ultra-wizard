import React from 'react';
import PropTypes from 'prop-types';

import StatusBar from './wizzard/StatusBar';
import {STATE_INITIAL, STATE_STARTED} from "./core/constants";

import './WizardApp.scss';
import Intro from "./wizzard/Intro";
import {historyGoBack, historyRecord} from "./core/history";
import Question from "./wizzard/Question";
import Summary from "./wizzard/Summary";
import FadeTransition from "./wizzard/FadeTransition";

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

  recordAnswerAndStep = (answer) => {
    const {givenAnswers} = this.state;
    givenAnswers.push(answer);

    let step = 0;
    let nextStep = this.state.step + 1;

    if (nextStep >= this.state.count) {
      step = this.state.count;
    } else {
      step = nextStep;
    }

    historyRecord(this, {
      step,
      givenAnswers
    });

    this.setState({
      step,
      givenAnswers
    });
  };

  render() {
    const {questions} = this.props.wizardConfig;
    const currentQuestion = questions[this.state.step - 1];

    return (
      <FadeTransition>
        <div className="WizardApp">
          {
            this.state.step > 1 && this.state.step < this.state.count &&
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
              <Question
                onNext={this.recordAnswerAndStep}
                question={currentQuestion}
                history={this.state.history}
              />
            }
            {
              this.state.step === this.state.count &&
              <Summary givenAnswers={this.state.givenAnswers}/>
            }
          </div>
          <StatusBar step={this.state.step} count={this.state.count}/>
        </div>
      </FadeTransition>
    );
  }
}

export default WizardApp;
