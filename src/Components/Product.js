import { ImageSearch } from '@material-ui/icons';
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import '../Product.css';
import { useStateValue } from './StateProvider';



function Product({id, title,image,price,rating}) {
    const [Basket, dispatch] =useStateValue() 
    
    const addToBasket = () => {
         //dispatch the item into data layer
         dispatch({
             type:'Add_To_Basket',
             item: {
                 id:id,
                 title:title,
                 image:image,
                 price:price,
                 rating:rating,
             }
         })
         
     }
    
    return (
        <div className="product">
            <div className="product_Info">
    <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i) =>
                     <p>🌟</p>)}
                   
                    
    

                </div>
                </div> 
             <img src={image} />
                
            <button onClick={addToBasket}> Add to Basket</button>
        </div>
    );
}

export default Product
