import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './Home.css';
class Budget2 extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u> 1 - 1.5 LAKH </u></h1>
                <p>Are you planning on buying a bike under ₹ 1.5 lakh? Well, we know that budget is one of the most crucial things while buying a bike and with so many options available out there, it gets really difficult to find a good bike which suits your pocket. Hence, we have put together a complete list of best bikes under ₹ 1.5 lakh. Yamaha YZF R15 V3, Yamaha MT 15 and KTM 125 Duke are the 3 most popular bikes in this budget range. View the complete list of bikes with information regarding price, images, mileage, specifications, colors, reviews and much more for each of these bikes so that you get to choose the best bike under ₹ 1.5 lakh.</p>
              </div>
              <div className="royal__bikes">
                  <div className="royal__row1" >
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/hero-xtreme-160r-front-disc20200630184113.jpg?q=85" />
                      <h3>Hero Xtreme 160R</h3>
                      <p className="royal__grey">163 cc, 15 bhp, 138.5 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,02,600 onwards</h3>

                  </div>
                  <div className="royal__3 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/hero-xpulse-200-standard20200810151858.jpg?q=85" />
                      <h3>Hero Xpulse 200</h3>
                      <p className="royal__grey">199.6 cc, 17.8 bhp, 157 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,13,730 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__3">
                      <Link to="/classic" >
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-bullet-350-ks--x--efi-bs-vi20200401130113.jpg?q=85" />
                      </Link>
                      <h3>Royal Enfield Bullet 350</h3>
                      <p className="royal__grey">346 cc, 19.1 bhp, 186 kg</p>
                      <p>Ex-showroom, Chennai</p>
                      <h3>₹ 1,27,093 onwards</h3>

                  </div>
                  <div className="royal__2">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/suzuki-gixxer-sf-standard--bs-vi20200304134712.jpg?q=85" />
                      <h3>Suzuki Gixxer SF</h3>
                      <p className="royal__grey">155 cc, 13.4 bhp, 148 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,28,675 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Budget2;
