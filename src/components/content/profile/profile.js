import React from 'react';

const Profile = ({person,}) => {
  return (
   <div>
     {person.aboutMe}
     <img src={person.photos.large} alt="avatar"/>
     {person.fullName}
   </div>
  )
};

export default Profile;