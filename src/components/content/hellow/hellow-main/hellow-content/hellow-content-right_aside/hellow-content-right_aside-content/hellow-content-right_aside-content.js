import React from 'react';
import './hellow-content-right_aside-content.css';
import img from './images/task.png';
import img1 from './images/close.png';

const RightAsideContent = ({stateEvents, deleteEvents}) => {

  const eventElement = React.createRef();
  const deleteEvent = () => {
    const id = parseInt(eventElement.current.dataset.id, 10);
    deleteEvents(id);
  };
  const content = stateEvents.map(
    item => {
      return (
        <div ref={eventElement} className="hellow-content-right_aside-content" data-id={item.id} key={item.id}>
          <img className="hellow-content-right_aside-content-img" src={img} alt="event" />

          <div className="hellow-content-right_aside-content-text">
            <h4>
              {item.title}
            </h4>
            <h5 className="hellow-content-right_aside-content-h5">
              {item.date}
            </h5>
          </div>

          <img onClick={deleteEvent} className="hellow-content-right_aside-content-close" src={img1} alt="close" />
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