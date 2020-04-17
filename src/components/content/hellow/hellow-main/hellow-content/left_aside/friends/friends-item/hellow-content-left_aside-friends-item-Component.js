import React, { Component } from 'react';
import LeftAsideFriendsItem from './hellow-content-left_aside-friends-item';
import Preloader from '../../../../../../common/preloader';

export default class LeftAsideFriendsItemComponent extends Component {
  componentDidMount = () => {
    this.props.getStartFriendsThunkCreator();
  };

  addFriends = () => {
    this.props.getFriendsThunkCreator(this.props.count);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <LeftAsideFriendsItem stateFriends={this.props.stateFriends} addFriends={this.addFriends} />
      </>
    );
  };
};