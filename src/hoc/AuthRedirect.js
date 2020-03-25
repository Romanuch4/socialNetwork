import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export const WithAuthRedirect = Container => {
  class RedirectComponent extends Component {
    render() {
      if(!this.props.isAuth) return <Redirect to={"/login"} />
      return (
        <Container {...this.props} />
      );
    };
  };
  return connect(mapStateToProps)(RedirectComponent);
};