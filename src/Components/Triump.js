import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Triump extends Component {

    
    render() {
        return (<div>
          <Bikenav />
            <div className="classic">
                <div className="container classic__inner">
                <div className="classic__main">
                <div className="classic__first">
                    <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-rocket-3-2020-r20190802133947.jpg?q=85" />
                </div>
                <div className="classic__second">
                    <h3>Triumph Rocket 3</h3>
                    <h3>₹ 20,10,180 onwards</h3>
                    <p>Displacement:
                    </p>
                    <p>Max Power:</p>
                    <p>Kerb Weight:</p>
                    <p>Fuel Type:</p>
                    <p>Transmission:</p>
                </div>
                <div className="classic__third">
                    <h3>Version - BS VI</h3>
                    <p className="classic__third__first">2,458 cc</p>
                    <p>165 bhp</p>
                    <p>880 kg</p>
                    <p>Petrol</p>
                    <p>6 Speed Manual</p>
                </div>
                </div> 
                </div>
               
            </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Triump;
