import { SET_FORM_INPUT } from '../types';

const initialState = {
  formData: {}
}

export default (state = initialState, action) => {
 switch (action.type) {
  case SET_FORM_INPUT:
   return {
    formData: action.payload
   }
  default:
   return state
 }
}
