import LeftAsideFriendsItemComponent from './hellow-content-left_aside-friends-item-Component';
import {getFriends, toogleIsFetching, getStartFriends} from '../../../../../../../../redux/reducers/friends-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    stateFriends: state.friends.friends,
    isFetching: state.friends.isFetching,
  };
};

const LeftAsideFriendsItemContainer = connect
  (mapStateToProps ,{ getFriends, toogleIsFetching, getStartFriends })(LeftAsideFriendsItemComponent);

export default LeftAsideFriendsItemContainer;