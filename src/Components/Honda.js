import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Honda extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>HONDA</u></h1>
                <p>Honda Motorcycle & Scooter India is a 100 per cent Indian subsidiary of Honda Motor Company. Founded in 1999, Honda was the erstwhile partner of Hero MotoCorp before both companies parted ways.

Honda motorcycles are known for their handling, innovation and reliability. The company deserves credit for pioneering the scooter segment in India through the Activa range of scooters. Honda manufactures a wide range of two-wheelers in India via its four production facilities – Manesar in Gurgaon, Tapukara in Rajasthan, Narsapura in Karnataka and the new Vithalapur unit in Gujarat. Other than manufacturing bikes and scooters, the Japanese manufacturer also assembles its big bike – the CBR 650F in India.</p>
              </div>
              <div className="royal__bikes">
                  <p className="royal__left">Honda bikes in India :</p>
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
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/honda-hornet-20-standard20200827130131.jpg?q=85" />
                      <h3>Honda Hornet 2.0</h3>
                      <p className="royal__grey">184.4 cc, 17.03 bhp, 142 kg</p>
                      <p>Ex-showroom</p>
                      <h3>₹ 1,30,188 onwards</h3>

                  </div>
                  <div className="royal__4">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/honda-xblade-single-disc20200707193207.jpg?q=85" />
                      <h3>Honda X-Blade</h3>
                      <p className="royal__grey">162.71 cc, 13.67 bhp, 143 kg</p>
                      <p>Ex-showroom</p>
                      <h3>₹ 1,06,499 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Honda;
