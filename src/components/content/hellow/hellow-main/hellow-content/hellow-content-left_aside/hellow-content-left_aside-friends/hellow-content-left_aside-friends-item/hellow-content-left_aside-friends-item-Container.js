import LeftAsideFriendsItemComponent from './hellow-content-left_aside-friends-item-Component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    stateFriends: state.friends.friends,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFriends: items => {
      dispatch({
        type: 'GET-FRIENDS',
        friends: [...items],
      });
    },
  };
};

const LeftAsideFriendsItemContainer = connect(mapStateToProps ,mapDispatchToProps)(LeftAsideFriendsItemComponent);

export default LeftAsideFriendsItemContainer;