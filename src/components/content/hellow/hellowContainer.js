import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hellow from './hellow';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';

class HellowComponent extends Component {
  render = () => {
    return (
      <Hellow {...this.props} />
    )
  }
};

const mapStateToProps = state => {
  return {
    stateFriends: state.friends.friends,
    statePosts: state.posts.posts,
    searchFriendsText: state.friends.searchFriendsText,
  };
};

const AuthRedirectComponent = WithAuthRedirect(HellowComponent);
const hellowContainer = connect(mapStateToProps)(AuthRedirectComponent);

export default hellowContainer;