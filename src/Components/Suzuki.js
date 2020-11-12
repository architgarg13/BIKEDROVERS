import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Suzuki extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>SUZUKI</u></h1>
                <p>Suzuki bike price starts from Rs. 71,122. Suzuki offers 7 models in India with most popular bikes being Suzuki Access 125, Suzuki Gixxer SF and Suzuki Gixxer. Most expensive Suzuki bike is Gixxer SF 250 which is priced at Rs. 1,76,598.

Suzuki Motor Corporation (SMC), a global giant of motorcycle manufacturing is headquartered in Japan. It holds major stake in its Indian subsidiary, Suzuki Motorcycle India Private Limited (SMIL). SMIL was set up after Suzuki's re-entry into the Indian two-wheeler market after it severed ties with partner TVS in 2000-01. Suzuki was then the technology provider in the former joint venture company TVS Suzuki.</p>
              </div>
              <div className="royal__bikes">
                  <p className="royal__left">Suzuki  bikes in India :</p>
                  <div className="royal__row1" >
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/suzuki-access-125-steel-wheel--drum--cbs-bs-vi20200106120649.jpg?q=85" />
                      <h3>Suzuki Access 125</h3>
                      <p className="royal__grey">124 cc, 8.6 bhp, 104 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 74,205 onwards</h3>

                  </div>
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/suzuki-gixxer-sf-standard--bs-vi20200304134712.jpg?q=85" />
                      <h3>Suzuki Gixxer SF</h3>
                      <p className="royal__grey">155 cc, 13.4 bhp, 148 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,28,675 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__3">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/suzuki-gixxer-single-channel-abs--bs-vi20200304134349.jpg?q=85" />
                      <h3>Suzuki Gixxer</h3>
                      <p className="royal__grey">155 cc, 13.4 bhp, 141 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,18,205 onwards</h3>

                  </div>
                  <div className="royal__4">
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
export default Suzuki;
