import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import Preloader from '../common/preloader';
import {toogleIsFetching} from '../../../redux/reducers/friends-reducer';
import {getProfileThunkCreator} from '../../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileComponent extends Component {
  componentDidMount = () => {
    this.props.getProfileThunkCreator(this.props.match.params.userId);
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
    isAuth: state.auth.isAuth,
  };
};

const WithUrlContainerComponent = withRouter(ProfileComponent);
const ProfileContainer = connect(mapStateToProps, {toogleIsFetching, getProfileThunkCreator})(WithUrlContainerComponent);

export default ProfileContainer;