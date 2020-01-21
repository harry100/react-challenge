import { SET_ERRORS, CLEAR_ERRORS } from '../types';

//dispatch an action that sets errors
export const setErrors = (errors) => dispatch => {
  dispatch({
    type: SET_ERRORS,
    payload: errors
  })
}

//dispatch an action that clears errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
