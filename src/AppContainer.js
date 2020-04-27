import App from './App';
import { loginThunkCreator, logoutThunkCreator } from './redux/reducers/auth-reducer';
import { initializedApp } from "./redux/reducers/app-reducer";

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Preloader from './components/content/common/preloader';
import { getLogin, getIsAuth, getInitialized, getCaptchaUrl } from './redux/selectors';

class AppComponent extends Component {
  componentDidMount = () => {
    this.props.initializedApp();
  };


  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <App {...this.props} />
    );
  };
};

const mapStateToProps = state => {
  return {
    login: getLogin(state),
    isAuth: getIsAuth(state),
    initialized: getInitialized(state),
    captchaUrl: getCaptchaUrl(state),
  };
};

const AppContainer = connect(mapStateToProps, {
  initializedApp,
  loginThunkCreator,
  logoutThunkCreator
})(AppComponent);

export default AppContainer;