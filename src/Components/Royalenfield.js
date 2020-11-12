import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './Home.css';
class Royalenfield extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>ROYAL ENFIELD</u></h1>
                <p>Royal Enfield is one of the oldest surviving motorcycle manufacturers in the world. Established in 1901, the iconic British manufacturer started off by manufacturing motorcycles, bicycles, lawnmowers, stationary engines and more popularly, weapons. To this day, Royal Enfield continues to use the motto ‘Made like a gun’, in memory of its legacy. Royal Enfield bikes are known for the class they exude as much as for their signature thump. Royal Enfield was acquired by Eicher Motors in 1994, which proved to be a pivotal role in the resurgence of the manufacturer. Although the company continues to make classic-styled and old-school motorcycles which are essentially modernised versions of the early Bullet models from the 1950s, the fortunes of Royal Enfield have turned and it is one of the fastest growing bike makers in the country. However, while the Classic set the company on a path of unprecedented growth, a few Royal Enfield models like the now-discontinued single-cylinder Continental GT had to make do with a muted response.</p>
              </div>
              <div className="royal__bikes">
                  <p className="royal__left">Royal Enfield bikes in India :</p>
                  <div className="royal__row1" >
                      
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                  <Link to="/classic">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-classic-350-single-channel-abs--bs-vi20200303121804.jpg?q=85" />
                      </Link>
                      <h3>Royal Enfield Classic 350</h3>
                      <p className="royal__grey">346 cc, 19.1 bhp, 195 kg</p>
                      <p>Ex-showroom, Chennai</p>
                      <h3>₹ 1,61,688 onwards</h3>

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
                  <div className="royal__3">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-bullet-350-ks--x--efi-bs-vi20200401130113.jpg?q=85" />
                      <h3>Royal Enfield Bullet 350</h3>
                      <p className="royal__grey">346 cc, 19.1 bhp, 186 kg</p>
                      <p>Ex-showroom, Chennai</p>
                      <h3>₹ 1,27,093 onwards</h3>

                  </div>
                  <div className="royal__4">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-himalayan-standard--bs-vi20200120132350.jpg?q=85" />
                      <h3>Royal Enfield Meteor 350</h3>
                      <p className="royal__grey">411 cc, 24.3 bhp, 199 kg</p>
                      <p>Ex-showroom, Chennai</p>
                      <h3>₹ 1,91,402 onwards</h3>

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
