import React from 'react';
import './profile-name.css';

const ProfileName = React.memo(({ name }) => {
  return (
    <div>
      Имя: {name}
    </div>
  )
});

export default ProfileName;