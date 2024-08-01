import React from 'react';
import '../../App.css';
import Store from '../Store';
import CategoriesBar from '../CategoriesBar';
import Homepage from '../Homepage';
import Product from '../Product';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




function Procutsfile() {
  return (
    <>
       {/* <CategoriesBar /> */}
       <Route path="/Product"  exact component={(props) => ( <Store/>   )}
                />
             <Route path="/product/:id" 
              component={props => <Product {...props}/>}/>
    </>
  );
}

export default Procutsfile;