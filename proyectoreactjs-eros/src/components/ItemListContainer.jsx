import React from 'react';

function ItemListContainer() {
  const products = [
    { id: 1, name: 'Alimento para perros', price: 10.99 },
    { id: 2, name: 'Juguete para gatos', price: 5.99 },
    { id: 3, name: 'Alimento para gatos', price: 29.99 },
    { id: 4, name: 'Collar para perros', price: 7.99 },
  ];

  return (
    <div>
      <h2>Productos para mascotas</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
