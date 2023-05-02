import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className='container-fluid'>
      <h1>Products</h1>
      {selectedProduct ?
        <ProductDetails product={selectedProduct} />
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
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <button onClick={() => handleProductClick(product)}>
                    {product.title}
                  </button>
                </td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td><img src={product.thumbnail} alt={product.title} width="100" /></td>
                <td>
                  <button className="btn btn-primary mr-2">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}

export default Products;
