


import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import '../Style/AuthFormLong.sass';

class FormHeader extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="form-header">
          {
              this.props.data.view == "signup" ?  
                (
                    <div>
                        {
                            // Display signup page
                        }
                        <Button bsStyle="link" className="bold">Signup</Button>
                        <Button bsStyle="link" onClick={this.props.setView}>Login</Button>
                    </div>
                ) : this.props.data.view == "login" ? (
                    <div>
                        {
                            // Display login page
                        }
                        <Button bsStyle="link" onClick={this.props.setView}>Signup</Button>
                        <Button bsStyle="link" className="bold">Login</Button>
                    </div>
                ) : (
                    <div>
                        Invalid state
                    </div>
                )
          }
          
      </div>
    )
  }
} 

export default FormHeader;