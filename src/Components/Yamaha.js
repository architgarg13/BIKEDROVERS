import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
class Yamaha extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>YAMAHA</u></h1>
                <p>Yamaha bike price starts from Rs. 68,762. Yamaha offers 6 models in India with most popular bikes being Yamaha FZ S FI, Yamaha YZF R15 V3 and Yamaha MT 15. Most expensive Yamaha bike is YZF R15 V3 which is priced at Rs. 1,46,380.

Yamaha derived its name from Torakusu Yamaha, the company’s founder. It started off by manufacturing Western musical instruments in Japan back 1887, and it wasn’t till 1955 that the company’s motorcycle division was set up. While Yamaha still manufactures musical instruments, with the distinction of being regarded as one of the leading names in the field, it also forms one fourth of the big four Japanese manufacturers in the two-wheeler industry.
</p>
              </div>
              <div className="royal__bikes">
                  <p className="royal__left"> Yamaha bikes in India :</p>
                  <div className="royal__row1" >
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/yamaha-fz-s-v3-single-channel-abs--bs-vi20191111114812.jpg?q=85" />
                      <h3>Yamaha FZ S FI</h3>
                      <p className="royal__grey"> 149 cc, 12.2 bhp, 137 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,05,439 onwards</h3>

                  </div>
                  <div className="royal__2 animate__animated animate__fadeInLeft animate__slower">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/yamaha-yzf-r15-v3-dual-channel-abs--bs-vi20200109152444.jpg?q=85" />
                      <h3>Yamaha YZF R15 V3</h3>
                      <p className="royal__grey">155 cc, 18.37 bhp, 142 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 1,49,239 onwards</h3>

                  </div>
                  </div>
                  <div className="royal__row2" >
                  <div className="royal__3">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/yamaha-mt-15-bs-vi20200204191522.jpg?q=85" />
                      <h3>Yamaha MT 15</h3>
                      <p className="royal__grey">155 cc, 18.23 bhp, 138 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>1,40,600 onwards</h3>

                  </div>
                  <div className="royal__4">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/yamaha-ray-zr-125-drum20200204202347.jpg?q=85" />
                      <h3>Yamaha Ray ZR 125</h3>
                      <p className="royal__grey"> 125 cc, 8.04 bhp, 99 kg</p>
                      <p>Ex-showroom price</p>
                      <h3>₹ 71,610 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Yamaha;
