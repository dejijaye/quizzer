import React from 'react';
import PropTypes from 'prop-types';

import './answer.css';

const Answers = (props) => {
  return (
    <div>
      <p>
        <input id="True" type="radio" name="radioGroup" onChange={props.onAnswerSelect} value="True" />
        <label htmlFor="True" >
          True
        </label>
      </p>
      <p>
        <input id="False" type="radio" name="radioGroup" onChange={props.onAnswerSelect} value="False" />
        <label htmlFor="False" >
          False
        </label>
      </p>
    </div>
  );
}

Answers.propTypes = {
  onAnswerSelect: PropTypes.func.isRequired
}

export default Answers;