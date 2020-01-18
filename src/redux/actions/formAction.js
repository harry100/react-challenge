import { SET_FORM_INPUT } from '../types'

export const setFormInput = (formData) => dispatch => {
 dispatch({
  type: SET_FORM_INPUT,
  payload: formData
 })
}
