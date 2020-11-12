import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
import { Link } from 'react-router-dom'
class Budget3 extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>1.5 - 2 LAKH</u></h1>
                <p>Are you planning on buying a bike under ₹ 2 lakh? Well, we know that budget is one of the most crucial things while buying a bike and with so many options available out there, it gets really difficult to find a good bike which suits your pocket. Hence, we have put together a complete list of best bikes under ₹ 2 lakh. Royal Enfield Meteor 350, Royal Enfield Himalayan and Jawa Perak are the 3 most popular bikes in this budget range. View the complete list of bikes with information regarding price, images, mileage, specifications, colors, reviews and much more for each of these bikes so that you get to choose the best bike under ₹ 2 lakh.</p>
              </div>
              <div className="royal__bikes">
                  <div className="royal__row1" >
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                      <Link to="/classic" >
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-classic-350-single-channel-abs--bs-vi20200303121804.jpg?q=85" />
                      </Link>
                      <h3>Royal Enfield Classic 350</h3>
                      <p className="royal__grey">346 cc, 19.1 bhp, 195 kg</p>
                      <p>Ex-showroom, Chennai</p>
                      <h3>₹ 1,61,688 onwards</h3>

                  </div>
                  <div className="royal__4 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-himalayan-standard--bs-vi20200120132350.jpg?q=85" />
                      <h3>Royal Enfield Meteor 350</h3>
                      <p className="royal__grey">411 cc, 24.3 bhp, 199 kg</p>
                      <p>Ex-showroom, Chennai</p>
                      <h3>₹ 1,91,402 onwards</h3>

                  </div>
                 
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__2">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/yamaha-yzf-r15-v3-dual-channel-abs--bs-vi20200109152444.jpg?q=85" />
                      <h3>Yamaha YZF R15 V3</h3>
                      <p className="royal__grey">155 cc, 18.37 bhp, 142 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,49,239 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Budget3;
