import { SET_USER } from "./types";
import { User } from "../../services/bucket";

export function userReducer(state: User, action: any) {
  if (action.type === SET_USER) {
    state = action.data;
    return state;
  }

  return state;
}
