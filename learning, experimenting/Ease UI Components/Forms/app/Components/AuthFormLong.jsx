


import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import FormHeader from './FormHeader.jsx';
import FormBody from './FormBody.jsx';
import '../Style/AuthFormLong.sass';

class AuthFormLong extends Component{
  constructor(props){
    super(props);
    this.state = {
        view: "signup"
    }
  }

  setView(){
    this.setState({view: this.state.view == "signup" ? "login" : "signup"})
  }

  render(){
    return (
      <div className="form"> 
          <FormHeader data ={this.state} setView={this.setView.bind(this)}/>
          <FormBody data ={this.state}/>
      </div>
    )
  }
}

export default AuthFormLong;