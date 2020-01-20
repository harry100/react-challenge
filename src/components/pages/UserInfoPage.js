import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//includes
import UserInfoElements from '../includes/UserInfoElements';

const UserInfoPage = (props) => {
  const { formData } = props;

  return(
    <div>
      <UserInfoElements
        formData={formData}
      />
    </div>
  )
}

UserInfoPage.propTypes = {
  formData: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  formData: state.formData
});

export default connect(mapStateToProps)(UserInfoPage);
