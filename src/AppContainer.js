import App from './App';
import {setUserData} from './redux/reducers/auth-reducer';
import {getData} from './api/api';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class AppComponent extends Component {
  componentDidMount = () => {
    getData.getUser()
      .then(response => {
        if (response.resultCode === 0) {
          this.props.setUserData( 
            response.data.id, 
            response.data.email, 
            response.data.login,
          );
          
        };
      });
  };


  render() {
    return (
      <App {...this.props} />
    );
  };
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

const AppContainer = connect(mapStateToProps, { setUserData })(AppComponent);

export default AppContainer;