import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Bikenav from './Bikenav';
import Footer from './Footer';
import './Home.css';
class Budget extends Component {

    
    render() {
        return (
                <div>
                <Bikenav />
                 <div className="budget">
                   <div className="budget_heading">
                     <h1><u>BUDGET</u></h1>
                   </div>
                   <div className="budget_row1">
                     <Link to="/budget1" >
                   <div class="card text-white bg-dark mb-3" >
                <div class="card-header BUDGET">UNDER 1 LAKH</div>
                </div>
                </Link>
                <Link to="/budget2" >
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header BUDGET">1 - 1.5 LAKH</div>
                </div>
                </Link>
                <Link to="/budget3" >
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header BUDGET">1.5 - 2 LAKH</div>
                </div>
                </Link>
                <Link to="/budget4" >
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header BUDGET">OVER 2 LAKH</div>
                </div>
                </Link>
                   </div>
                 
                   </div>  
                <Footer />
                </div>
                  );
                }
} 
export default Budget;