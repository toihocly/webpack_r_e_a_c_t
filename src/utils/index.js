import * as Helpers from '@/helpers';

export const isLogin = () => {
  return Helpers.getStorage('token');
};
