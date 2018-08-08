import React from 'react';
import Questions from '../questions/question';
import QuestionCount from '../questions/questionCount';
import Result from '../result/result';
import PropTypes from 'prop-types';
import Answers from '../answer/answers';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './quiz.css'

const Quiz = (props) => {
  return (
    <div>
    {!props.done ?
      <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={props.questionId}>
          <div className="category">
            <span>{props.category}</span>
          </div>
          <QuestionCount number={props.number} total={props.total}/>
          <Questions question={props.question} />
          <Answers onAnswerSelect={props.handleSelect}/>
        </div>
      </ReactCSSTransitionGroup>
        :
        <ReactCSSTransitionGroup
          className="container wrapper"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
        <div>
          <Result {...props}/>
        </div>
        </ReactCSSTransitionGroup>
      }
    </div>
  );
}

Quiz.propTypes = {
  questionId: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired
}

export default Quiz;