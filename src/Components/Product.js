/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import '../Product.css'
function Product({title,image,price,rating}) {
    return (
        <div className="product">
            <div className="product_Info">
    <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    
                    <p>🌟</p>
                    
    

                </div>
                </div> 
                <img src="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg" />
                
            <button>Add to Basket</button>
        </div>
    );
}

export default Product
