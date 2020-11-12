
import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './Home.css';
class Budget4 extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>OVER 2 LAKH</u></h1>
                <p>Are you planning on buying a bike above ₹ 2 lakh? Well, we know that budget is one of the most crucial things while buying a bike and with so many options available out there, it gets really difficult to find a good bike which suits your pocket. Hence, we have put together a complete list of best bikes above ₹ 2 lakh. Ducati Multistrada 950, BMW S 1000 XR and BMW R18 are the 3 most popular bikes in this budget range. View the complete list of bikes with information regarding price, images, mileage, specifications, colors, reviews and much more for each of these bikes so that you get to choose the best bike above ₹ 2 lakh.</p>
              </div>
              <div className="royal__bikes">
                  <div className="royal__row1" >
                  <div className="royal__3 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-tiger-900-gt20200619130902.jpg?q=85" />
                      <h3>Triumph Tiger 900</h3>
                      <p className="royal__grey">888 cc, 93.9 bhp</p>
                      <p>Ex-showroom pric</p>
                      <h3>₹ 13,70,000 onwards</h3>

                  </div>
                  <div className="royal__4 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-street-triple-r-standard20200804163527.jpg?q=85" />
                      <h3>Triumph Street Triple R</h3>
                      <p className="royal__grey">765 cc, 114.7 bhp</p>
                      <p>Ex-showroom pric</p>
                      <h3>₹ 8,84,000 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__2">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-meteor-350-fireball20201106124644.jpg?q=85" />
                      <h3>Royal Enfield Meteor 350</h3>
                      <p className="royal__grey">648 cc, 47 bhp, 198 kg</p>
                      <p>Ex-showroom, Chennai</p>
                      <h3>₹ 2,82,514 onwards</h3>

                  </div>
                  <div className="royal__1">
                      <Link to="/triump">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-rocket-3-2020-r20190802133947.jpg?q=85" />
                      </Link>
                      <h3>Triumph Rocket 3</h3>
                      <p className="royal__grey">2,458 cc, 165 bhp</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 18,00,000 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Budget4;
