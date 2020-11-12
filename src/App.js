import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Check from './pages/Check';
import Home from './Components/Home';
import Policy from './Components/Policy';
import Agreement from './Components/Agreement';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Brandmenu from './Components/Brandmenu';
import Budget from './Components/Budget';
import Style from './Components/Style';
import Dealers from './Components/Dealers';
import Team from './Components/Team';
import Futuredealers from './Components/Futuredealers';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import Royalenfield from './Components/Royalenfield';
import Suzuki from './Components/Suzuki';
import Ktm from './Components/Ktm';
import Yamaha from './Components/Yamaha';
import Honda from './Components/Honda';
import Hero from './Components/Hero';
import Budget1 from './Components/Budget1';
import Budget2 from './Components/Budget2';
import Budget3 from './Components/Budget3';
import Budget4 from './Components/Budget4';
import Style1 from './Components/Style1';
import Style2 from './Components/Style2';
import Style3 from './Components/Style3';
import Style4 from './Components/Style4';
import Classic from './Components/Classic';
import Triump from './Components/Triump';
import Logout from './pages/Logout';
import Ourdealer from './Components/Ourdealer';
function App() {
  return (
          
          <Router basename="/react-auth-ui">
                <Route exact path="/" component={Home}>
                </Route>
                <Route path="/policy" component={Policy}>
                </Route>
                <Route path="/sign-in" component={SignInForm}>
                </Route>
                <Route path="/sign-up" component={SignUpForm}>
                </Route>
                <Route path="/Check" component={Check}>
                </Route>
                <Route path="/agr" component={Agreement}>
                </Route>
                <Route path="/about" component={About}>
                </Route>
                <Route path="/product" component={Product}>
                </Route>
                <Route path="/contact" component={Contact}>
                </Route>
                <Route path="/brand" component={Brandmenu}>
                </Route>
                <Route path="/budget" component={Budget}>
                </Route>
                <Route path="/style" component={Style}>
                </Route>
                <Route path="/dealers" component={Dealers}>
                </Route>
                <Route path="/team" component={Team}>
                </Route>
                <Route path="/future" component={Futuredealers}>
                </Route>
                <Route path="/royal" component={Royalenfield}>
                </Route>
                <Route path="/hero" component={Hero}>
                </Route>
                <Route path="/honda" component={Honda}>
                </Route>
                <Route path="/yamaha" component={Yamaha}>
                </Route>
                <Route path="/ktm" component={Ktm}>
                </Route>
                <Route path="/suzuki" component={Suzuki}>
                </Route>
                <Route path="/budget1" component={Budget1}>
                </Route>
                <Route path="/budget2" component={Budget2}>
                </Route>
                <Route path="/budget3" component={Budget3}>
                </Route>
                <Route path="/budget4" component={Budget4}>
                </Route>
                <Route path="/Style1" component={Style1}>
                </Route>
                <Route path="/Style2" component={Style2}>
                </Route>
                <Route path="/Style3" component={Style3}>
                </Route>
                <Route path="/Style4" component={Style4}>
                </Route>
                <Route path="/classic" component={Classic}>
                </Route>
                <Route path="/triump" component={Triump}>
                </Route>
                <Route path="/logout" component={Logout}>
                </Route>
                <Route path="/our" component={Ourdealer}>
                </Route>
      
                
        </Router>
     
  );
}

export default App;