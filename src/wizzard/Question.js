import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  const { text } = props.question;
  const handleClick = (answer) => (e) => { props.onNext(answer) };

  return (
    <div className="Question">
      <h2>{text}</h2>
      <button
        className="Question__next"
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
};

export default Question;
