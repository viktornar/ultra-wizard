import React from 'react';
import PropTypes from 'prop-types';

import './Question.scss';
import NumberInput from "./NumberInput";
import {isEmpty} from "../core/utils";

function renderAnswer(answer, question, history) {
  if (
    !isEmpty(question.depends) &&
    question.depends.step &&
    question.depends.condition &&
    question.answers
  ) {
    const {depends: {step, condition}, answers} = question;
    // Not a nice place.
    if (parseInt(history[step - 1], 10) < condition.min) {
      return answers.indexOf(answer) < condition.renderIndex;
    } else {
      return answers.indexOf(answer) > condition.renderIndex;
    }
  }

  return true;
}

function Question(props) {
  const {question, history} = props;
  const {text, answers, answer} = question;
  const handleClick = (userAnswer) => () => {
    props.onNext(userAnswer)
  };

  return (
    <div className="Question">
      <h2>{text}</h2>
      {
        answer && answer.min && answer.max && answer.prefix &&
        <NumberInput
          onNext={props.onNext}
          min={answer.min}
          max={answer.max}
          prefix={answer.prefix}
        />
      }
      {
        answers && answers.map((answer, id) => {
          if (renderAnswer(answer, question, history)) {
            return (
              <div key={id}>
                <button
                  className="Question__answer"
                  onClick={handleClick(answer)}
                >
                  {answer}
                </button>
              </div>
            )
          }

          return null;
        })
      }
    </div>
  );
}

Question.propTypes = {
  onNext: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
};

export default Question;
