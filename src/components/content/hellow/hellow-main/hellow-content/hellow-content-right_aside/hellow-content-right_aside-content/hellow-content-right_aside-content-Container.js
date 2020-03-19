import RightAsideContent from './hellow-content-right_aside-content';
import {deleteEvents} from '../../../../../../../redux/reducers/delete_events-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    stateEvents: state.events,
  };
};

const RightAsideContentContainer = connect(mapStateToProps, {deleteEvents})(RightAsideContent);

export default RightAsideContentContainer;