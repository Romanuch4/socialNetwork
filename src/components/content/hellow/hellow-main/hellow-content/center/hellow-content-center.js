import React from 'react';
import './hellow-content-center.css';
import CenterPosts from './center-posts';

const Center = ({statePosts}) => {
  return (
    <section className="hellow-content-center">
     <CenterPosts statePosts={statePosts} />
    </section>
  )
};

export default Center;