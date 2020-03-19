import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './profile';
import Preloader from '../common/preloader';
import {toogleIsFetching} from '../../../redux/reducers/friends-reducer';
import {getUser} from '../../../redux/reducers/profile-reducer';

class ProfileComponent extends Component {
  componentDidMount = () => {
    this.props.toogleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
      .then(response => {
        console.log(response.data)
        this.props.toogleIsFetching(false);
        this.props.getUser(response.data);
      });
  };

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Profile {...this.props} person={this.props.person} />
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    isFetching: state.friends.isFetching,
    person: state.profile.person,
  };
};

const ProfileContainer = connect(mapStateToProps, {toogleIsFetching, getUser})(ProfileComponent);

export default ProfileContainer;