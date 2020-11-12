import React, { Component } from 'react';
import Bikenav from './Bikenav';
import Footer from './Footer';
import './Home.css';
import Archit from './archit.jpeg'
import Aryan from './aryan.jpeg'
import Agg from './agg.jpeg'
import Arpan from './arpan.jpeg'
class Dealers extends Component {

    render() {
        return (
                <div className="">
                <Bikenav />
                <div className="team">
                    <div className="team_heading">
                    <h1 className="animate__animated animate__zoomInDown"><u>MEET THE TEAM</u></h1>
                    <p className="animate__animated animate__fadeInRightBig delay-2s">Who we are</p>
                    </div>
                    <div className="team_member">
                    <div class="card card1" >
                    <img class="card-img-top bg-dark  " src={Archit}  />
                    <h1 className="animate__animated animate__pulse animate__infinite">ARCHIT GARG</h1>
                    <h4>Frontend Developer</h4>
                    <div className="social_medias">
                           <a href="https://www.facebook.com/archit.garg.92102/"><i class="fab fa-facebook-square fa-lg fa-3x"></i>                </a>
                           <a href="https://www.instagram.com/archit_0308/">                     <i class="fab fa-instagram fa-lg fa-3x"></i></a>
                         
                           </div>
                   </div>
                   <div class="card card2" >
                    <img class="card-img-top bg-dark " src={Aryan}  />
                    <h1 className="animate__animated animate__pulse animate__infinite">ARYAN PATEL</h1>
                    <h4>UI/UX Designer</h4>
                    <div className="social_medias">
                           <a href="https://www.facebook.com/profile.php?id=100025156714468"><i class="fab fa-facebook-square fa-lg fa-3x"></i>                </a>
                           <a href="https://www.instagram.com/aryan.patel111/">                    <i class="fab fa-instagram fa-lg fa-3x"></i></a>
                        
                           </div>
                   </div>
                   <div class="card card3" >
                    <img class="card-img-top bg-dark" src={Agg}  />
                    <h1 className="animate__animated animate__pulse animate__infinite">ARYAN AGGARWAL</h1>
                    <h4>Content Creator and Backend</h4>
                    <div className="social_medias">
                           <a href="https://www.facebook.com/archit.garg.92102/"><i class="fab fa-facebook-square fa-lg fa-3x fa-lg fa-3x"></i>                </a>
                           <a href="">                     <i class="fab fa-instagram fa-lg fa-3x fa-lg fa-3x"></i></a>
                           </div>
                   </div>
                   <div class="card card4" >
                    <img class="card-img-top bg-dark" src={Arpan}  />
                    <h1 className="animate__animated animate__pulse animate__infinite">ARPAN MALIK</h1>
                    <h4>Backend Developer</h4>
                    <div className="social_medias">
                           <a href="https://www.facebook.com/arpan.malik.106"><i class="fab fa-facebook-square fa-lg fa-3x"></i>                </a>
                           <a href="https://www.instagram.com/malik_arpan_7/">                     <i class="fab fa-instagram fa-lg fa-3x"></i></a>
                           </div>
                   </div>


                    </div>
                </div>
                
                <Footer />
                </div>
                  );
                }
} 
export default Dealers;