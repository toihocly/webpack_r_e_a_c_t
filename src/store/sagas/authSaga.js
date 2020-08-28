import AsyncStorage from '@react-native-community/async-storage';
import {put, takeLatest, take} from 'redux-saga/effects';
import axios from './axios.config';
import {authTypes, loadingTypes} from '../actions/actionTypes';
import {keyStores, TEXT} from '../../constants';

const userRaw = {
  id: '1',
  name: 'user name',
  phone: '0979797979',
  address: '',
  email: 'email@domain.com',
  avatar: require('../../images/img/raw_avatar.png')
}

function* fetchCheckUser(action) {
  try {
    // const userInfo = yield axios.post(`auth/user-login`, action.data);
    // yield AsyncStorage.setItem(keyStores.userToken, 'userInfo.data.token');
    // yield (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`);
    yield put({type: authTypes.SET_USER_INFOMATION, data: userRaw });
    action.resolve && action.resolve();
  } catch (error) {
    action.reject && action.reject(error);
  }
}
function* fetchUserLogin(action) {
  try {
    // const userInfo = yield axios.post(`auth/user-login`, action.data);
    yield AsyncStorage.setItem(keyStores.userToken, 'userInfo.data.token');
    // yield (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`);
    yield put({type: authTypes.SET_USER_INFOMATION, data: userRaw });
    action.resolve && action.resolve();
  } catch (error) {
    action.reject && action.reject(error);
  }
}

function* fetchLogOut(action) {
  try {
    yield AsyncStorage.removeItem(keyStores.userToken);
    // yield (axios.defaults.headers.common['Authorization'] = ``);
    yield put({type: authTypes.SET_USER_INFOMATION, data: {}});
    action.resolve && action.resolve();
  } catch (error) {
    yield put({type: loadingTypes.ERROR, error});
  }
}

export function* authWatcher() {
  yield takeLatest(authTypes.CHECK_USER_REQUEST, fetchCheckUser);
  yield takeLatest(authTypes.USER_LOGIN, fetchUserLogin);
  yield takeLatest(authTypes.LOGOUT, fetchLogOut);
}
