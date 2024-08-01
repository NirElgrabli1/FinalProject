import React from 'react';
import '../../App.css';
import Store from '../Store';
import CategoriesBar from '../CategoriesBar';
import Homepage from '../Homepage';
import Product from '../Product';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Procutsfile from './Procutsfile';
import Sidebar from '../Sidebar';
import Footer from '../Footer';


function ProductPage() {
  return (
    <>
       {/* <Homepage /> */}
       <Sidebar />
       <Procutsfile />
       <Footer />

    </>
  );
}

export default ProductPage;