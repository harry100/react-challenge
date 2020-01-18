import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//action for setting form data
import { setFormInput } from '../../redux/actions/formAction';

//includes
import FormElements from '../includes/FormElements';

const FormPage = (props) => {
  const [ date, setDate ] = useState(new Date());

  const handleDateChange = date => {
    setDate(date);
  };

  const handleSubmit = formData => e => {
    e.preventDefault();
    console.log(formData);
    props.setFormInput(formData);
  }

  return(
    <div>
      <FormElements
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
        date={date}
      />
    </div>
  )
}

FormPage.propTypes = {
  setFormInput: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  formData: state.formData,
})

export default connect(mapStateToProps, { setFormInput })(FormPage);
