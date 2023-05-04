import React, { useState } from 'react';

function ProductForm(props) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  };

  const handleCancelClick = () => {
    props.onClose();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '50%', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ marginBottom: '20px' }}>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleInputChange} required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control" id="price" name="price" min="0" step="0.01" value={formData.price} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail URL</label>
            <input type="url" className="form-control" id="thumbnail" name="thumbnail" value={formData.thumbnail} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-secondary ml-2" onClick={handleCancelClick}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
