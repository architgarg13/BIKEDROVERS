import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Bikenav from './Bikenav';
import Footer from './Footer';
import './Home.css';
class Product extends Component {

    
    render() {
        return (
            <div>
            <Bikenav />
            <div className="choose">
                    <Link to="/brand">
                    <div className="choose_a">
                    <div class="choose_a_left">
                    <h1><u>BRAND</u></h1>
                    <p>Brand Value is something on which most of the customers rely upon.So Brand value is the sum of prestige, desirability and trustworthiness resulting from a company’s past performance in several areas: product quality, professionalism, customer service and corporate social responsibility. A company that excels in these departments may be considered as having a strong brand, while one that flounders in them is seen as having a weak brand.So here at Bike Dovers we offer thousands of brands to choose from as costumer satisfaction is our main aim.</p>
                    </div>
                    <div class="choose_a_right">
                    <img src="https://static.wixstatic.com/media/11062b_f7db07743336493ea79b9a0126f87b2a~mv2_d_6720_4480_s_4_2.jpg/v1/fit/w_924,h_520/11062b_f7db07743336493ea79b9a0126f87b2a~mv2_d_6720_4480_s_4_2.jpg"  />
                    </div>
                    </div>
                    </Link>
                    <Link to="/budget">
                    <div className="choose_b">
                    <div class="choose_b_left">
                    <h1><u>BUDGET</u></h1>
                    <p>Budget is something that mostly every costumer consider before making a deal that's why this is one of the critical element in automobile industry. Transparent pricing means among other things what customers see online and elsewhere is what they get at the dealership. Transparency reflects openness and consistency across marketing and sales channels. Here at Bike Drovers we always provide honest and transparent pricing of the products such that the costumers makes best of the deals.</p>
                    </div>
                    <div class="choose_b_right">
                    <img src="https://static.wixstatic.com/media/11062b_e914f76c7c604356a139184d95c6e8b0~mv2_d_5616_3744_s_4_2.jpg/v1/fit/w_924,h_520/11062b_e914f76c7c604356a139184d95c6e8b0~mv2_d_5616_3744_s_4_2.jpg"  />
                    </div>
                    
                    </div>
                    </Link>
                    <Link to="/style" >
                    <div className="choose_c">
                    <div class="choose_c_left">
                    <h1><u>RIDE STYLE</u></h1>
                    <p>The motorcycle riders have different riding styles which change according to the road conditions. Some riders prefer a sporty ride while others prefer a comfortable ride. The modern motorcycles are capable to deliver diverse performance range according to the rider’s demand. These motorcycles offer riding modes thru’ which the rider can choose the motorcycle’s riding dynamics.</p>
                    </div>
                    <div class="choose_c_right">
                    <img src="https://static.wixstatic.com/media/11062b_721c6f0af8044324b159a53b793b0d4a~mv2_d_6720_4480_s_4_2.jpg/v1/fit/w_924,h_520/11062b_721c6f0af8044324b159a53b793b0d4a~mv2_d_6720_4480_s_4_2.jpg"  />
                    </div>

                    </div>
                    </Link>
                    {/*choose*/}
                </div>
                <Footer />
                </div>
                  );
                }
} 
export default Product;