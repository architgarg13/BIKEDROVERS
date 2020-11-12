import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import './Home.css';
class Dealers extends Component {

    render() {
        return (
                <div className="">
                <Bikenav />
                <div className="Dealers_h1">
                    <p><u>DEALERS</u></p>
                    </div>
                <div className="Dealers">
                    
                     <Link to="/our" >
                    <div className="dealers_our">
                    <div class="card dealer" >
                 <img class="card-img-top bg-dark" src="https://www.flaticon.com/svg/static/icons/svg/2698/2698321.svg"  />
                    <div class="card-body bg-dark">
                    <p class="card-header bg-light styleheader">OUR DEALERS</p>
                    </div>
                    </div>

                    </div>
                    </Link>
                    <Link to="/future" >
                    <div className="dealers_regi">
                    <div class="card dealer" >
                 <img class="card-img-top bg-dark" src="https://www.flaticon.com/svg/static/icons/svg/993/993715.svg"  />
                    <div class="card-body bg-dark">
                    <p class="card-header bg-light styleheader">FUTURE DEALERS </p>
                    </div>
                    </div>
                    
                    </div>
                    </Link>
                </div>
                <Footer />
                </div>
                  );
                }
} 
export default Dealers;