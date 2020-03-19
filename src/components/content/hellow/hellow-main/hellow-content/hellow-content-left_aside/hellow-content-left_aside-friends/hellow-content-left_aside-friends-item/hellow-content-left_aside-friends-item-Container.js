import LeftAsideFriendsItemComponent from './hellow-content-left_aside-friends-item-Component';
import {getFriends, toogleIsFetching} from '../../../../../../../../redux/reducers/friends-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    stateFriends: state.friends.friends,
    isFetching: state.friends.isFetching,
  };
};

const LeftAsideFriendsItemContainer = connect
  (mapStateToProps ,{ getFriends, toogleIsFetching })(LeftAsideFriendsItemComponent);

export default LeftAsideFriendsItemContainer;