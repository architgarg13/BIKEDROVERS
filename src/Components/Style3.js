import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './Home.css';
class Style3 extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>CRUISER BIKES</u></h1>
              </div>
              <div className="royal__bikes">
                  <div className="royal__row1" >
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                      <Link to="/triump" >
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-rocket-3-2020-r20190802133947.jpg?q=85" />
                      </Link>
                      <h3>Triumph Rocket 3</h3>
                      <p className="royal__grey">2,458 cc, 165 bhp</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 18,00,000 onwards</h3>

                  </div>
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-street-twin-standard20200815140329.jpg?q=85" />
                      <h3>Triumph Street Twin</h3>
                      <p className="royal__grey">900 cc, 64.1 bhp</p>
                      <p>Ex-showroom pric</p>
                      <h3>₹ 7,45,000 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__3 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-tiger-900-gt20200619130902.jpg?q=85" />
                      <h3>Triumph Tiger 900</h3>
                      <p className="royal__grey">888 cc, 93.9 bhp</p>
                      <p>Ex-showroom pric</p>
                      <h3>₹ 13,70,000 onwards</h3>

                  </div>
                  <div className="royal__4 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/suzuki-intruder-150-standard--bs-vi20200320182536.jpg?q=85" />
                      <h3>Suzuki Intruder 150</h3>
                      <p className="royal__grey">₹ 1,26,947 onwards</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,26,947 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Style3;
