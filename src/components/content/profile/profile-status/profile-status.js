import React, { Component } from 'react';
import './profile-status.css';

export default class ProfileStatus extends Component {
  state = {
    isToggle: false,
  };

  changeStatus = () => {
    this.setState({
      isToggle: !this.state.isToggle,
    });
  };

  render = () => {
    if (!this.state.isToggle) {
      return (
        <div>
          <span onClick={this.changeStatus}>
            {this.props.status}
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <input onBlur={this.changeStatus} value={this.props.status} autoFocus />
        </div>
      );
    };
  };
};