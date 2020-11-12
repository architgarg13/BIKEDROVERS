import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Classic extends Component {

    
    render() {
        return (<div>
          <Bikenav />
            <div className="classic">
                <div className="container classic__inner">
                <div className="classic__main">
                <div className="classic__first">
                    <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-classic-350-single-channel-abs--bs-vi20200303121804.jpg?q=85" />
                </div>
                <div className="classic__second">
                    <h3>Royal Enfield Classic 350</h3>
                    <h3>₹ 1,61,688 onwards</h3>
                    <p>Displacement:
                    </p>
                    <p>Kerb Weight:</p>
                    <p>Max Power:</p>
                    <p>Fuel Type:</p>
                    <p>Transmission:</p>
                </div>
                <div className="classic__third">
                    <h3>Version - BS VI</h3>
                    <p className="classic__third__first">346 cc</p>
                    <p>19.1 bhp</p>
                    <p>195 kg</p>
                    <p>Petrol</p>
                    <p>5 Speed Manual</p>
                </div>
                </div> 
                </div>
               
            </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Classic;
