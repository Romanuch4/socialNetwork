import React, { Component } from 'react';
import './profile-status.css';

export default class ProfileStatus extends Component {
  state = {
    isToggle: false,
    status: this.props.status,
  };

  changeStatus = () => {
    this.setState({
      isToggle: !this.state.isToggle,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = evt => {
    this.setState({
      status: evt.currentTarget.value,
    });
  };

  componentDidUpdate = prevProps => {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    };
  };

  render = () => {
    if (!this.state.isToggle) {
      return (
        <div>
          <span onClick={this.changeStatus}>
            {this.props.status || 'Nothing'}
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <input onChange={this.onStatusChange} onBlur={this.changeStatus} value={this.state.status} autoFocus />
        </div>
      );
    };
  };
};
