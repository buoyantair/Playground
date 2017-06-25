import React, { Component } from 'react';

class UserShield extends Component{

  render(){
    return(
      <form className="userShield">
        <div className="userIconBig"></div>
        <input
          name="username"
          placeholder="Enter your username"
          onChange={this.props.username}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={this.props.password}
        />
        <button
          onClick={this.props.submit}
         type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserShield;
