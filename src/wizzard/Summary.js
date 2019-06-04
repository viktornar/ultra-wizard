import React from 'react';
import PropTypes from 'prop-types';

function Summary({givenAnswers}) {
  return (
    <div className="Summary">
      <h2>Summary</h2>
      <ul>
        {
          givenAnswers.map((answer, id) => <li key={id}>{answer}</li>)
        }
      </ul>
    </div>
  );
}

Summary.propTypes = {
  givenAnswers: PropTypes.array.isRequired,
};

export default Summary;
