import React from 'react';
import products from './product';

const ItemList=()=>{
 
    return(
        products.map((p)=>{
        <div className='card'>
          <h1>Name : {p.name}</h1>
          <h2>Price : {p.price}</h2>
          <img src={p.image} alt='anyth' ></img>
        </div>
   }) )
}


export default ItemList