import React, { useEffect, useState } from 'react';
import './profile-status.css';

const ProfileStatus = (props) => {

  const [isToggle, setIsToggle] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => setStatus(props.status), [props.status]);

  const changeStatus = () => {
    setIsToggle(!isToggle);
    props.updateStatus(status);
  };

  const onStatusChange = evt => {
    setStatus(evt.currentTarget.value);
  };

  if (!isToggle) {
    return (
      <div>
        <span onClick={changeStatus}>
          {props.status || 'Nothing'}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <input onChange={onStatusChange} onBlur={changeStatus} value={status} autoFocus />
      </div>
    );
  };
};

export default ProfileStatus;
