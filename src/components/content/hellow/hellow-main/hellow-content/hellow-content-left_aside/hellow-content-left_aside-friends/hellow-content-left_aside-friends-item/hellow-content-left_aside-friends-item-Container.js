import LeftAsideFriendsItemComponent from './hellow-content-left_aside-friends-item-Component';
import {getStartFriendsThunkCreator, getFriendsThunkCreator} from '../../../../../../../../redux/reducers/friends-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    stateFriends: state.friends.friends,
    isFetching: state.friends.isFetching,
    count: state.friends.count,
  };
};

const LeftAsideFriendsItemContainer = connect
  (mapStateToProps ,{ getStartFriendsThunkCreator, getFriendsThunkCreator })(LeftAsideFriendsItemComponent);

export default LeftAsideFriendsItemContainer;