import React from 'react';
import './hellow-content-center-posts.css';

const CenterPosts = ({ statePosts }) => {
  
  const content = statePosts.map(item => {
    return (
      <div className="hellow-content-center-post" key={item.id}>
        <p className="hellow-content-center-post-date">
          {item.date}
        </p>
        <p className="hellow-content-center-post-text">
          {item.text}
        </p>
      </div>
    );
  });
  return (
    <div>
      { content }
    </div>
  )
};

export default CenterPosts;