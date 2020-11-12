import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Style4 extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>SPORTS BIKES</u></h1>
              </div>
              <div className="royal__bikes">
                  <div className="royal__row1" >
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/suzuki-gixxer-sf-standard--bs-vi20200304134712.jpg?q=85" />
                      <h3>Suzuki Gixxer SF</h3>
                      <p className="royal__grey">155 cc, 13.4 bhp, 148 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,28,675 onwards</h3>

                  </div>
                  <div className="royal__3 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/yamaha-mt-15-bs-vi20200204191522.jpg?q=85" />
                      <h3>Yamaha MT 15</h3>
                      <p className="royal__grey">155 cc, 18.23 bhp, 138 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>1,40,600 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-rocket-3-2020-r20190802133947.jpg?q=85" />
                      <h3>Triumph Rocket 3</h3>
                      <p className="royal__grey">2,458 cc, 165 bhp</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 18,00,000 onwards</h3>

                  </div>
                  <div className="royal__3 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/honda-hornet-20-standard20200827130131.jpg?q=85" />
                      <h3>Honda Hornet 2.0</h3>
                      <p className="royal__grey">184.4 cc, 17.03 bhp, 142 kg</p>
                      <p>Ex-showroom</p>
                      <h3>₹ 1,30,188 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Style4;
