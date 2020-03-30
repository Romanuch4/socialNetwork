import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import Preloader from '../common/preloader';
import { toogleIsFetching } from '../../../redux/reducers/friends-reducer';
import { getProfileThunkCreator } from '../../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getStatusThunkCreator, updateStatusThunkCreator } from '../../../redux/reducers/profile-reducer';

class ProfileComponent extends Component {
  
  componentDidMount = () => {
    if (this.props.match.params.userId <= 1) {
      this.props.match.params.userId = 6458;
    }
    this.props.getProfileThunkCreator(this.props.match.params.userId);
    this.props.getStatusThunkCreator(this.props.match.params.userId);    
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
    person: state.profile.person,
    status: state.profile.status,
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