import React from 'react';
import PropTypes from "prop-types";
import List from './list';

const Result = (props) => {
  const right = props.record.filter(rec => rec === 1).length;
  return (
    <div className="wrapper">
      <div>
        <span>{`You scored ${right} / ${props.record.length}`}</span>
      </div>
      <List
       questions={props.questions}
       record={props.record}  
      />
      <div>
        <button className="btn" onClick={props.restart}>Begin again?</button>
      </div>
    </div>
  );
}

Result.propTypes = {
  record: PropTypes.array.isRequired,
  restart: PropTypes.func.isRequired
}

export default Result;