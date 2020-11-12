import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Bikenav from './Bikenav';
import Footer from './Footer';
import './Home.css';
class Ourdealer extends Component {

    
    render() {
        return (
                <div>
                    <div>
                    <Bikenav />
                    </div>
                
                 <div className="our">
                   <div className="budget_heading">
                     <h1><u>OUR DEALERS</u></h1>
                   </div>
                   <div className="our__dealer">
                       <div className="our__dealer1">
                       <ul>
                           <li className="our__list">
                               <h2 >Essaar Motors, Kotla Mubarakpur, Delhi</h2>
                               <h5>Authorized Royal Enfield dealer in Delhi</h5>
                               <p> No 135, Main Road, South Extension, Arjun Nagar, Defence Colony , Delhi - 110003</p>
                               <p>essaar.defcol@gmail.com</p>
                           </li>
                           <li className="our__list">
                               <h2>Nagappa Hero, Sembiam, Chennai</h2>
                               <h5> Authorized Hero dealer in Chennai</h5>
                               <p>27,Near Madhavaram High Road (Opposite to simson 2nd gate) , Chennai - 600011
</p>
                               <p>snmpl.chennai@heromotocorp.biz</p>
                           </li>
                           <li className="our__list">
                               <h2>Radha Hero, Tambaram H O, Chennai</h2>
                               <h5>Authorized Hero dealer in Chennai</h5>
                               <p>N0- 37, G.S.T. Road , Chennai - 600045</p>
                               <p>radhaautomobiles@heromotocorp.biz</p>
                           </li>
                       </ul>
                       </div>
                       <div className="our__dealer2">
                       <li className="our__list">
                               <h2>ESSAAR MOTORS, Jhandewalan, Delhi</h2>
                               <h5>Authorized Royal Enfield dealer in Delhi</h5>
                               <p> No 2E/11, Jhandewalan Extension, Metro Station Gate 2 , Delhi - 110055</p>
                               <p>essaarmotors@yahoo.com</p>
                           </li>
                           <li className="our__list">
                               <h2>Maansarovar Honda, Manikandan Nagar, Chennai</h2>
                               <h5>Authorized Honda dealer in Chennai</h5>
                               <p> No 60 & 61, Medavakkam Main Road ,Veeramani Nagar , Chennai - 600129</p>
                               <p>digitallead@maansarovarhonda.co.in</p>
                           </li>
                           <li className="our__list">
                               <h2>JSP Honda Aminjikarai, Aminjikarai, Chennai</h2>
                               <h5> Authorized Honda dealer in Chennai</h5>
                               <p> Plot No 8, Door no old 14 New 28, Pulla Reddy Avenue, Shenoy Nagar , Chennai - 600030</p>
                               <p>jspaminjikarai@yahoo.com</p>
                           </li>
                       </div>
                       
                   </div>
                   </div>

                   <Footer />
                
                </div>
                  );
                }
} 
export default Ourdealer;