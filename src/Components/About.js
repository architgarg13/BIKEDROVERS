import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer';
import './Home.css';
class About extends Component {

    
    render() {
        return (
                <div>
                     <Bikenav />
                     <div className="about">
                        <div className="about_img">
                        <h1 className="animate__animated animate__heartBeat"><u>ABOUT US</u></h1>
                        <p>At Bike Drovers, we offer a wide range of two wheeler vehicle and their dealers information on your fingertips. If you're the type of person who wants to buy a two wheeler. our wide selection of motor vehicles makes us your clear choice. We are here with this multi-tasking platform in this pandemic times which keeps you and your family safe and also provides multiple information about your vehicle on this platform. Let us know what you need.</p>
                        </div>
                     </div>
                    <Footer />
                </div>
               
                  );
                }
} 
export default About;