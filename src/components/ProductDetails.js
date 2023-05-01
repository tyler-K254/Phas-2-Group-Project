import React from 'react';

function ProductDetails({ product }) {
  return (
    <div className='card mb-3'>
      <div className='row g-0'>
      <div className='col-md-2'>
          
        </div>
        <div className='col-md-4'>
          <img src={product.thumbnail} alt={product.title} className='img-fluid' />
           <p className='card-text'>{product.description}</p>
        </div>
        <div className='col-md-6'>
          <div className='card-body'>
            <h5 className='card-title'>{product.title}</h5>
            <p className='card-text'>Category: {product.category}</p>
            <p className='card-text'>Quantity: {product.stock}</p>
            <p className='card-text'>Brand: {product.brand}</p>
            <p className='card-text'>Rating: {product.rating}</p>
            <p className='card-text'>Price: ${product.price.toFixed(2)}</p>
            <button className='btn btn-primary'>like</button>
          </div>
        </div>
      </div>
    </div>
  );    
}

export default ProductDetails;
