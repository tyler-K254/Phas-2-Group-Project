import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setEditedProduct(null);
  };

  const handleDeleteClick = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      // Remove the deleted product from the state
      setProducts(products.filter(product => product.id !== id));
    })
    .catch(error => console.log(error));
  };

  const handleEditClick = (product) => {
    setSelectedProduct(null);
    setEditedProduct(product);
  };

  const handleUpdateClick = () => {
    fetch(`https://dummyjson.com/products/${editedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedProduct)
    })
    .then(response => response.json())
    .then(data => {
      // Replace the old product with the updated one in the state
      const updatedProducts = products.map(product => {
        if (product.id === editedProduct.id) {
          return editedProduct;
        } else {
          return product;
        }
      });
      setProducts(updatedProducts);
      setSelectedProduct(editedProduct);
      setEditedProduct(null);
    })
    .catch(error => console.log(error));
  };

  const handleCancelClick = () => {
    setSelectedProduct(editedProduct);
    setEditedProduct(null);
  };

  return (
    <div className='container-fluid'>
      <h1>Products</h1>
      {selectedProduct || editedProduct ?
        <ProductDetails 
          product={editedProduct || selectedProduct}
          isEditing={!!editedProduct}
          onInputChange={(key, value) => setEditedProduct({...editedProduct, [key]: value})}
          onUpdateClick={handleUpdateClick}
          onCancelClick={handleCancelClick}
        />
        :
        <table className="table table-striped table-bordered table-md">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>

            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <button onClick={() => handleProductClick(product)}>
                    {product.title}
                  </button>
                </td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td><img src={product.thumbnail} alt={product.title} width="100" /></td>
                <td>
                  <button className="btn btn-primary mr-2" onClick={() => handleEditClick(product)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDeleteClick(product.id)}>Delete</button>
                </td>
              </tr>
            ))}

       </table>
      }
    </div>
  );
}

export default Products;
