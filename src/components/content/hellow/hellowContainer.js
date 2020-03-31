import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hellow from './hellow';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import {addPosts} from '../../../redux/reducers/post-reducer';
import { compose } from 'redux';

class HellowComponent extends Component {
  render = () => {
    return (
      <Hellow {...this.props} />//dispath
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

export default compose( connect(mapStateToProps, {addPosts}),WithAuthRedirect)(HellowComponent);