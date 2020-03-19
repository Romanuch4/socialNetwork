import LeftAsideFriendsSearch from './hellow-content-left_aside-friends-search';
import {changeInputValues} from '../../../../../../../../redux/reducers/friends-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchFriendsText: state.searchFriendsText,
  };
};

const LeftAsideFriendsSearchContainer = connect(mapStateToProps , {changeInputValues})(LeftAsideFriendsSearch);

export default LeftAsideFriendsSearchContainer;