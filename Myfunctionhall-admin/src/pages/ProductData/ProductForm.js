import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onSave }) => {
    const [productName, setProductName] = useState('');
    const [categories, setCategories] = useState([]);

    const handleCategoryChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setCategories([...categories, value]);
        } else {
            setCategories(categories.filter(cat => cat !== value));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/products', {
                name: productName,
                categories: categories
            });
            onSave(response.data);
            setProductName('');
            setCategories([]);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </label>
                <div>
                    Categories:
                    <label>
                        Category A
                        <input type="checkbox" value="Category A" onChange={handleCategoryChange} />
                    </label>
                    <label>
                        Category B
                        <input type="checkbox" value="Category B" onChange={handleCategoryChange} />
                    </label>
                    {/* Add more category checkboxes as needed */}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProductForm;
