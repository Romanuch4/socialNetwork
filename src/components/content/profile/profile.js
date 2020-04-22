import React from 'react';
import './profile.css';
import ProfileStatus from './profile-status';
import ProfileAbout from './profile-about';
import ProfileImg from './profile-img';
import ProfileName from './profile-name';
import ProfileJob from './profile-job';
import ProfileSocials from './profile-socials';

const Profile = React.memo(({ person, status, updateStatusThunkCreator, isEdit}) => {  
  return (
    <div className="profile">
      <div className="profile-content">
      <ProfileImg photos={person.photos.large} />
      <ProfileName name={person.fullName} />
      <ProfileAbout about={person.aboutMe} />
      <ProfileJob jobDescription={person.lookingForAJobDescription} />
      <ProfileStatus updateStatus={updateStatusThunkCreator} status={status} />
      <ProfileSocials isEdit={isEdit} contacts={person.contacts} />
      </div>
    </div>
  );
});

export default Profile;