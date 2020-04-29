import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Hellow from './hellow';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import {addPosts} from '../../../redux/reducers/post-reducer';
import { compose } from 'redux';
import { getSearchFriendsText, getPosts, getFriend, getPhoto, getUserId, getIsFetching2 } from '../../../redux/selectors';
import {downloadPhotoThunkCreator, } from '../../../redux/reducers/profile-reducer';
import {getProfileThunkCreator} from '../../../redux/reducers/profile-reducer';

class HellowComponent extends PureComponent {
  componentDidMount() {
    this.props.getProfileThunkCreator(this.props.userId);
  }

  render = () => {
    return (
      <>
        <Hellow {...this.props} />
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    stateFriends: getFriend(state),
    statePosts: getPosts(state),
    searchFriendsText: getSearchFriendsText(state),
    userImage: getPhoto(state),
    userId: getUserId(state),
    isFetching: getIsFetching2(state),
  };
};

export default compose( connect(mapStateToProps, {addPosts, downloadPhotoThunkCreator, getProfileThunkCreator}),WithAuthRedirect)(HellowComponent);