import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return(
    <div>
      <span>{`${props.number} of ${props.total} `}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  number: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default QuestionCount;