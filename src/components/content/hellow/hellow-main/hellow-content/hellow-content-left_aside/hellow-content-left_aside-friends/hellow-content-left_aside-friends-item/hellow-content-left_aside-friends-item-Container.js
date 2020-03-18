import LeftAsideFriendsItemComponent from './hellow-content-left_aside-friends-item-Component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    stateFriends: state.friends.friends,
    isFetching: state.friends.isFetching,
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

    toogleIsFetching: isFetching => {
      dispatch({
        type: 'TOOGLE_IS_FETCHING',
        isFetching,
      });
    },
  };
};

const LeftAsideFriendsItemContainer = connect(mapStateToProps ,mapDispatchToProps)(LeftAsideFriendsItemComponent);

export default LeftAsideFriendsItemContainer;