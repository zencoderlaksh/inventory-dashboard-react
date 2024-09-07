import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ErrorBoundary from "./ErrorBoundary";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavigationBar />
        <div className="container py-5">
          <h1 className="text-center mb-5">Product Inventory Dashboard</h1>
          <ErrorBoundary>
            <ProductList />
          </ErrorBoundary>
          <ErrorBoundary>
            <Cart />
          </ErrorBoundary>{" "}
          {/* Fixing the closing div tag here */}
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
