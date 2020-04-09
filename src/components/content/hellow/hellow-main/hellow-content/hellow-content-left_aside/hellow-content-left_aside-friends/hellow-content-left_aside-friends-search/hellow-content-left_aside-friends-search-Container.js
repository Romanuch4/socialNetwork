import LeftAsideFriendsSearch from './hellow-content-left_aside-friends-search';
import {changeInputValues} from '../../../../../../../../redux/reducers/friends-reducer';
import { connect } from 'react-redux';
import { getSearchFriendsText } from '../../../../../../../../redux/selectors';

const mapStateToProps = state => {
  return {
    searchFriendsText: getSearchFriendsText(state),
  };
};

const LeftAsideFriendsSearchContainer = connect(mapStateToProps , {changeInputValues})(LeftAsideFriendsSearch);

export default LeftAsideFriendsSearchContainer;