import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer'
import './Home.css';
import { Link } from 'react-router-dom'
class Ktm extends Component {

    
    render() {
        return (<div className="royal1">
          <Bikenav />
          <div className="container royal">
              <div className="royal__heading">
                <h1 className="animate__animated animate__zoomInUp animate__slower"><u>TRIUMPH</u></h1>
                <p>Triumph Motorcycles Limited is the largest British motorcycle manufacturer. Established in 1984, businessman John Bloor bought the rights to the original Triumph Engineering brand and started production in a brand new facility at Hinckley, Leicestershire. Triumph is one of the few manufacturers whose products span a wide category of motorcycles. From a streetfighter to a cruiser and a litre-class superbike to an adventure tourer, Triumph makes them all. Triumph is also a very accomplished and respected name in the world of motorsports with their bikes participating and winning various competitions and setting land-speed records.
 
 Founded in 1883 by German Siegfried Bettmann, Triumph originally started by producing bicycles in Coventry, England. In 1898 Triumph decided to extend production at Coventry to include motorcycles, and by 1902 the company had produced its first motorcycle — a bicycle fitted with a 2.2hp Minerva engine christened as the No.1. </p>
              </div>
              <div className="royal__bikes">
                  <p className="royal__left">Triumph bikes in India :</p>
                  <div className="royal__row1" >
                  <div className="royal__1 animate__animated animate__fadeInLeft animate__slower">
                      <Link to="/triump">
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
                  <div className="royal__3">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-tiger-900-gt20200619130902.jpg?q=85" />
                      <h3>Triumph Tiger 900</h3>
                      <p className="royal__grey">888 cc, 93.9 bhp</p>
                      <p>Ex-showroom pric</p>
                      <h3>₹ 13,70,000 onwards</h3>

                  </div>
                  <div className="royal__4">
                      <img src="https://imgd.aeplcdn.com/393x221/bw/models/triumph-street-triple-r-standard20200804163527.jpg?q=85" />
                      <h3>Triumph Street Triple R</h3>
                      <p className="royal__grey">765 cc, 114.7 bhp</p>
                      <p>Ex-showroom pric</p>
                      <h3>₹ 8,84,000 onwards</h3>

                  </div>
                  </div>
                  
              </div>
          </div>
          <Footer />
        </div>
            
                  );
                }
} 
export default Ktm;
