



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AuthFormLong from './Components/AuthFormLong.jsx';
class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        Hello world!
        <AuthFormLong/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
