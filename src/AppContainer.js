import App from './App';
import { getProfileThunkCreator } from './redux/reducers/auth-reducer';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class AppComponent extends Component {
  componentDidMount = () => {
    this.props.getProfileThunkCreator();
  };


  render() {
    return (
      <App {...this.props} />
    );
  };
};

const mapStateToProps = state => {
  return {
    login: state.auth.login,
  };
};

const AppContainer = connect(mapStateToProps, { getProfileThunkCreator })(AppComponent);

export default AppContainer;