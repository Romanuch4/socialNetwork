import React from 'react';
import './profile-job.css';

const ProfileJob = React.memo(({ jobDescription }) => {
  return (
    <div className="profile-job">
      Информация о работе: {jobDescription!== null ? jobDescription : 'Пользователь не ищет работу'}
    </div>
  )
});

export default ProfileJob;