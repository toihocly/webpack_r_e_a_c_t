import {authTypes} from '../actions/actionTypes';

const INITIAL = {
  user: {},
};

const authReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case authTypes.SET_USER_INFOMATION:
      return {...state, user: action.data};
    case authTypes.LOGOUT:
      return {...state, user: {}};
    default:
      return state;
  }
};

export default authReducer;
