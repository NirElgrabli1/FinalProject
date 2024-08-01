import { background, Box, Button, Center, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Tag, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styles from  './Product.css';
import Sidebar from '../components/Sidebar';
import Homepage from '../components/Homepage';
import { m } from "framer-motion";


const Header = ({title}) => <Box p={4} shadow='md'>
    <Heading ml='25'>{title}</Heading>
</Box>

function copy() { //copy function for button to copy the data
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }


function Product({location}) {
 const {state} = location;
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);
  
 const closeMobileMenu = () => setClick(false);

 let windowObjectReference;
 function openRequestedPopup() {
   windowObjectReference = window.open(state.urf);
 }
 //const handleClick = () => setClick(!click);
 //const closeMobileMenu = () => setClick(false);
 
if(!state){
     window.location = '/';
}
    return ( 
      <>

     <Box bgColor='#f2f1f1'>
        <Box  bgColor='#f2f1f1'>
         <div className='MenuHeadline'  >
         {state.title}
          <Link to='/Homepage' className='LogoToHomepage' onClick={closeMobileMenu}>
          <i class="fab fa-invision"></i> <i class="fas fa-tshirt"></i>MODEST IN STYLE <i class="fas fa-tshirt"></i>  <i class="fab fa-invision"></i>
            </Link>
            </div>
        </Box>
        <Box p={12} d="flex" alignItems="center">
        <Box ml={4}>
            <SimpleGrid spacing={4} columns={{base: 1,md: 5}}>
                <GridItem colSpan={2}>
                  <Center>
                  <Image w={96} src={state.image} />
                  </Center>
                </GridItem>
            <GridItem colSpan={3}>
             <Box >
             <Heading>Price: ${state.price}</Heading>
             <Tag mt={2}>{state.category}</Tag>    
             </Box>
             <Text mt={2}>{state.description} </Text>
             <HStack>
              <Box mt='20%'>
             <Button  onClick={openRequestedPopup} style={{width:300,height:40,borderColor:'black' ,color:'#f2f1f1', borderWidth:1,backgroundColor:'#471cf0'}}> BUY NOW !</Button>         
             <Button  style={{width:300,height:40,borderColor:'black' ,color:'#f2f1f1' , borderWidth:1,backgroundColor:'#9c279a'}}>
             <a href="/Product">BACK TO PRODCUTS</a>
              </Button>
              </Box>
             </HStack>
             </GridItem>
             </SimpleGrid>
        </Box>
        </Box>
    </Box>

    </>
    );
}
export default Product;
