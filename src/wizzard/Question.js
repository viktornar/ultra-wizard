import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  const handleClick = (answer) => (e) => { props.onNext(answer) };

  return (
    <div className="Question">
      <h2>Question?</h2>
      <button onClick={handleClick('')}>Next</button>
    </div>
  );
}

Question.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Question;
