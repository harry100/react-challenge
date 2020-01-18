import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//action for setting form data
import { setFormInput } from '../../redux/actions/formAction';

//action for setting errors
import { setErrors, clearErrors } from '../../redux/actions/errorAction';

//includes
import FormElements from '../includes/FormElements';

//validation for empty field
import setError from '../../validation/is-empty';

const FormPage = (props) => {
  const [ date, setDate ] = useState('');

  const handleDateChange = date => {
    setDate(date);
  };

  const handleSubmit = formData => e => {
    e.preventDefault();
    formData.date = date;
    props.clearErrors();
    props.setErrors(setError(formData))
    props.setFormInput(formData);
  }

  return(
    <div>
      <FormElements
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
        date={date}
        errors={props.errors}
      />
    </div>
  )
}

FormPage.propTypes = {
  setFormInput: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(
  mapStateToProps,
  {
    setFormInput,
    setErrors,
    clearErrors
  }
)(FormPage);
