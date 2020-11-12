import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Bikenav from './Bikenav';
import Footer from './Footer';
import './Home.css';
class Brandmenu extends Component {

    
    render() {
        return (
                <div>
                    <Bikenav />
                    <div class="abc">
                    <div className="brand_heading"><h1>THE BRANDS WE SELL</h1></div>
                    <div className="abc_firstrow">
                    <Link to="/royal" >
                    <div class="card" >
                    <img class="card-img-top" src="https://imgd.aeplcdn.com/110x61/bw/makes/royal-enfield20200508193112.jpg"  />
                    <br className="linebreak"></br>
                    <div class="card-body">
                    <h5 class="card-footer">Royal Enfield</h5>
                    </div>
                    </div>
                    </Link>
                    <Link to="/hero" >
                    <div class="card" >
                    <img class="card-img-top" src="https://imgd.aeplcdn.com/110x61/bw/makes/hero20200508192826.jpg"  />
                    <div class="card-body">
                    <h5 class="card-footer">Hero</h5>
                    </div>
                    </div>
                    </Link>
                    <Link to="/honda">
                    <div class="card" >
                    <img class="card-img-top" src="https://imgd.aeplcdn.com/110x61/bw/makes/honda20200511152343.jpg"  />
                    <div class="card-body">
                    <h5 class="card-footer">Honda</h5>
                    </div>
                    </div>
                    </Link>
                    </div>
                    <div className="abc_secondrow">
                      <Link to="/yamaha" >
                    <div class="card" >
                    <img class="card-img-top" src="https://imgd.aeplcdn.com/110x61/bw/makes/yamaha20200508193220.jpg"  />
                    <div class="card-body">
                    <h5 class="card-footer">Yamaha</h5>
                    </div>
                    </div>
                    </Link>
                    <Link to="/suzuki" >
                    <div class="card" >
                    <img class="card-img-top" src="https://imgd.aeplcdn.com/110x61/bw/makes/suzuki20200508193118.jpg"  />
                    <div class="card-body">
                    <h5 class="card-footer">Suzuki</h5>
                    </div>
                    </div>
                    </Link>
                    <Link to="/ktm" >
                    <div class="card" >
                    <img class="card-img-top" src="https://imgd.aeplcdn.com/110x61/bw/makes/triumph20200508193154.jpg"  />
                    <div class="card-body">
                    <h5 class="card-footer">TRIUMPH</h5>
                    </div>
                    </div>
                    </Link>
                    </div>
                    {/*brand*/}
                </div>
                <Footer />
                </div>
                  );
                }
} 
export default Brandmenu;