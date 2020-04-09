import LeftAsideFriendsItemComponent from './hellow-content-left_aside-friends-item-Component';
import {getStartFriendsThunkCreator, getFriendsThunkCreator} from '../../../../../../../../redux/reducers/friends-reducer';
import { connect } from 'react-redux';
import { getFriend, getIsFetching, getCount } from '../../../../../../../../redux/selectors';

const mapStateToProps = state => {
  return {
    stateFriends: getFriend(state),
    isFetching: getIsFetching(state),
    count: getCount(state),
  };
};

const LeftAsideFriendsItemContainer = connect
  (mapStateToProps ,{ getStartFriendsThunkCreator, getFriendsThunkCreator })(LeftAsideFriendsItemComponent);

export default LeftAsideFriendsItemContainer;