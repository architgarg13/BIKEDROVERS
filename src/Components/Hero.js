import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Royalenfield extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>HERO</u></h1>
                <p>Hero MotoCorp is world’s largest two-wheeler maker, with headquarters in New Delhi. With more than 40 per cent share in the Indian two-wheeler market, Hero MotoCorp is India’s number one two-wheeler company. Founded by Brijmohan Lall Munjal, Hero first started with a joint venture with Honda. However, this successful alliance ended in 2010 and both became a big competitor to each other.

Hero MotoCorp has four manufacturing facilities located at Dharuhera, Neemrana and Gurgaon in Haryana and at Haridwar in Uttarakhand. These plants together have a production capacity of 7.6 million 2-wheelers per year. The company's research & development facility is located in the outskirts of Jaipur, spread across 249 acres. With over 6,000 dealerships across India, Hero MotoCorp has managed to penetrate most of the rural areas of the country along with metros.</p>
              </div>
              <div className="royal__bikes">
                  <p className="royal__left">Hero bikes in India :</p>
                  <div className="royal__row1" >
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/hero-splendor-plus-kick-alloy--bs-vi20200214191452.jpg?q=85" />
                      <h3>Hero Splendor Plus</h3>
                      <p className="royal__grey">97.2 cc, 7.91 bhp, 110 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 61,020 onwards</h3>

                  </div>
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/hero-xtreme-160r-front-disc20200630184113.jpg?q=85" />
                      <h3>Hero Xtreme 160R</h3>
                      <p className="royal__grey">163 cc, 15 bhp, 138.5 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,02,600 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__3">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/hero-xpulse-200-standard20200810151858.jpg?q=85" />
                      <h3>Hero Xpulse 200</h3>
                      <p className="royal__grey">199.6 cc, 17.8 bhp, 157 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,13,730 onwards</h3>

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
export default Royalenfield;
