import React, { Component } from 'react';
import './hellow-content-left_aside-messages.css';
import { NavLink, Route } from 'react-router-dom';

class LeftAsideMessages extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  };

  tick() {
    this.setState({
      date: new Date()
    });
  };

  render() {
    return (
      <div className="hellow-content-left_aside-messages">
        <div>
          <Route path={''}>
            <NavLink
              activeClassName="hellow-content-left_aside-messages-active"
              className="hellow-content-left_aside-messages-a"
              to={'/hellow'}>
                <i className="hellow-content-left_aside-messages-i fa fa-clock"></i>
              {this.state.date.toLocaleTimeString()}
            </NavLink>
          </Route>
        </div>

        <div>
          <Route path={''/* '/hellow/messages' */}>
            <NavLink
              activeClassName="hellow-content-left_aside-messages-active"
              className="hellow-content-left_aside-messages-a"
              to={'/hellow/messages'}>
                <i className="hellow-content-left_aside-messages-i fa fa-envelope"></i>
              Сообщения
            </NavLink>
          </Route>
        </div>
      </div>
    );
  };
};

export default LeftAsideMessages;