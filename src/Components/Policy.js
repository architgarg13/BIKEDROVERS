import React, { Component } from 'react';
import './Policy.css';
import Bikenav from './Bikenav'
import Footer from './Footer';
class Policy extends Component {
    
    render() {
        return (
            <div>
                 <Bikenav />
             <div className="about">
                        <div className="middle-content">
                        <h1 className="display-1"><u>Our Policy Info</u></h1>
                        <p className="display-3">We develop Bike Drovers with one principle in mind-providing an inevitable experience for our users. We work hard to provide every important information about bike brands and through this platform we are trying to get customers and dealers under same platform. Our platform provides you the best deals of the bikes you want. </p>
                        </div>
                     </div>
                     <Footer />
            </div>
           
        )           
    }
}  


export default Policy;


  
  