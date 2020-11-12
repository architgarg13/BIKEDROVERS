import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Bikenav from './Bikenav';
import Footer from './Footer';
import './Home.css';
class Style extends Component {

    
    render() {
        return (
                <div>
                    <div>
                    <Bikenav />
                    </div>
                
                 <div className="style">
                   <div className="budget_heading">
                     <h1><u>RIDE STYLE</u></h1>
                   </div>
                   <div className="style_row1">
                     <Link to="/style1" >
                   <div class="card" >
                 <img class="card-img-top bg-dark" src="https://www.flaticon.com/svg/static/icons/svg/3721/3721631.svg"  />
                    <div class="card-body bg-dark">
                    <p class="card-header bg-light styleheader">Scooters</p>
                    </div>
                    </div>
                    </Link>
                    <Link to="/style2" >
                    <div class="card" >
                        <img class="card-img-top bg-dark" src="https://www.flaticon.com/svg/static/icons/svg/3003/3003708.svg" />
                    <div class="card-body bg-dark">
                    <p class="card-header bg-light styleheader ">Street</p>
                    </div>
                    </div>
                    </Link>
                    <Link to="/style3" >
                    <  div class="card" >
                     <img class="card-img-top bg-dark" src="https://www.flaticon.com/svg/static/icons/svg/2606/2606303.svg"  />
                     <div class="card-body bg-dark">
                      <p class="card-header bg-light styleheader">Cruiser</p>
                        </div>
                    </div>
                    </Link>
                    <Link to="/style4" >
                    <div class="card" >
                     <img class="card-img-top bg-dark" src="https://www.flaticon.com/svg/static/icons/svg/3149/3149029.svg"  />
                     <div class="card-body bg-dark">
                     <p class="card-header bg-light styleheader">Sports</p>
                    </div>
                    </div>
                    </Link>
                   </div>
                 
                   </div>
                   <div>
                   <Footer />
                       </div>  
                
                </div>
                  );
                }
} 
export default Style;