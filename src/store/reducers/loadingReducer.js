import {loadingTypes} from '../actions/actionTypes';

const INITIAL = {
  isFetching: false,
  title: '',
  message: '',
};

const loadingReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case loadingTypes.OPEN:
      return {...state, isFetching: true, message: '', title: ''};
    case loadingTypes.CLOSE:
      return {...state, isFetching: false, message: '', title: ''};
    case loadingTypes.ERROR:
      return {...state, isFetching: false, message: action.error, title: action.title || ''};
    default:
      return state;
  }
};

export default loadingReducer;
