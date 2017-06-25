


import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, ControlLabel, Grid, Row, Col} from 'react-bootstrap';
import '../Style/AuthFormLong.sass';

class FormBody extends Component{
  constructor(props){
    super(props);
    
  }

  

  render(){
    return (
      <div className="form-body">
          {
              this.props.data.view == "signup" ?  
                (
                    <Grid>
                        {
                            // Display signup form
                        }
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>First Name</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Phone</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type="password"/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Confirm Password</ControlLabel>
                                    <FormControl type="password"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Button type="submit">Submit</Button>
                        </Row>
                    </Grid>
                ) : this.props.data.view == "login" ? (
                    <Grid>
                        {
                            // Display login form
                        }
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type="password"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Button type="submit">Submit</Button>
                        </Row>
                    </Grid>
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

export default FormBody;