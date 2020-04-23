import React from 'react';
import './register-sub-title.css';

const RegisterSubTitle = React.memo(() => {
  return (
    <div>
      <h3 className="register-sub-title">
        LogIn
      </h3>
      <h4 className="register-description">
        Want to login fill out this form!
      </h4>
    </div>
  )
});

export default RegisterSubTitle;