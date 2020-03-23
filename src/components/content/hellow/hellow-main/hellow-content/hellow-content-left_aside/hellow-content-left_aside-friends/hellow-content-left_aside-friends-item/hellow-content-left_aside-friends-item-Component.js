import React, { Component } from 'react';
import {getData} from '../../../../../../../../api/api';
import LeftAsideFriendsItem from './hellow-content-left_aside-friends-item';
import Preloader from '../../../../../../common/preloader';

export default class LeftAsideFriendsItemComponent extends Component {
  componentDidMount = () => {
    getData.getFriends(null)
      .then(response => {
        this.props.getStartFriends(response.items);
      });
  };

  addFriends = () => {
    this.props.toogleIsFetching(true);
    getData.getFriends(this.props.count)
    .then(response => {
      this.props.toogleIsFetching(false);
      this.props.getFriends(response.items);
    });
    this.props.changeCount();
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