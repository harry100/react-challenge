import { SET_FORM_INPUT } from '../types'

//action to set form values
export const setFormInput = (formData) => dispatch => {
 dispatch({
  type: SET_FORM_INPUT,
  payload: formData
 })
}
