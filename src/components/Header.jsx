import { useRef,useContext } from 'react';
import { CartContext } from '../Store/ShoppingCartContext';
import React from 'react'
import CartModal from './CartModal';


export default function Header() {
  const {items} = useContext(CartContext)

  let cartQuantity = items.length;

  let Modal = useRef();

  function handleOpenCartClick(){
    Modal.current.open()
  }
  return (
    <>
      <CartModal title="Your Cart" ref={Modal}/>
      <header id="main-header">
        <div id="main-title">
          <img src='logo.png' alt="Elegant Model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  )
}
