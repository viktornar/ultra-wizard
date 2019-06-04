import React from 'react';
import PropTypes from 'prop-types';

import './Question.scss';
import {NumberInput} from "./NumberInput";

function getAnswer(answer) {
  if ()
}

function Question(props) {
  const {text, answers, answer} = props.question;
  const handleClick = (answer) => () => {
    props.onNext(answer)
  };

  return (
    <div className="Question">
      <h2>{text}</h2>
      {
        answer && answer.min && answer.max &&
        <NumberInput
          onNext={props.onNext}
          min={answer.min}
          max={answer.max}
        />
      }
      {
        answers && answers.map((answer, id) => {
          const answerWithCondition = getAnswer();

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
