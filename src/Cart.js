import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            {ProductData.products.map(p => (
              <Product productName={p.name} price={p.cost} limit={p.stock} />
            ))}
        </div>
    );
  }

}

export default Cart;
