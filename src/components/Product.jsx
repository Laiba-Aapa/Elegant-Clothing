import React,{useContext} from 'react'
import { CartContext } from '../Store/ShoppingCartContext'



export default function Product({id , image, title,price,description }) {

  const {onAddToCart} =useContext(CartContext);
  return (
    <article className='product'>
    <img src={image} alt="product img" />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={()=>onAddToCart(id)}>Add To Cart</button>
        </p>
      </div>
      
    </article>
  )
}
