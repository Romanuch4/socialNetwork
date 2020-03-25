import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = ({person, isAuth}) => {
  if(!isAuth) return <Redirect to={"/hellow"} />
  return (
   <div>
     {person.aboutMe}
     <img src={person.photos.large} alt="avatar"/>
     {person.fullName}
   </div>
  )
};

export default Profile;