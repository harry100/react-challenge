import { SET_ERRORS, CLEAR_ERRORS } from '../types';

export const setErrors = (errors) => dispatch => {
  dispatch({
    type: SET_ERRORS,
    payload: errors
  })
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
