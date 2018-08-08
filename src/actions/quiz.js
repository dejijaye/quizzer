// export const START_QUIZ = 'START_QUIZ'

import axios from 'axios';

export const FETCH_QUIZ = 'FETCH_QUIZ';
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
export const FETCH_QUIZ_FAILURE = 'FETCH_QUIZ_FAILURE';

export const SELECT_ANSWER = 'SELECT_ANSWER';
export const RECORD_ANSWER = 'RECORD_ANSWER';

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const FINISH_QUIZ = 'FINISH_QUIZ'

export const RESTART_QUIZ = 'RESTART_QUIZ';

let api_url;

export const selectApi = (diff) =>  {
  if(diff) {
    return api_url = `https://opentdb.com/api.php?amount=10&difficulty=${diff}&type=boolean`;
  }

  return api_url = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`;
};

export function fetchQuiz() {

  return dispatch => {
    return axios.get(api_url)
      .then(res => {
        dispatch(fetchQuizSucces(res.data.results))
      })
      .catch(e => {
        dispatch(fetchQuizFailure(e))
      })
  }
}

export function fetchQuizSucces(quiz) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    payload: quiz
  }
}

export function fetchQuizFailure(error) {
  return {
    type: FETCH_QUIZ_FAILURE,
    payload: error
  }
}

export function recordAnswer(ans) {
  return {
    type: RECORD_ANSWER,
    payload: ans
  }
}

export function restartQuiz() {
  return {
    type: RESTART_QUIZ
  }
}


