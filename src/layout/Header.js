import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.avatar && <img src={this.props.avatar} alt="头像" />}
          <span className="username">用户名</span>
          <a
            className="sign"
            onClick={this.props.isLogin ? this.props.onLogIn : this.props.onLogOut}
          >
            {this.props.isLogin ? 'Sign Out' : 'Sign In'}
          </a>
        </div>
      </header>
    );
  }
}
const mapStateToProps = ({ profile, isLogin }) => {
  return {
    ...profile,
    isLogin
  };
};
const getUserInfo = () => {
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login', {
    method: 'GET'
  }).then(response => response.json());
};
const mapDispatchToProps = dispatch => ({
  onLogIn() {
    getUserInfo().then(data => {
      dispatch(signIn(data));
    });
  },
  onLogOut() {
    dispatch(signOut);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
