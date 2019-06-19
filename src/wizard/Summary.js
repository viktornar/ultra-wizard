import React from 'react';
import PropTypes from 'prop-types';

function Summary({givenAnswers}) {
  return (
    <div className="Summary">
      <h2>Summary:</h2>
      {
        givenAnswers.map((answer, id) => <p key={id}>{answer}</p>)
      }
    </div>
  );
}

Summary.propTypes = {
  givenAnswers: PropTypes.array.isRequired,
};

export default Summary;
