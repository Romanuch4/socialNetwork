import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Hellow from './hellow';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import {addPosts} from '../../../redux/reducers/post-reducer';
import { compose } from 'redux';
import { getSearchFriendsText, getPosts, getFriend } from '../../../redux/selectors';

class HellowComponent extends PureComponent {
  render = () => {
    return (
      <Hellow {...this.props} />//dispath
    )
  }
};

const mapStateToProps = state => {
  return {
    stateFriends: getFriend(state),
    statePosts: getPosts(state),
    searchFriendsText: getSearchFriendsText(state),
  };
};

export default compose( connect(mapStateToProps, {addPosts}),WithAuthRedirect)(HellowComponent);