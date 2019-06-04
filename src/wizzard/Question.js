import React from 'react';
import PropTypes from 'prop-types';

import './Question.scss';
import {LoanAmount} from "./LoanAmount";

function Question(props) {
  const {text} = props.question;
  const handleClick = (answer) => (e) => {
    props.onNext(answer)
  };

  const currentQuestion = [...props.history].pop();
  const {step} = currentQuestion;

  return (
    <div className="Question">
      <h2>{text}</h2>
      {
        step === 1 &&
          <LoanAmount onNext={props.onNext}/>
      }
      <button
        className="Question__next-step"
        onClick={handleClick('')}
      >
        Next
      </button>
    </div>
  );
}

Question.propTypes = {
  onNext: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
};

export default Question;
