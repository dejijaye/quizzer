import React, { Component } from 'react';
import Home from './components/splash/home';
import Setting from './components/setting/setting';
import Quiz from './components/quiz/quiz';
import Loader from './components/loader/loader';
import { decodeHtmlEntity } from './lib/questionHelper';
import {connect} from 'react-redux';
import {fetchQuiz, selectApi, recordAnswer, restartQuiz} from './actions/quiz'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      start: false,
      setting: false,
      loading: false,
      done: false,
      questions: [],
      questionId: 1,
      question: '',
      category: '',
      counter: 0,
      record: []
    }

    this.state = this.initialState
  }

  reset = () => {
    this.setState(this.initialState);
  }

  handleStart = (e) => {
    // e.preventDefault();
    this.setState({
      start: !this.props.start,
    })
  }

  handleSetting = (e) => {
    e.preventDefault()

    this.setState({
      loading: true
    })

    if(e.target.value) {
      selectApi(e.target.value);
    }
    this.props.fetchQuiz().then(() => {
      this.setState({
        setting: !this.props.setting,
        loading: false,
        questions: this.props.questions,
        category: this.props.questions[this.state.counter].category,
        question: decodeHtmlEntity(this.props.questions[this.state.counter].question),
        answer: this.props.questions[this.state.counter].correct_answer
      })
    });
  }

  handleSelect = (e) => {
    this.checkAnswer(e.target.value);
    if(this.state.questionId < this.state.questions.length) {
      setTimeout(() => this.setNextQuestion(), 500);
    } else {
      this.setState({
        loading: true
      })
      setTimeout(() => {
        this.setState({
          done: !this.props.done,
          loading: false
        });
      }, 1500);
    }
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const id = this.state.questionId + 1
    this.setState({
      counter: counter,
      questionId: id,
      category: this.state.questions[counter].category,
      question: decodeHtmlEntity(this.state.questions[counter].question),
      answer: this.state.questions[counter].correct_answer
    });

    // clear radio button
    const el = document.getElementsByName('radioGroup');
    for(let i = 0; i < el.length; i++)
      el[i].checked = false;
  }

  setRec = (binary) => {
    this.props.recordAnswer(binary);
  }

  checkAnswer = (ans) => {
    ans === this.state.answer ? this.setRec(1) : this.setRec(0)
  }

  handleRestart = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.props.restartQuiz();
      this.reset();
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.start ? 
          this.state.setting ?
          <Quiz 
            done={this.state.done}
            questions={this.props.questions}
            questionId={this.state.questionId}
            category={this.state.category}
            question={this.state.question}
            handleSelect={this.handleSelect}
            number={this.state.questionId}
            total={this.state.questions.length}
            record={this.props.record}
            restart={this.handleRestart}
          />
          :
          <Setting handleSetting={this.handleSetting}/>
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
              <Home start={this.handleStart}/>
            </ReactCSSTransitionGroup>
        }
        {this.state.loading && <Loader />}
        {this.props.error && <span>{this.props.error}</span>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.reducer.questions,
  record: state.reducer.record,
  error: state.reducer.error
})

export default connect(mapStateToProps, {fetchQuiz, recordAnswer, restartQuiz})(App);
