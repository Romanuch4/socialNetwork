import React from 'react';
import './profile.css';
import ProfileStatus from './profile-status';
import ProfileAbout from './profile-about';
import ProfileImg from './profile-img';
import ProfileName from './profile-name';
import ProfileJob from './profile-job';
<<<<<<< HEAD
import ProfileNetworks from './profile-networks';

const Profile = React.memo(({ person, status, updateStatusThunkCreator, isEdit, toggleIsEdit, saveProfileThunkCreator, userId }) => {
  const onSubmit = formData => {
    formData.aboutMe = 'bla-bla-bla';
    formData.lookingForAJobDescription = 'bla-bla-bla';
    formData.fullName = 'Romanuch4';    
    if (formData) {
      toggleIsEdit(!isEdit);
      saveProfileThunkCreator(formData);
    }; 
  };
  return (
    <div className="profile">
      <div className="profile-content">
        <ProfileImg photos={person.photos.large} />
        <ProfileName name={person.fullName} />
        <ProfileAbout about={person.aboutMe} />
        <ProfileJob jobDescription={person.lookingForAJobDescription} />
        <ProfileStatus updateStatus={updateStatusThunkCreator} status={status} />
        <ProfileNetworks userId={userId} toggleIsEdit={toggleIsEdit} isEdit={isEdit} onSubmit={onSubmit} networks={person.contacts} />
=======
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
>>>>>>> master
      </div>
    </div>
  );
});

export default Profile;