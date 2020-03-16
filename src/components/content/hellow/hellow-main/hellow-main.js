import React from 'react';
import './hellow-main.css';
import HellowContent from './hellow-content';

const HellowMain = ({statePosts, dispatch}) => {
  return (
    <section className="hellow-main">
      <HellowContent dispatch={dispatch} statePosts={statePosts}/>
    </section>
  )
};

export default HellowMain;