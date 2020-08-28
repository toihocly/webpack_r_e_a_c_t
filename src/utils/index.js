import * as Helpers from '@/helpers';
import { USER_ROLE, TOKEN } from '@/constants';

export const isLogin = () => {
  return !!Helpers.getStorage(TOKEN);
};

export const logout = () => {
  Helpers.removeItemStorage(TOKEN);
};

export const userRole = () => {
  return Helpers.getStorage(USER_ROLE);
};
