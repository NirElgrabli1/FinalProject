import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function Cards() {

  return (

    <div className='cards'>
      <h1>Check out these EPIC Designs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Dress.png'
              text='Stunning and fashionable dresses'
              label='Dresses'
              path='/Product/Dress'
              
            />
            <CardItem
              src='images/imgT4.jpg'
              text='Headdress in all sorts of shades and types'
              label='Headdress'
              path='/Product/Headdress'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tshirtT1.jpg'
              text='Shirts and sweaters of the highest quality'
              label='Shirts'
              path='Product/Shirt'
            />
            <CardItem
              src='/images/id8.jpg'
              text='Comfortable shoes and suitable for everything with a very wide range'
              label='Blazer'
              path='Product/Blazer'
            />
            <CardItem
              src='images/squirtT1.jfif'
              text='Skirts in all kinds of colors and types from all places'
              label='Skirt'
              path='Product/Skirt'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;