import React from 'react';
import PropTypes from 'prop-types';

import './Question.scss';
import {LoanAmount} from "./LoanAmount";

function Question(props) {
  const {text, answers} = props.question;
  const handleClick = (answer) => (e) => {
    props.onNext(answer)
  };

  const currentHistory = [...props.history].pop();
  const {step} = currentHistory;

  return (
    <div className="Question">
      <h2>{text}</h2>
      {
        step === 1 &&
        <LoanAmount onNext={props.onNext}/>
      }
      {
        step > 1 && answers.map((answer, id) => {
          return (
            <div key={id}>{answer}</div>
          )
        })
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
