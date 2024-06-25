import { forwardRef,useImperativeHandle,useRef ,useContext} from 'react'
import { CartContext } from '../Store/ShoppingCartContext';
import {createPortal} from 'react-dom'
import React  from 'react'
import Cart from './Cart'



const CartModal = forwardRef(function CartModal({title},ref) {

  const {items} = useContext(CartContext);

  let Modal = useRef();

  useImperativeHandle(ref,()=>{
    return{
      open: ()=>{
        Modal.current.showModal();
      }
    }
  });
  let ModalActions = <button>Close</button>
  if(items.length > 0){
    ModalActions = (<><button>Close</button><button>Checkout</button></>) 
  }


  return (
    createPortal(<dialog id='modal' ref={Modal}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        
            {ModalActions}
         
      </form>
    </dialog>,document.getElementById('modal-root'))
  )
});

export default CartModal;
