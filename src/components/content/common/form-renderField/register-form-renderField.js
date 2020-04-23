import React from 'react';
import './register-form-renderField.css'

const renderField = ({
  className,
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label className="register-form-label">{label}
      <div>
        <input className={className} {...input} placeholder={label} type={type} />
        {touched && ((error && <span className="error">{error}</span>))}
      </div>
    </label>
  </div>
);

export default renderField;