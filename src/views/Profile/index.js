import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div className="main-view profile">
        <h2>个人信息</h2>
        <ul>
          <li>用户名：{this.props.name}</li>
          <li>用户id：{this.props.id}</li>
          <li>用户头像：</li>
          <img src={this.props.avatar} alt="头像" />
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ profile: { name, id, avatar } }) => ({ name, id, avatar });
export default connect(mapStateToProps)(Profile);
