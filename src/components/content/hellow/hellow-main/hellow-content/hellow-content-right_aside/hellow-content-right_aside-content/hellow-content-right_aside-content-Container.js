import RightAsideContent from './hellow-content-right_aside-content';
import {deleteEvents} from '../../../../../../../redux/reducers/events-reducer';
import { connect } from 'react-redux';
import { getEvents } from '../../../../../../../redux/selectors';

const mapStateToProps = state => {
  return {
    stateEvents: getEvents(state),
  };
};

const RightAsideContentContainer = connect(mapStateToProps, {deleteEvents})(RightAsideContent);

export default RightAsideContentContainer;