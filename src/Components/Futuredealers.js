import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import './Home.css';
class Futuredealers extends Component {

    render() {
        return (
                <div className="">
                <Bikenav />
                <div className="container">
               <h1 class="contact-head animate__animated animate__zoomInDown">Dealer<span class="contact-head-me"> Contact</span></h1>
      <p>We at bike drovers help every dealer to grow more..</p>
      <p>Fill below form if you want to be our part.</p>
      <div class="row ">
        <div class="col col-lg-4 animate__animated animate__fadeInLeft animate__delay-1s ">
          <i class="icon fas fa-mobile-alt fa-4x"></i>
          <h2>Call us on</h2>
          <h6>+123-456-789</h6>
        </div>
        <div class="col col-lg-4 animate__animated animate__fadeInDown animate__delay-1s">
          <i class="icon far fa-envelope fa-4x"></i>
          <h2>Email us at</h2>
          <h6>bikedrovers13@gmail.com</h6>
        </div>
        <div class="col col-lg-4 animate__animated animate__fadeInRight animate__delay-1s">
          <i class="icon far fa-map fa-4x"></i>
          <h2>Visit our office</h2>
          <h6>27th km milestone,delhi-meerut highway ,ghaziabad</h6>
        </div>
      </div>
      <form action="mailto:piscesdeepak93@gmail.com" method="post" enctype="multipart/form-data" name="EmailForm">
      <div class="inputrow row">
          <div class="firstcol col col-lg-6">
            <input type="text" placeholder="Your Name*" />
          </div>
          <div class="firstcol col col-lg-6">
            <input type="email" placeholder="Your Email*" />
          </div>
          <div class="secondcol col col-sm-12">
            <input type="text" placeholder="Subject*" />
          </div>
          <div class="thirdcol col col-sm-12">
            <textarea name="name" rows="8" cols="80" placeholder="Your message*"></textarea>
          </div>
          <div class="button">
              <a href="mailto:architgarg13@gmail.com"><button type="button" class="btn btn-outline-primary btn-lg ">Send message</button></a>

          </div>

        </div>

      </form>
      
            </div>              
                <Footer />
                </div>
                  );
                }
} 
export default Futuredealers;