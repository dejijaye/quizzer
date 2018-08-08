import React from 'react';
import PropTypes from 'prop-types';

function Questions(props) {
  return (
    <div className="questionWrapper mt-lg p-md">
      <h1>{props.question}</h1>
    </div>
  )
}

Questions.propTypes = {
  question: PropTypes.string.isRequired
}

export default Questions;

