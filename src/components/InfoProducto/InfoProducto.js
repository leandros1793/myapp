import React from 'react';
import './infoProducto.css'

function InfoProducto() {
  return (
    <div className="product-info">
      <p><strong>Precio:</strong> <span className="product-price">$XX.XX</span></p>
      <p><strong>SKU:</strong> <span className="product-sku">SKU-XXXX</span></p>
      <p><strong>Cantidad Disponible:</strong> <span className="product-quantity">XX unidades</span></p>
    </div>
  );
}

export default InfoProducto;
