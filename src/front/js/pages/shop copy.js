import React, { useState, useEffect } from "react";
import "../../styles/shop.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("highest");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Example products data (replace with an API call or actual product data)
    setProducts([
        {
          id: 1,
          name: "Product 1",
          price: 30,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
          description: "This is a detailed description of Product 1. It includes all the necessary information about the product's features, benefits, and specifications."
        },
        {
          id: 2,
          name: "Product 2",
          price: 30,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          description: "This is a detailed description of Product 2. It includes all the necessary information about the product's features, benefits, and specifications."
        },
        {
          id: 3,
          name: "Product 3",
          price: 30,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          description: "This is a detailed description of Product 3. It includes all the necessary information about the product's features, benefits, and specifications."
        },
        {
          id: 4,
          name: "Product 4",
          price: 30,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          description: "This is a detailed description of Product 4. It includes all the necessary information about the product's features, benefits, and specifications."
        },
        {
          id: 5,
          name: "Product 5",
          price: 30,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          description: "This is a detailed description of Product 5. It includes all the necessary information about the product's features, benefits, and specifications."
        },
        {
          id: 6,
          name: "Product 6",
          price: 30,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          description: "This is a detailed description of Product 6. It includes all the necessary information about the product's features, benefits, and specifications."
        },
        {
          id: 7,
          name: "Product 7",
          price: 60,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          description: "This is a detailed description of Product 7. It includes all the necessary information about the product's features, benefits, and specifications."
        },
        {
          id: 8,
          name: "Product 8",
          price: 50,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          description: "This is a detailed description of Product 8. It includes all the necessary information about the product's features, benefits, and specifications."
        },
        {
          id: 9,
          name: "Product 9",
          price: 40,
          imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/331/877/large/alexandre-grynagier-ima10-beecopter-des03-validmarvel-by-mrprops-d724zaj.jpg?1529020192",
          rating: 4.6,
          ratingCount: 107210,
          boughtLastMonth: 40000,
          endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          description: "This is a detailed description of Product 9. It includes all the necessary information about the product's features, benefits, and specifications."
        } 
      // ... (other products with similar properties)
    ]);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "highest") {
      return b.price - a.price;
    } else if (sortOption === "lowest") {
      return a.price - b.price;
    }
    return 0;
  });

  const formatNumber = (num) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num;
  };

  const CountdownTimer = ({ endTime }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(endTime));
      }, 1000);

      return () => clearInterval(timer);
    }, [endTime]);

    function calculateTimeLeft(endTime) {
      const difference = +new Date(endTime) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    }

    const addLeadingZero = (num) => {
      return num < 10 ? `0${num}` : num;
    };

    return (
      <div className="countdown-timer">
        Ends in: {addLeadingZero(timeLeft.days)}:{addLeadingZero(timeLeft.hours)}:
        {addLeadingZero(timeLeft.minutes)}:{addLeadingZero(timeLeft.seconds)}
      </div>
    );
  };

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{product.name}</h2>
            <button className="close-button" onClick={onClose}>&times;</button>
          </div>
          <div className="modal-body">
            <img src={product.imageUrl} alt={product.name} className="modal-image" />
            <p className="modal-price">${product.price}</p>
            <div className="modal-rating">
              <span className="stars">{product.rating} ★★★★☆</span>
              <span className="rating-count">({formatNumber(product.ratingCount)} ratings)</span>
            </div>
            <p className="modal-bought">{formatNumber(product.boughtLastMonth)}+ bought in past month</p>
            <div className="modal-countdown">
              <CountdownTimer endTime={product.endTime} />
            </div>
            <p className="modal-description">{product.description}</p>
          </div>
          <div className="modal-footer">
            <div className="button-container">
              <button className="action-button">Bid</button>
              <button className="action-button">+ Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="shop-container">
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <h1>ANY PRODUCT, ANY SERVICE AT THE HIGHEST VALUE GUARANTEE!!!</h1>
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
          {/* ... (other sorting options) */}
        </select>
        <button className="advanced-filter-btn">Advanced Filter Search</button>
        <Link to="/">
          <button className="advanced-filter-btn">Sell</button>
        </Link>
        <Link to="/">
          <button className="cart-btn">Request</button>
        </Link>
        <button className="cart-btn">Cart</button>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <div className="product-rating">
              <span className="stars">{product.rating} ★★★★☆</span>
              <span className="rating-count">({formatNumber(product.ratingCount)})</span>
            </div>
            <p className="product-bought">
              {formatNumber(product.boughtLastMonth)}+ bought in past month
            </p>
            <CountdownTimer endTime={product.endTime} />
            <div className="button-container">
              <button className="action-button">Bid</button>
              <button className="action-button">+ Cart</button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};