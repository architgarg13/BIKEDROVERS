import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Budget1 extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>UNDER 1 LAKH</u></h1>
                <p>Are you planning on buying a bike under ₹ 1 lakh? Well, we know that budget is one of the most crucial things while buying a bike and with so many options available out there, it gets really difficult to find a good bike which suits your pocket. Hence, we have put together a complete list of best bikes under ₹ 1 lakh. Bajaj Chetak, Bajaj Pulsar 150 and TVS Apache RTR 160 are the 3 most popular bikes in this budget range. View the complete list of bikes with information regarding price, images, mileage, specifications, colors, reviews and much more for each of these bikes so that you get to choose the best bike under ₹ 1 lakh.</p>
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
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/honda-sp-125-drum20191114135405.jpg?q=85" />
                      <h3>Honda SP 125</h3>
                      <p>124 cc, 10.72 bhp, 117 kg</p>
                      <p className="royal__grey">Ex-showroom price</p>
                      <h3>₹ 77,782 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__3">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/suzuki-access-125-steel-wheel--drum--cbs-bs-vi20200106120649.jpg?q=85" />
                      <h3>Suzuki Access 125</h3>
                      <p className="royal__grey">124 cc, 8.6 bhp, 104 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 74,205 onwards</h3>

                  </div>
                  <div className="royal__4">
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
export default Budget1;
