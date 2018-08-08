import React from 'react';
import PropTypes from 'prop-types';
import { decodeHtmlEntity } from '../../lib/questionHelper';
import './result.css';

const List = (props) => {
  return (
    <div className="mb-lg">
      <h3>Result breakdown</h3>
      <ul>
        {props.questions.map((question, i) => 
          <li className={`qCard ${props.record[i] === 1 ? 'right': 'wrong'}`} key={i}>
            <span><strong>{question.category}</strong></span>
            <p><em>{decodeHtmlEntity(question.question)}</em></p>
            <span>Correct answer: {question.correct_answer}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

List.propTypes = {
  questions: PropTypes.array.isRequired
}

export default List;