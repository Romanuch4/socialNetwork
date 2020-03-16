import React, {Component} from 'react';
import * as axios from 'axios';
import './hellow-content-left_aside-friends-item.css';
import avatar1 from '../../../../../../../../images/Roman.png';
import avatar2 from '../../../../../../../../images/Max.jpg';
import avatar3 from '../../../../../../../../images/Karina.jpg';

export default class LeftAsideFriendsItem extends Component {
  componentDidMount() {
    const addFriends = () => {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.getFriends(response.data.items);
      });
    };
    window.addFriends = addFriends;
  };

  render() {
    let save;
    const elements = this.props.stateFriends.map(item => {
      if (item.image === "Roman.png") {
        save = avatar1;
      } else if (item.image === "Max.jpg") {
        save = avatar2;
      } else if (item.image === "Karina.jpg") {
        save = avatar3;
      };

      let className;
      if (item.online) {
        className = "hellow-content-left_aside-friends-item-block hellow-content-left_aside-friends-item-block-2";
      } else {
        className = "hellow-content-left_aside-friends-item-block hellow-content-left_aside-friends-item-block-1";
      }
      return (
        <div className={className} key={item.id}>
          <img
            src={save}
            alt={item.name}
            className="hellow-content-left_aside-friends-item"
          />
        </div>
      );
    });
    return (
      <div className="hellow-content-left_aside-friends-items">
        {elements}
      </div>
    );
  };
}