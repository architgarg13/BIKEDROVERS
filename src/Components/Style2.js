import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Style2 extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>STREET BIKES</u></h1>
              </div>
              <div className="royal__bikes">
                  <div className="royal__row1" >
                  
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/honda-sp-125-drum20191114135405.jpg?q=85" />
                      <h3>Honda SP 125</h3>
                      <p>124 cc, 10.72 bhp, 117 kg</p>
                      <p className="royal__grey">Ex-showroom price</p>
                      <h3>₹ 77,782 onwards</h3>

                  </div>
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-meteor-350-fireball20201106124644.jpg?q=85" />
                      <h3>Royal Enfield Meteor 350</h3>
                      <p className="royal__grey">648 cc, 47 bhp, 198 kg</p>
                      <p>Ex-showroom, Chennai</p>
                      <h3>₹ 2,82,514 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__3 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/yamaha-mt-15-bs-vi20200204191522.jpg?q=85" />
                      <h3>Yamaha MT 15</h3>
                      <p className="royal__grey">155 cc, 18.23 bhp, 138 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>1,40,600 onwards</h3>

                  </div>
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
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
export default Style2;
