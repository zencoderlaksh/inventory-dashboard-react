import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Animation on hover
      whileTap={{ scale: 0.95 }} // Slight press effect on click
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }} // Smooth entry animation
      transition={{ duration: 0.4 }}
      className="card h-100 shadow-lg border-0" // Applying shadow effect
      style={{
        background: "linear-gradient(145deg, #e0e0e0, #ffffff)", // Gradient background
        borderRadius: "0px",
        boxShadow:
          "10px 10px 30px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(255, 255, 255, 0.5)", // 3D shadow effect
        color: "#333",
      }}
    >
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ color: "#007bff" }}>
          {product.name}
        </h5>
        <p className="card-text mb-1">
          Category: <span className="sub_text">{product.category}</span>
        </p>
        <p className="card-text mb-1">
          Price: $<span className="sub_text">{product.price.toFixed(2)}</span>
        </p>
        <p className="card-text mb-1">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
        <p className="card-text">
          Rating:<span className="sub_text">{product.rating}</span>{" "}
        </p>
        <div className="mt-auto">
          <motion.button
            className="btn btn-primary btn-block w-100"
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: product.inStock
                ? "linear-gradient(145deg, #007bff, #0056b3)"
                : "linear-gradient(145deg, #cccccc, #999999)",
              boxShadow:
                "5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.5)",
              border: "none",
              borderRadius: "10px",
            }}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductItem;
