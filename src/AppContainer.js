import App from './App';
import { loginThunkCreator, logoutThunkCreator } from './redux/reducers/auth-reducer';
import { initializedApp } from "./redux/reducers/app-reducer";

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Preloader from './components/content/common/preloader';

class AppComponent extends Component {
  componentDidMount = () => {
    this.props.initializedApp();
  };


  render() {
    if (!this.props.initialized) {
      debugger
      return <Preloader />
    }
    return (
      <App {...this.props} />
    );
  };
};

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
  };
};

const AppContainer = connect(mapStateToProps, {
  initializedApp,
  loginThunkCreator,
  logoutThunkCreator
})(AppComponent);

export default AppContainer;