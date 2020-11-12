import React, { Component } from 'react';
import './Home.css';
import Bikenav from './Bikenav';
import Footer from './Footer';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {  Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'
const containerStyle = {
    position: 'relative',
    bottom: '13rem',
    left: '5rem',  
    width: '74.4rem',
    height: '20rem',
  }
class Home extends Component {

    
    render() {
        return (
            <div>
                <Bikenav />
                <div class="welcome">
                    <div class="welcome__left">
                    <h1 className="animate__animated animate__backInLeft animate__slower">WELCOME TO THE BIKE DROVERS</h1>
                    <p>At Bike Drovers, we offer a wide range of two wheeler vehicle and their dealers information on your fingertips. If you're the type of person who wants to buy a two wheeler. our wide selection of motor vehicles makes us your clear choice. We are here with this multi-tasking platform in this pandemic times which keeps you and your family safe and also provides multiple information about your vehicle on this platform. Let us know what you need.</p>
                    </div>
                    <div class="welcome__right">
                    <img className="animate__animated animate__backInRight animate__slower" src="https://static.wixstatic.com/media/11062b_d23bd9e11278448ea0d3cd918fdb31da~mv2_d_5616_3744_s_4_2.jpg/v1/fit/w_924,h_520/11062b_d23bd9e11278448ea0d3cd918fdb31da~mv2_d_5616_3744_s_4_2.jpg"  />
                    </div>
                    {/*welcome*/}
                </div>
                <div className="img_selector">
                    <h1><u>PRODUCT SELECTION</u></h1>
                    <p>What We Carry...</p>
                </div>
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
            </div>  </div>
            </Link>
            <Link to="/style">
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
                <div className="corousel">
                  <h1 className="corousel__head"><u>NEWS</u></h1>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/51225/kawasaki-ninja-650-action2.jpeg?wm=2&q=75"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="corousel__text">Hero Xtreme 200S BS6 available in three colour options in India</h3>
      <p className="corousel__text">Hero Motocorp recently launched the Xtreme 200S BS6 in India priced at Rs 1.15 lakh (ex-showroom). And the motorcycle is being offered in a choice of three colour options.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/51244/honda-cb1000r-right-side-view2.jpeg?q=75"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="corousel__text">2021 Honda CB1000R unveiled</h3>
      <p className="corousel__text">As part of the model year update, the CB1000R gets slight tweaks to its styling like the redesigned headlamp bezel which is slightly angular and comes with a fly-screen like cover for the instrument display. Honda has also revised the styling of the radiator and side plates and fitted the 2021 model with w-spoke cast-aluminum wheels.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/51238/hero-xtreme-200s-right-front-three-quarter1.jpeg?wm=2&q=75"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="corousel__text">Hero Xtreme 200S BS6: Top 5 highlights</h3>
      <p className="corousel__text">Hero MotoCorp has launched the BS6-compliant model of the only fully-faired offering in its portfolio, the Xtreme 200S. In case you’re planning to get home the motorcycle this Diwali (or anytime soon), here are five things you should know about it. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </div>
                
                <div class="map">
                    <div className="contact_info">
                    <div class="contact_info_left">
                    <h1><u>Contact Us</u></h1>
                    <p>27th KM Milestone</p>
                    <p>Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh</p>
                    <p>bikedrovers13@gmail.com</p>
                    <p>123-456-789</p>
                    </div>
                    <div class="contact_info_right">
                    <img src="https://static.wixstatic.com/media/11062b_0fdfc233f90b4d258058bb722d1ab73a~mv2_d_4513_3019_s_4_2.jpg/v1/fit/w_924,h_520/11062b_0fdfc233f90b4d258058bb722d1ab73a~mv2_d_4513_3019_s_4_2.jpg"  />
                   
                    </div>
                    </div>
                    
                    <Map containerStyle={ containerStyle } google={ this.props.google } initialCenter={{
                    lat: 28.6771,
                    lng: 77.5002
                    }} zoom={14}>
                    <Marker onClick={this.onMarkerClick}
                    name={'AKGEC'} />
                   <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                    </Map>
                
                
                    {/*map*/}
                </div>
                <Footer />
                
            </div>
            
        );
    }
} 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAKFrtRK6DaDjxjcJWqAj-P0cEhOmOds28")
})(Home)