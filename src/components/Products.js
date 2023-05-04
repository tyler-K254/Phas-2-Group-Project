import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import ProductsForm from './ProductsForm';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [editedProduct, setEditedProduct] = useState(null);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);


  useEffect(() => {
    fetch('https://dummyjson.com/products')
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


  const handleAddProductClick = () => {
    setIsFormVisible(true);
  };

  const handleProductFormClose = () => {
    setIsFormVisible(false);
  };

  const handleProductFormSubmit = (newProduct) => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        setProducts([...products, data]);
        setIsFormVisible(false);
      });
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  //DELET

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

      <button className="btn btn-primary mb-3" onClick={handleAddProductClick}>Add Product</button>
      {isFormVisible &&
        <ProductsForm onClose={handleProductFormClose} onSubmit={handleProductFormSubmit} />
      }
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


            {products.map((product) => (

          <tbody>
            {currentProducts.map((product) => (

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

                  <button className="btn btn-primary mr-2">Edit</button>

                  <button className="btn btn-danger" onClick={() => handleDeleteClick(product.id)}>Delete</button>
                </td>
              </tr>
            ))}

       </table>
      }
      <div className="pagination">
        <ul className="pagination justify-content-center">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(pageNumber => (
            <li key={pageNumber} className={currentPage === pageNumber + 1 ? 'page-item active' : 'page-item'}>
              <button className="page-link" onClick={() => paginate(pageNumber + 1)}>{pageNumber + 1}</button>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}
export default Products;