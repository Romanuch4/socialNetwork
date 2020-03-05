import React from 'react';
import './hellow-content-right_aside-content.css';
import img from './images/task.png';
import img1 from './images/close.png';

const RightAsideContent = ({stateEvents, dispatch}) => {
  const deleteEvent = (evt) => {
    const text = evt.nativeEvent.target.parentNode.dataset.title;
    dispatch({
      type: 'DELETE-EVENTS',
      text: text,
    });
  };

  const content = stateEvents.events.map(
    item => {
      return (
        <div className="hellow-content-right_aside-content" data-title={item.title} key={item.id}>
          <img className="hellow-content-right_aside-content-img" src={img} alt="event" />

          <div className="hellow-content-right_aside-content-text">
            <h4>
              {item.title}
            </h4>
            <h5 className="hellow-content-right_aside-content-h5">
              {item.date}
            </h5>
          </div>

          <img onClick={evt => deleteEvent(evt)} className="hellow-content-right_aside-content-close" src={img1} alt="close" />
        </div>
      );
    }
  );
  return (
    <div>
      {content}
    </div>
  );
};

export default RightAsideContent;