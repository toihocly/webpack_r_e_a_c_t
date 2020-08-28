import {combineReducers} from 'redux';

import auth from './authReducer';
import loading from './loadingReducer';

const reducers = combineReducers({
  loading,
  auth
});

export default reducers;
