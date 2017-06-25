import React, { Component } from 'react';
import UserShield from './components/UserShield';
import UserDashboard from './components/UserDashboard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signedin: false,
      userId: undefined,
      password: undefined,
      user: {
        userId: undefined,
        name: undefined,
        content: [
          {
            title: undefined,
            content: undefined
          }
        ]
      }
    }
  }

  submit(e){
    e.preventDefault();
    const BASE_URL = "http://localhost:3001/auth/"
    fetch(`${BASE_URL}${this.state.userId}/${this.state.password}`, {
      method: 'GET',
      mode: 'no-cors'
    })
    .then(response=>response.json())
    .then(json=>{console.log(json)})
    .catch((err)=>{
      console.log(err)
    })
  }

  username(e){
    this.setState({userId: e.target.value})
  }
  password(e){
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div className="app">
        {
          !this.state.signedin ? <UserShield username={this.username.bind(this)} password={this.password.bind(this)} submit={this.submit.bind(this)}/>
                                        : <UserDashboard />
        }
      </div>
    );
  }
}

export default App;
