import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Style1 extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>SCOOTERS</u></h1>
              </div>
              <div className="royal__bikes">
                  <div className="royal__row1" >
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/honda-activa-6g-standard20200115132249.jpg?q=85" />
                      <h3>Honda Activa 6G</h3>
                      <p className="royal__grey">109.51 cc, 7.68 bhp, 107 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 69,116 onwards</h3>

                  </div>
                  <div className="royal__4 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/yamaha-ray-zr-125-drum20200204202347.jpg?q=85" />
                      <h3>Yamaha Ray ZR 125</h3>
                      <p className="royal__grey"> 125 cc, 8.04 bhp, 99 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 71,610 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__3 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/suzuki-access-125-steel-wheel--drum--cbs-bs-vi20200106120649.jpg?q=85" />
                      <h3>Suzuki Access 125</h3>
                      <p className="royal__grey">124 cc, 8.6 bhp, 104 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 74,205 onwards</h3>

                  </div>
                  <div className="royal__4 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/hero-maestro-edge-110-drum-brake-alloy--vx20200909235228.jpg?q=85" />
                      <h3>Hero Maestro Edge 110</h3>
                      <p className="royal__grey">110.9 cc, 8 bhp, 112 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 64,850 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Style1;
