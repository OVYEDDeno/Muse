import React, { useState, useEffect } from "react";
import "../../styles/shop.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("highest"); // State for sort option

  useEffect(() => {
    // Example products data (replace with an API call or actual product data)
    setProducts([
      {
        id: 1,
        name: "Product 1",
        price: 30,
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        id: 2,
        name: "Product 2",
        price: 20,
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        id: 3,
        name: "Product 3",
        price: 10,
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        id: 4,
        name: "Product 4",
        price: 40,
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        id: 5,
        name: "Product 5",
        price: 25,
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        id: 6,
        name: "Product 6",
        price: 15,
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        id: 7,
        name: "Product 7",
        price: 35,
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        id: 8,
        name: "Product 8",
        price: 5,
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        id: 9,
        name: "Product 9",
        price: 50,
        imageUrl: "https://via.placeholder.com/300x200",
      },
    ]);
  }, []);

  // Function to handle sorting
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Sort products based on the selected option
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "highest") {
      return b.price - a.price; // Sort by highest price
    } else if (sortOption === "lowest") {
      return a.price - b.price; // Sort by lowest price
    }
    return 0; // No sorting
  });

  return (
    <div className="shop-container">
      {/* <h1 className="welcome-message">Welcome, ExampleUser1!</h1> */}
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        {/* <button className="search-button">Search</button> */}
      </div>
      <div className="filter-container">
        <label htmlFor="sort-options" className="filter-label">
          Sort By:
        </label>
        <select
          id="sort-options"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="highest">Price: Highest to Lowest</option>
          <option value="lowest">Price: Lowest to Highest</option>
          <option value="highest">Price Drops: Highest to Lowest</option>
          <option value="lowest">Price Drops: Lowest to Highest</option>
          <option value="highest">Best Selling: Highest to Lowest</option>
          <option value="lowest">Best Selling: Lowest to Highest</option>
          <option value="highest">Auctioning: Highest to Lowest</option>
          <option value="lowest">Auctioning: Lowest to Highest</option>
          <option value="highest">Value: Highest to Lowest</option>
          <option value="lowest">Value: Lowest to Highest</option>
          <option value="highest">Rated: Highest to Lowest</option>
          <option value="lowest">Rated: Lowest to Highest</option>
        </select>
        <button className="advanced-filter-btn">Advanced Filter Search</button>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>{" "}
            <p className="product-rating">${product.rating}</p>{" "}
            <div className="button-container">
              <button className="action-button">Bid</button>
              <button className="action-button">Buy</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <Link to="/">
          <button className="action-button">Sell</button>
        </Link>
        <Link to="/">
          <button className="action-button">Request</button>
        </Link>
      </div>
    </div>
  );
};
