import { SET_FORM_INPUT } from '../types';

const initialState = {};

export default (state = initialState, action) => {
 switch (action.type) {
  case SET_FORM_INPUT:
   return action.payload
  default:
   return state
 }
}
