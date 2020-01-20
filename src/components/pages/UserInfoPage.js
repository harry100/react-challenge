import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserInfoPage = () => {
  return(
    <div>
      <div class="card text-white bg-info mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Info card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  formData: state.formData
});

export default connect(mapStateToProps)(UserInfoPage);
