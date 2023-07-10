import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

function CartWidget({ itemCount }) {
  const handleClick = () => {
   
    console.log('¡Se hizo clic en el carrito!');
  };

  return (
    <div className="cart-widget" onClick={handleClick}>
      <RiShoppingCartLine className="cart-icon" />
      <span>{itemCount}</span>
    </div>
  );
}

export default CartWidget;
