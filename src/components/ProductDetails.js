import React from 'react';

function ProductDetails({ product, isEditing, onInputChange, onUpdateClick, onCancelClick }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onInputChange(name, value);
    
  };

  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>
          <img src={product.thumbnail} alt={product.title} className='img-fluid' />
          <p className='card-text'>
            {isEditing ? (
              <input type='text' className='form-control' name='description' value={product.description} onChange={handleInputChange} />
            ) : (
              product.description
            )}
          </p>
        </div>
        <div className='col-md-6'>
          <div className='card-body'>
            <h5 className='card-title'>
              {isEditing ? (
                <input type='text' className='form-control' name='title' value={product.title} onChange={handleInputChange} />
              ) : (
                product.title
              )}
            </h5>
            <p className='card-text'>
              Category: <strong>{product.category}</strong>
            </p>
            <p className='card-text'>
              Quantity: <strong>{product.stock}</strong>
            </p>
            <p className='card-text'>
              Brand: <strong>{product.brand}</strong>
            </p>
            <p className='card-text'>
              Rating: <strong>{product.rating}</strong>
            </p>
            <p className='card-text'>
              Price:{' '}
              {isEditing ? (
                <input type='number' className='form-control' name='price' value={product.price} onChange={handleInputChange} />
              ) : (
                <strong>${product.price}</strong>
              )}
            </p>
            <p className='card-text'>
              Image:{' '}
              {isEditing ? (
                <input type='text' className='form-control' name='thumbnail' value={product.thumbnail} onChange={handleInputChange} />
              ) : (
                <img src={product.thumbnail} alt={product.title} width='100' />
              )}
            </p>
            {isEditing ? (
              <>
                <button className='btn btn-success' onClick={onUpdateClick}>
                  Save
                </button>
                <button className='btn btn-danger ml-2' onClick={onCancelClick}>
                  Cancel
                </button>
              </>
            ) : (
              <button className='btn btn-primary'>like</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;