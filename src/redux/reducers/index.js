import { combineReducers } from 'redux';
import formReducer from './formReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  formData: formReducer,
  errors: errorReducer
});
