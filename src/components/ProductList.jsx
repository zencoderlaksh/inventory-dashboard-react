import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Select from "react-select"; // Third-party dropdown library
import productsData from "../data/products.json";
import { motion } from "framer-motion"; // For animations

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  // Updated category options based on your dummy data
  const categoryOptions = [
    { value: "Electronics", label: "Electronics" },
    { value: "Fashion", label: "Fashion" },
    { value: "Home Appliances", label: "Home Appliances" },
    { value: "Sports", label: "Sports" },
  ];

  const sortOptions = [
    { value: "asc", label: "Price: Low to High" },
    { value: "desc", label: "Price: High to Low" },
  ];

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
    if (selectedOption) {
      const filtered = products.filter(
        (product) => product.category === selectedOption.value
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption);
    const sorted = [...filteredProducts].sort((a, b) => {
      return selectedOption.value === "asc"
        ? a.price - b.price
        : b.price - a.price;
    });
    setFilteredProducts(sorted);
  };

  // Custom styles for react-select dropdown to fix white text issue
  const customSelectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#f8f9fa",
      borderColor: "#ced4da",
      color: "#333",
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? "#007bff" : "#fff",
      color: isFocused ? "#fff" : "#333",
    }),
    singleValue: (styles) => ({ ...styles, color: "#333" }),
  };

  return (
    <div id="products">
      <div className="row mb-4">
        <div className="col-md-6">
          <Select
            options={categoryOptions}
            onChange={handleCategoryChange}
            isClearable
            placeholder="Filter by Category"
            styles={customSelectStyles} // Applying custom styles
          />
        </div>
        <div className="col-md-6 mt-2 mt-md-0">
          <Select
            options={sortOptions}
            onChange={handleSortChange}
            isClearable
            placeholder="Sort by Price"
            styles={customSelectStyles} // Applying custom styles
          />
        </div>
      </div>

      <motion.div
        className="row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} // Entrance animation for the list
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="col-sm-6 col-md-4 mb-4"
            whileHover={{ scale: 1.05 }} // Card hover effect
            whileTap={{ scale: 0.95 }} // Card click effect
            transition={{ duration: 0.3 }}
          >
            <ProductItem product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductList;
