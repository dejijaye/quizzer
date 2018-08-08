import * as allActions from '../actions/quiz';

const initialState = {
  loading: false,
  questions: [],
  record: [],
  error: null
};

export default (state = initialState, action) =>  {
  switch (action.type) {
    case allActions.FETCH_QUIZ:
      return {...state, loading: true}
    
    case allActions.FETCH_QUIZ_SUCCESS:
      return {...state, questions: action.payload, loading: false}
    
    case allActions.FETCH_QUIZ_FAILURE:
      return {...state, error: action.payload, loading: false}

    case allActions.RECORD_ANSWER:
      return {...state, record: [...state.record, action.payload]}

    case allActions.RESTART_QUIZ:
      return {...state, questions: [], record: []}
    default:
      return state;
  }
};
