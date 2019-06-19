import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StatusBar from './wizzard/StatusBar';
import { STATE_INITIAL, STATE_STARTED } from './core/constants';

import './WizardApp.scss';
import Intro from './wizzard/Intro';
import { historyGoBack, historyRecord } from './core/history';
import Question from './wizzard/Question';
import Summary from './wizzard/Summary';
import FadeTransition from './wizzard/FadeTransition';
import {
  startWizard as startWizardAction,
  historyBack as historyBackAction,
  historyRecord as historyRecordAction
} from './redux/actions';

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

    const { actions } = this.props;
    actions.startWizardAction();

    historyRecord(this, STATE_STARTED);
  };

  goBack = () => {
    const { actions } = this.props;
    actions.historyBackAction();
    historyGoBack(this);
  };

  recordAnswerAndStep = (answer) => {
    const { actions } = this.props;

    const { givenAnswers } = this.state;
    givenAnswers.push(answer);

    let step = 0;
    let nextStep = this.state.step + 1;

    if (nextStep >= this.state.count) {
      step = this.state.count;
    } else {
      step = nextStep;
    }

    actions.historyRecordAction({
      givenAnswers
    });

    historyRecord(this, {
      step,
      givenAnswers
    });
  };

  render() {
    const { wizard: { givenAnswers, showIntro } } = this.props;

    const {questions} = this.props.wizardConfig;
    const currentQuestionConfig = questions[givenAnswers.length];

    return (
      <FadeTransition>
        <div className="WizardApp">
          {
            givenAnswers.length > 0 && givenAnswers.length < questions.length &&
            <div
              className="WizardApp__button--back"
              onClick={this.goBack}>
              Back
            </div>
          }
          <div className="WizardApp__body">
            {
              showIntro &&
              <Intro onStart={this.startWizard}/>
            }
            {
              !showIntro && givenAnswers.length < questions.length &&
              <Question
                onNext={this.recordAnswerAndStep}
                question={currentQuestionConfig}
                givenAnswers={givenAnswers}
              />
            }
            {
              !showIntro && givenAnswers.length === questions.length &&
              <Summary givenAnswers={givenAnswers}/>
            }
          </div>
          <StatusBar step={givenAnswers.length} count={questions.length}/>
        </div>
      </FadeTransition>
    );
  }
}

const mapStateToProps = state => ({
  wizard: state.wizard
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    startWizardAction,
    historyRecordAction,
    historyBackAction
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WizardApp);
