import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import { isEmpty } from '../../validation/is-empty';

const UserInfoElements = (props) => {
  const { formData } = props;
  return(
    <div>
      {isEmpty(formData)? (
        <div>
          <div className="alert alert-info remove-margin" role="alert">
            You have not filled up the form.
          </div>
          <nav className="navbar navbar-light bg-light link-band">
            <Link to="/" className="navbar-brand link-button"> Goto Forms Page. </Link>
          </nav>
        </div>
        ):(
        <div className="card text-white bg-info mb-3">
          <div className="card-header"> User Information </div>
          <div className="card-body">
            <h5 className="card-title"> {`${formData.name} (${formData.email})`} </h5>
            <p className="card-text"> Phone: {formData.phone} </p>
            <p className="card-text"> Address: {formData.address} </p>
            <p className="card-text"> Gender: {formData.gender} </p>
            <p className="card-text"> Date of Birth: <Moment format="Do MMM YYYY" date={formData.date} /> </p>
            {formData.degree? (
              <p className="card-text"> Degree: {formData.degree} </p>
              ):('')}
            {formData.institution? (
              <p className="card-text"> Institution: {formData.institution} </p>
              ):('')}
            {formData.modeOfContact? (
              <p className="card-text"> Preferred Mode of Contact: {formData.modeOfContact} </p>
              ):('')}
          </div>
        </div>
        )}
      </div>
  )
}

UserInfoElements.propTypes = {
  formData: PropTypes.object.isRequired
}

export default UserInfoElements;
