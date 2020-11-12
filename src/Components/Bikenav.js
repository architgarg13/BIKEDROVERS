import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
class Bikenav extends Component {
    constructor(props) {
        super(props)
        const token = sessionStorage.getItem("token")
        const person = sessionStorage.getItem("name")
        let loggedIn = true
        let name = person
        if(token == null ) {
          loggedIn = false
        }
        this.state = {
          loggedIn,
          name
         
        }
        console.log(loggedIn);
      }
    
    render() {
        if(this.state.loggedIn === false)
      {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark md-3">
                <a class="navbar-brand animate__animated animate__flip " href="#">BIKE DROVERS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse md-6" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/about' >About</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/product' >Products</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/dealers' >Dealers</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/team' >Meet The Team</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/contact' >Contact</Link>
                </li>
                
                <li class="nav-item">
                <Link  class="nav-link" to='/policy' >Policy</Link>
                </li>
                
                
                 <li class="nav-item">
                <Link  class="nav-link" to='/sign-in' >Signup/Login</Link>
                </li>
                </ul>
             </div>
                </nav>
                </div>

        )
      }
      if(this.state.loggedIn === true)
      {
        return (
                <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark md-3">
                <a class="navbar-brand animate__animated animate__flip " href="#">BIKE DROVERS</a>
                <p className="name animate__animated animate__backInRight animate__slower"> -WELCOME {this.state.name}</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse md-6" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/about' >About</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/product' >Products</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/dealers' >Dealers</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/team' >Meet The Team</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link" to='/contact' >Contact</Link>
                </li>
                
                <li class="nav-item">
                <Link  class="nav-link" to='/policy' >Policy</Link>
                </li>
                
                
                 <li class="nav-item">
                <Link  class="nav-link" to='/logout' >Logout</Link>
                </li>
                </ul>
             </div>
                </nav>
                </div>
                  );
        }
                }
} 
export default Bikenav;