// src/TopProducts.js
import React, { useState } from 'react';
import { products } from './products';

const TopProducts = () => {
  const [topN, setTopN] = useState(5); // Default to top 5 products
  const [sortBy, setSortBy] = useState('rating'); // Default sort by rating

  // Function to sort products by selected criteria
  const sortProducts = (criteria) => {
    const sortedProducts = [...products].sort((a, b) => b[criteria] - a[criteria]);
    return sortedProducts.slice(0, topN);
  };

  // Handle change in number of top products
  const handleTopNChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setTopN(value);
  };

  // Handle change in sort criteria
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  // Get top N products based on selected criteria
  const topProducts = sortProducts(sortBy);

  return (
    <div>
      <h2>Top {topN} Products</h2>
      <div>
        <label>Number of products to display:</label>
        <input type="number" value={topN} onChange={handleTopNChange} />
      </div>
      <div>
        <label>Sort by:</label>
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="rating">Rating</option>
          <option value="sales">Sales</option>
        </select>
      </div>
      <ul>
        {topProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {sortBy}: {product[sortBy]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
