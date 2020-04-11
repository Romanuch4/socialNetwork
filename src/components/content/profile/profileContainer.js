import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import Preloader from '../common/preloader';
import { toogleIsFetching } from '../../../redux/reducers/friends-reducer';
import { getProfileThunkCreator } from '../../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getStatusThunkCreator, updateStatusThunkCreator } from '../../../redux/reducers/profile-reducer';
import { getPerson, getStatus, getUserId } from '../../../redux/selectors';

class ProfileComponent extends PureComponent {
  
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (userId === "1" || !userId) {
      userId = this.props.userId;
    }

    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);    
  };

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Profile {...this.props} person={this.props.person} />
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    person: getPerson(state),
    status: getStatus(state),
    userId: getUserId(state),
  };
};

export default compose(
  connect(
    mapStateToProps, 
    { toogleIsFetching, getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }
  ),
  withRouter,
  WithAuthRedirect
)
  (ProfileComponent);