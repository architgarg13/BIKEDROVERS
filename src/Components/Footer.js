import React, { Component } from 'react';
import { NavLink ,Link } from 'react-router-dom'
import './Home.css';
class Footer extends Component {

    
    render() {
        return (<div>
            <footer className="bg-footer">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-2">
                           <div className="grid-4">
                               <h3>Join us on</h3>
                           </div>
                           <div className="social_media">
                           <a href="https://www.facebook.com/archit.garg.92102/"><i class="fab fa-facebook-square fa-lg fa-3x"></i>                </a>
                           <a href="">                     <i class="fab fa-twitter-square fa-lg fa-3x"></i></a>
                           </div>
                           </div>
                           
                           <div className="col-lg-2 grid-2">
                               <p>Company</p>
                               <ul>
                                   <li classname="footer_links"><NavLink  to='/policy' >Our Policy</NavLink></li>
                                   <li classname="footer_links"><NavLink  to='/contact' >Contact Us</NavLink></li>
                               </ul>
                           </div>
                           <div className="col-md-3 grid-3">
                               <ul>
                                   <li><NavLink classname="footer_links" to='/about' >About Us</NavLink></li>
                                   <li>Advertise with us</li>
                               </ul>
                           </div>
                           <div className="col-md-3 grid-5" >
                               <h1>Download our app</h1>
                               <div className="app_icon">
                                   <a>
                                   <img alt="Google play App Icon" src="https://imgd.aeplcdn.com/0x0/bw/static/icons/logo/google-play.svg" height="34" width="114" />
                                   </a>
                                   <a>
                                   <img alt="IOS App Icon" src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2" height="34" width="100" />
                                   </a>
                               </div>
                           </div>
                       </div>

                   </div>
                   <div>
                      <div className="company">
                      <div className="company_logo animate__animated animate__fadeInLeftBig animate__slower animate__infinite	infinite"><img src="https://www.flaticon.com/svg/static/icons/svg/640/640164.svg" /></div>
                      <div className="company_name">
                          <h1>BIKE DROVERS</h1>
                      </div> 
                      </div>
                   </div>
                   <div className="base">
                       <div className="base_left">
                       <p>Copyright BikeDrovers India</p> 
                       </div>
                       <div>
                           <Link to="/agr">Visitor Agreement and Privacy Policy</Link>
                       </div>
                   </div>
                </footer>
        </div>
                
                  );
                }
} 
export default Footer;