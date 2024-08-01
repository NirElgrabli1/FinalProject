import Store from "./components/Store";
import { useState ,useEffect} from "react";
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Product from "./components/Product";
import Producttest from "./components/Producttest";
import Homepage from "./components/Homepage";
import './App.css';
import Home from "./components/pages/Home";
import ProductPage from "./components/pages/ProductPage";

import Dress from "./components/Categories/dress";
import Blazer from "./components/Categories/Blazer";
import Shirt from "./components/Categories/Shirt";
import Skirt from "./components/Categories/Skirt";
import Headdress from "./components/Categories/Headdress";
import AboutUs from "./components/AboutUs.js";
import WillBeUpSoon from "./components/pages/WillBeUpSoon";
import {Login } from "./Login";
import SignUp  from "./Signup/Signup";






function App() {
  

return (

        <Router >
            <Switch>
              <Route path='/Homepage' exact component={Home}>
              </Route>

              <Route   path='/AboutUs'   exact component={AboutUs}>       
              </Route>

              <Route   path='/Login'   exact component={Login}>       
              </Route>
              <Route   path='/Signup'   exact component={SignUp}>       
              </Route>
              
              <Route   path='/SoonWillBe'   exact component={WillBeUpSoon}>       
              </Route>

             <Route path="/"  exact component={Home}/>
             <Route path="/Product/dress" exact component={Dress}/>
             <Route path="/Product/Blazer" exact component={Blazer}/>
             <Route path="/Product/Shirt" exact component={Shirt}/>
             <Route path="/Product/Skirt" exact component={Skirt}/>
             <Route path="/Product/Headdress" exact component={Headdress}/>

             <Route path="/product/:id" 
              component={props => <Product {...props}/>}/>
               <Route path="/Product">
               {/* <Homepage /> */}
                <Switch>
                   <Route path='/Product' exact component={ProductPage} /> 
                 </Switch>
              </Route>
              <Route path="/product/:id" 
              component={props => <Product {...props}/>}/>
              <Route>404 page</Route>
            </Switch>
        </Router>
      );
}


export default App;
