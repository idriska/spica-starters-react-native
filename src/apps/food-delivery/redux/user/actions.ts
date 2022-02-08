import {SET_USER} from './types';

export const setUserAction = (user: any) => {
  return {
    type: SET_USER,
    data: user,
  };
};
