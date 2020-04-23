import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import Preloader from '../common/preloader';
import { toogleIsFetching } from '../../../redux/reducers/friends-reducer';
import { getProfileThunkCreator, saveProfileThunkCreator, toggleIsEdit, getStatusThunkCreator, updateStatusThunkCreator } from '../../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';
<<<<<<< HEAD
=======
import { getStatusThunkCreator, updateStatusThunkCreator } from '../../../redux/reducers/profile-reducer';
>>>>>>> master
import { getPerson, getStatus, getUserId, getIsEdit } from '../../../redux/selectors';

class ProfileComponent extends PureComponent {
  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (userId === "1" || !userId) {
      userId = this.props.userId;
    }

    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }

  componentDidMount = () => {
    this.refreshProfile();
  };

  componentDidUpdate = prevProps => {
    if (this.props.person.photos.large !== prevProps.person.photos.large) {
      this.refreshProfile();
    }
  }

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Profile {...this.props} />
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    person: getPerson(state),
    status: getStatus(state),
    userId: getUserId(state),
    isEdit: getIsEdit(state),
  };
};

export default compose(
  connect(
    mapStateToProps,
    { toogleIsFetching, 
      toggleIsEdit,
      getProfileThunkCreator, 
      getStatusThunkCreator, 
      updateStatusThunkCreator,
      saveProfileThunkCreator,
    },
  ),
  withRouter,
  WithAuthRedirect
)
  (ProfileComponent);