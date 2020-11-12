import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Bikenav from '../Components/Bikenav';
import Footer from '../Components/Footer';

class SignUpForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone_no: '',
      password: ''
    }
  }
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('https://ionic-server-app.herokuapp.com/trainee/register', this.state)
      .then(response => {
        console.log(response)
        alert("Succesful Registered pls Login")
      })
      .catch(error => {
        alert("Error Pls check your Info!")
        console.log(error)
      })
  }
  render() {
    const { firstName, lastName , address , email , phone_no, password } = this.state
    return (
      <div className="signup">
        <Bikenav />
        <div className="container register">
      <div className={"row"}>
      <div className={"col-md-3 register-left"}>
        <img
          src={"https://media.giphy.com/media/84KY2W3Kw7LjjOw/giphy.gif"}
          alt={''}
        />
        <h3>Welcome</h3>
        <p>
          You are 30 seconds away from knowing all about any Bike.
          </p>
          <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
      </div>
        <div className="col-md-9 register-right">
         

            <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>
            <div className={"tab-content"} id={"myTabContent"}>
         <div
           className={"tab-pane fade show active"}
           id={"home"}
           role={"tabpanel"}
           aria-labelledby={"home-tab"}
         >
           <h3 className={"register-heading"}>Sign up as a Member</h3>
          <form onSubmit={this.submitHandler}>
          <div className={"row register-form"}>
             <div className={"col-md-6"}>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"First Name *"}
                   name={"firstName"}
                   value={firstName}
                   onChange={this.changeHandler}
                 />
               </div>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"Last Name *"}
                   name={"lastName"}
                   value={lastName}
                   onChange={this.changeHandler}
                 />
               </div>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"Address *"}
                   name={"address"}
                   value={address}
                   onChange={this.changeHandler}
                 />
               </div>
               
               </div>
               <div className={"col-md-6"}>
               <div className={"form-group"}>
                 <input
                   type={"email"}
                   className={"form-control"}
                   placeholder={"Your Email *"}
                   name={"email"}
                   value={email}
                   onChange={this.changeHandler}
                 />
               </div>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"Your Cell No *"}
                   name={"phone_no"}
                   value={phone_no}
                   onChange={this.changeHandler}
                 />
               </div>
               
               <div className={"form-group"}>
                 <input
                   type={"password"}
                   className={"form-control"}
                   placeholder={"Password *"}
                   name={"password"}
                   value={password}
                   onChange={this.changeHandler}
                 />
               </div>
               </div>
               <div className={"col-md-6"}>
               <button className="btn btn-primary " type="submit">SignUp</button>
               </div>
             
           </div>
           </form>
               
             
         </div>
       </div>
            </div>
      </div>
      </div>
      <Footer />
      </div>
      
      
     
    );
  }
}

export default SignUpForm;