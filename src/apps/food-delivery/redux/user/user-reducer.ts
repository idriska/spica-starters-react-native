import {SET_USER, UPDATE_USER_ADDRESSES} from './types';
import {User} from '../../services/bucket';

export function userReducer(state: any, action: any) {
  if (action.type === SET_USER) {
    state = action.data;
    return state;
  } else if (action.type === UPDATE_USER_ADDRESSES) {
    console.log("ACTION", action)
    state.address = action.data;
    console.log("STATE", state)
    return state;
  }

  return state;
}
