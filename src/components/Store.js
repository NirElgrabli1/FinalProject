import { useRef } from "react";
import { useState ,useEffect} from "react";
import {Box, Button, Center, Flex, GridItem, Heading, Image, Input, SimpleGrid, Spacer, Stack, Tag , Spinner, position} from "@chakra-ui/react";
import Header from "./Header";
import axios from 'axios';
import { Link } from "react-router-dom";
import { alignProperty } from "@mui/material/styles/cssUtils";
import styles from './Store.css'

const StoreItem = ({title, price, image}) => {
    return <Box p={6} borderRadius='lg' borderWidth='1px' bgColor='transparent'  style={{height:'100%'}}>
        <Center>
        <Image src={image} w={72} />
        </Center>
        <Heading mt={4} noOfLines={2} size= "sm" fontWeight="normal">{title}
        </Heading>
        <Tag mt={4} bgColor='#f2f1f2'  style={{ borderWidth:1,borderColor:'#1e1e1e'}}>${price} </Tag>
    </Box>

}


function Store({}){
const[storeItem, SetStoreItem]=useState ([]);
const [filteredItems, setFilteredItems] = useState  ([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{
   // axios.get("https://fakestoreapi.com/products").then(({data}) => {
    //api.product.get(Check1api).then(({data}) => {
      setLoading(false);
      SetStoreItem(CheckApiReal);
      setFilteredItems(CheckApiReal);
    },[]);
//  },[]);
 const CheckApiReal = [{"id":1,"category":"dress","price":"179₪" ,"title":"midi dress with buttons", "description" : "midi dress with buttons","brand": "Fox" , "site": "TERMINAL X","urf": "https://www.terminalx.com/catalog/product/view/id/933845/s/z24067?color=8328&gclid=CjwKCAjw7IeUBhBbEiwADhiEMRbRmRP9nfGBYKqqvCw0XXVvTa9d-efXQzY58-hW5k_dAw_ndosp1xoC1C4QAvD_BwE", 'image': '/images/id1.jpg'},
 {"Id":2,"category":"dress","title":"midi dress" ,"price":"199₪" ,"description" : "Amalfi midi dress", "brand": "YANGA","site": "TERMINAL X","urf": "https://www.terminalx.com/Z260320006", 'image': '/images/id2.jpg'},
 {"Id":3,"category":"dress","price":"139.9₪" ,"title" : "midi dress ","description":"Cotton midi dress", "brand": "ZARA","site": "ZARA","urf": "https://www.zara.com/il/he/%D7%A9%D7%9E%D7%9C%D7%AA-midi-%D7%9E%D7%9B%D7%95%D7%AA%D7%A0%D7%94-p04174183.html?v1=176373085&v2=2026605", 'image': '/images/id3.jpg'},
 {"Id":4,"category":"skirt","price":"269.9₪" ,"title" : "Pencil skirt","description":"Pencil skirt", "brand": "ZARA","site": "ZARA","urf": "https://www.zara.com/il/he/%D7%97%D7%A6%D7%90%D7%99%D7%AA-%D7%A2%D7%A4%D7%A8%D7%95%D7%9F-%D7%91%D7%9E%D7%94%D7%93%D7%95%D7%A8%D7%94-%D7%9E%D7%95%D7%92%D7%91%D7%9C%D7%AA-p03487653.html?v1=174406183&v2=2025735", 'image': '/images/id4.jpg'},
 {"Id":5,"category":"skirt","price":"169.9₪" ,"title" : "Frau skirt with print", "brand": "ZARA","site": "ZARA","urf": "https://www.zara.com/il/he/%D7%97%D7%A6%D7%90%D7%99%D7%AA-%D7%A4%D7%A8%D7%90%D7%95-%D7%A2%D7%9D-%D7%94%D7%93%D7%A4%D7%A1-p00653055.html?v1=177677697&v2=2025735", 'image': '/images/id5.jpg'},
 {"Id":6,"category":"shirt","price":"199.9₪" ,"title" : "Wide linen shirt", "description": "Wide linen shirt", "brand": "ZARA","site": "ZARA","urf": "https://www.zara.com/il/he/%D7%97%D7%95%D7%9C%D7%A6%D7%AA-%D7%A4%D7%A9%D7%AA%D7%9F-%D7%A8%D7%97%D7%91%D7%94-p02731058.html?v1=155333314&v2=2025574", 'image': '/images/id6.jpg'},
 {"id":7,"category":"shirt","price":"199.9₪" ,"title" : "shirt with pockets","description": "Loose-fitting shirt with pockets", "brand": "ZARA", "site": "ZARA","urf": "https://www.zara.com/il/he/%D7%97%D7%95%D7%9C%D7%A6%D7%94-%D7%91%D7%92%D7%96%D7%A8%D7%94-%D7%A8%D7%A4%D7%95%D7%99%D7%94-%D7%A2%D7%9D-%D7%9B%D7%99%D7%A1%D7%99%D7%9D-p02143047.html?v1=158107685&v2=2025574", 'image': '/images/id7.jpg'},
 {"id":8,"category":"Blazer","price":"269.9₪" ,"title" : "Blazer with folded sleeves", "description": "Blazer with folded sleeves","brand": "ZARA", "site": "ZARA","urf": "https://www.zara.com/il/he/%D7%91%D7%9C%D7%99%D7%99%D7%96%D7%A8-%D7%A2%D7%9D-%D7%A9%D7%A8%D7%95%D7%95%D7%9C%D7%99%D7%9D-%D7%9E%D7%A7%D7%95%D7%A4%D7%9C%D7%99%D7%9D-p07570666.html?v1=177672638&v2=2025498", 'image': '/images/id8.jpg'},
 {"id":9,"category":"shirt","price":"140₪" ,"title" : "Haley shirt", "description": "Haley shirt buttoned with white print","brand": "ADDICT", "site": "ADDICT","urf": "https://addictonline.co.il/product/%d7%97%d7%95%d7%9c%d7%a6%d7%aa-%d7%94%d7%99%d7%99%d7%9c%d7%99-%d7%9e%d7%9b%d7%95%d7%a4%d7%aa%d7%a8%d7%aa-%d7%a4%d7%a8%d7%99%d7%a0%d7%98-%d7%9c%d7%91%d7%9f/", 'image': '/images/id9.jpg'},
 {"id":10,"category":"dress","price":"23.35€" ,"title" : "mini smock dress in ditsy floral", "description": "Daisy Street long sleeve mini smock dress in ditsy floral","brand": "ASOS", "site": "ASOS","urf": "https://www.asos.com/daisy-street/daisy-street-long-sleeve-mini-smock-dress-in-ditsy-floral/prd/200947548?acquisitionsource=whatsapp", 'image': '/images/id10.jpg'},
 {"id":11,"category":"dress","price":"69.99€" ,"title" : "Knit midi dress", "description": "Knit midi dress","brand": "ASOS", "site": "ASOS","urf": "https://www.asos.com/monki/monki-recycled-knit-midi-dress-in-off-white/prd/201351977?acquisitionsource=whatsapp", 'image': '/images/id11.jpg'},
 {"id":12,"category":"skirt","price":"450₪" ,"title" : "SOFI SKIRT", "description": "SOFI SKIRT","brand": "DROR KONTENTO", "site": "DROR KONTENTO","urf": "https://kontento-online.com/products/sofi-skirt-%D7%9E%D7%A0%D7%95%D7%9E%D7%A8%D7%AA?option1=S", 'image': '/images/id12.jpg'},
 {"id":13,"category":"skirt","price":"450₪" ,"title" : "SOFI SKIRT FLOWERS", "description": "SOFI SKIRT FLOWERS","brand": "DROR KONTENTO", "site": "DROR KONTENTO","urf": "https://kontento-online.com/products/sofi-skirt?option1=S", 'image': '/images/id13.jpg'},
 {"id":14,"category":"hat","price":"129₪" ,"title" : "Silk scarf", "description": "Handkerchief of a gray triangle turquoise silk scarf","brand": "Ortaldesign", "site": "https://www.ortaldesign.co.il/" , "urf": "https://www.ortaldesign.co.il/product/%D7%9E%D7%98%D7%A4%D7%97%D7%AA-%D7%A6%D7%A2%D7%99%D7%A3-%D7%9E%D7%A9%D7%99-%D7%98%D7%95%D7%A8%D7%A7%D7%99%D7%96-%D7%9E%D7%A9%D7%95%D7%9C%D7%A9%D7%99%D7%9D-%D7%90%D7%A4%D7%95", 'image': '/images/id14.jpg'},
 {"id":15,"category":"hat","price":"159₪" ,"title" : "Diamond scarf", "description": "Silver sequin diamond scarf handkerchief","brand": "Ortaldesign", "site": "https://www.ortaldesign.co.il/" , "urf": "https://www.ortaldesign.co.il/product/%D7%9E%D7%98%D7%A4%D7%97%D7%AA-%D7%A6%D7%A2%D7%99%D7%A3-%D7%99%D7%94%D7%9C%D7%95%D7%9D-%D7%9B%D7%A1%D7%A3-%D7%A4%D7%99%D7%99%D7%98%D7%99%D7%9D", 'image': '/images/id15.jpg'}
]
return (
     <Box bgColor='#f2f1f2' >

         {/* <Header title="Stor name"/> */}
         {loading ? 
         <Center mt={6}  >
         <Spinner />
         </Center> :
         <Box p={2}>
             <Box Center w="100%" style={{display:'flex',justifyContent:'center'}} >
             <Input style={{width:400, borderWidth:4}} onChange={(e) => {
             let f =storeItem.filter((item) =>
                  item.title.toLowerCase().includes(e.target.value.toLowerCase())
             );
             //console.log("f",f);
             setFilteredItems(f);
             
         }}
         
         
         placeholder="Search" mt={4} />
         </Box>

         <SimpleGrid columns={4} spacing={4} mt={4}  >
         {filteredItems.map((item)=> {
            return <GridItem style={{display:'flex'}}>
                <Link to={{
                    pathname:`/product/${item.id}`,
                    state: item,
                }}>
                <StoreItem {...item}/> 
                </Link>
                </GridItem>

          })}
         </SimpleGrid>
         </Box>
         }
     </Box>
    );
}

export default Store;