import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import ItemListContainer from './ItemListContainer';

function Navbar() {
  const itemCount = 5;
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/perros">Perros</a></li>
        <li><a href="/gatos">Gatos</a></li>
        <li><CartWidget itemCount={itemCount} /></li>
        <li><ItemListContainer /></li> {/* Agrega el componente ItemListContainer aquí */}
      </ul>
    </nav>
  );
}

export default Navbar;

