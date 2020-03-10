import LeftAsideFriendsSearch from './hellow-content-left_aside-friends-search';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchFriendsText: state.searchFriendsText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValues: text => {
      dispatch({
        type: 'UPDATE-FRIENDS-TEXTS',
        text: text,
      });
    },
  };
};

const LeftAsideFriendsSearchContainer = connect(mapStateToProps ,mapDispatchToProps)(LeftAsideFriendsSearch);

export default LeftAsideFriendsSearchContainer;