import React from 'react';
import HeaderProducto from './components/Header/Header';
import DescripcionProducto from './components/Producto/Producto';
import InfoProducto from './components/InfoProducto/InfoProducto';

function DetalleProducto() {
  return (
    <div className="product-detail">
      <HeaderProducto />
      <DescripcionProducto />
      <InfoProducto />
    </div>
  );
}

export default DetalleProducto;
