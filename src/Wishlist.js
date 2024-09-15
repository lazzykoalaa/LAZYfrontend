import React, { useState } from 'react';
import './Wishlist.css';

const Wishlist = ({ items }) => {
  const [sortOption, setSortOption] = useState(''); // To store the selected sort option
  const [selectedType, setSelectedType] = useState(''); // To store the selected product type

  // Function to sort items
  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  // Function to filter items based on product type
  const handleFilter = (e) => {
    setSelectedType(e.target.value);
  };

  // Apply sorting
  const sortedItems = [...items].sort((a, b) => {
    if (sortOption === 'priceLowToHigh') {
      return a.Price - b.Price;
    } else if (sortOption === 'priceHighToLow') {
      return b.Price - a.Price;
    } else if (sortOption === 'alphaAsc') {
      return a.Product_Group_ID.localeCompare(b.Product_Group_ID);
    } else if (sortOption === 'alphaDesc') {
      return b.Product_Group_ID.localeCompare(a.Product_Group_ID);
    }
    return 0;
  });

  // Apply filtering
  const filteredItems = selectedType
    ? sortedItems.filter((item) => item.Product_Group_ID === selectedType)
    : sortedItems;

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <img src="/main-logo.png" alt="logo" className="wishlist-logo" />
        <h1>My Wishlist</h1>
        

      </div>
      <div className="sort-filter-container">
    <div className="sort-container">
        <label>Sort by: </label>
        <select onChange={handleSort} value={sortOption}>
            <option value="">Select</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="alphaAsc">Product Type: A to Z</option>
            <option value="alphaDesc">Product Type: Z to A</option>
        </select>
    </div>
    
    <div className="filter-container">
        <label>Filter by Product Type: </label>
        <select onChange={handleFilter} value={selectedType}>
            <option value="">All</option>
            <option value="gl_toy">Toys</option>
            <option value="gl_wireless">Mobiles</option>
            <option value="gl_electronics">Audio Accessories</option>
            {/* Add more options as needed */}
        </select>
    </div>
</div>

      <div className="wishlist-grid">
        {filteredItems.map((item, index) => (
          <WishlistItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

// Item component
const WishlistItem = ({ item }) => {
  return (
    <div className="wishlist-item">
      <img src={item["Image URL"]} alt={item.Title} className="product-image" />
      <h3 className="item-title">{item.Title}</h3>
      <p className="item-price">₹{item.Price}</p>
      <a href={item.URL} className="item-link" target="_blank" rel="noopener noreferrer">
        View on Amazon
      </a>
    </div>
  );
};

export default Wishlist;
