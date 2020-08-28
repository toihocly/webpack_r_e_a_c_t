import {authTypes, ggTypes} from './actionTypes';
import {config} from '../../constants';
import {Helpers} from '../../utils';

export const authActions = {
  userLogin,
  logOut,
  authCheck
};

function userLogin(data, resolve, reject) {
  return {
    type: authTypes.USER_LOGIN,
    data, resolve, reject
  }
};

function authCheck(data, resolve) {
  return {
    type: authTypes.CHECK_USER_REQUEST,
    data, resolve
  }
};

function logOut(resolve) {
  return {
    type: authTypes.LOGOUT,
    resolve
  }
};
