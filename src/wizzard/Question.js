import React from 'react';
import PropTypes from 'prop-types';

import './Question.scss';
import NumberInput from "./NumberInput";
import {isEmpty} from "../core/utils";

// Render current answer depending if some condition exist in questions config.
function renderAnswer(answer, question, givenAnswers) {
  if (
    !isEmpty(question.depends) &&
    question.depends.id &&
    question.depends.condition &&
    question.answers
  ) {
    const {depends: {id, condition}, answers} = question;
    // Not a nice place.
    if (parseInt(givenAnswers[id - 1], 10) < condition.min) {
      return answers.indexOf(answer) < condition.renderIndex;
    } else {
      return answers.indexOf(answer) > condition.renderIndex;
    }
  }

  return true;
}

function Question(props) {
  const {question, givenAnswers} = props;
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
          if (renderAnswer(answer, question, givenAnswers)) {
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
  givenAnswers: PropTypes.array.isRequired,
};

export default Question;
