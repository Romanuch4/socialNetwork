import RightAsideContent from './hellow-content-right_aside-content';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    stateEvents: state.events,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEvents: text => {
      dispatch({
        type: 'DELETE-EVENTS',
        text: text,
      });
    },
  };
};

const RightAsideContentContainer = connect(mapStateToProps, mapDispatchToProps)(RightAsideContent);

export default RightAsideContentContainer;