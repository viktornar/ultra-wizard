import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './WizardApp.scss';
import StatusBar from './wizzard/StatusBar';
import Intro from './wizzard/Intro';
import Question from './wizzard/Question';
import Summary from './wizzard/Summary';
import FadeTransition from './wizzard/FadeTransition';
import {
  startWizard,
  prevStep,
  nextStep
} from './redux/actions';

class WizardApp extends React.Component {
  static propTypes = {
    wizardConfig: PropTypes.any,
  };

  startWizard = () => {
    const { actions } = this.props;
    actions.startWizard();
  };

  goBack = () => {
    const { actions } = this.props;
    actions.prevStep();
  };

  recordAnswerAndStep = (answer) => {
    const { actions } = this.props;

    actions.nextStep({
      answer
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
    startWizard,
    nextStep,
    prevStep
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WizardApp);
