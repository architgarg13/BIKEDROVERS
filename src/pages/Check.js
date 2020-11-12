import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Logout from './Logout';
import Home from '../Components/Home';
class Check extends Component {
    constructor(props) {
      super(props)
      const token = localStorage.getItem("token")
      let loggedIn = true
      if(token == null) {
        loggedIn = false
      }
      this.state = {
        loggedIn
       
      }
    
      console.log(token);
      console.log(loggedIn);
    }
  
  render(){
      if(this.state.loggedIn === false)
      {
        return <Redirect to="/" />
      }
      return(
        <div>
          <Home />
        <Logout></Logout></div>
          
      )

  }
}
export default Check;