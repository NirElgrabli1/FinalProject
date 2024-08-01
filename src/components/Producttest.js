import { background, Box, Button, Center, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Tag, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Product.css';
import './Cards.css';
import CardItem from './CardItem.js';


const Header = ({title}) => <Box p={4} shadow='md'>
    <Heading>{title}</Heading>
</Box>

function copy() { //copy function for button to copy the data
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }



function Producttest(location) {
 const {state} = location;
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);

if(!state){
     window.location = '/';
}
    return (
      <div className='cards'>
        <h1>Check out these EPIC Designs!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src= {state.urf}
                text='Stunning and fashionable dresses'
                label='Dresses'
                path='/Dress'
              />
            </ul>
          </div>
        </div>
      </div>
    );
    }
  
  export default Producttest;