import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data";
import Receipt from "./Receipt.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }
  
  handleAddToCart(productName, price) {
    // alert(this.state.cartItems);
    let arr = {...this.state};
    let found = 0;
    let prod = 0;
    let newCount = 0;
    let counter = 0;
    arr.cartItems.map(p => {
      if (p.productName == productName) {
        found = 1
        prod = counter;
        newCount = p.count + 1
      }
      counter += 1
    })
    if (arr.cartItems[prod] && arr.cartItems[prod].productName == productName) {
      // let x = 
      arr.cartItems[prod].count = arr.cartItems[prod].count + 1;
      this.setState({cartItems : arr.cartItems});
    } else {
      let items = arr.cartItems.concat({productName:productName, price:price, count:1});
      this.setState({cartItems : items});
    }
  }
  
  handleRemove(productName) {
    let arr = {...this.state};
    let found = 0;
    let prod = 0;
    let newCount = 0;
    let counter = 0;
    arr.cartItems.map(p => {
      if (p.productName == productName) {
        found = 1
        prod = counter;
        newCount = p.count + 1
      }
      counter += 1
    })
    if (found == 1) {
      if (arr.cartItems[prod].count > 1) {
        arr.cartItems[prod].count = arr.cartItems[prod].count - 1;
        this.setState({cartItems : arr.cartItems});
      } else {
        arr.cartItems.splice(prod, 1);
        this.setState({cartItems : arr.cartItems});
      }
      
      // //extra credit
      // if (arr.cartItems[prod].count == 0) {
      //   let newArr = [];
      //   let x = 0;
      //   arr.cartItems.map(p => {
      //     if (x != prod) {
      //       newArr.concat(p);
      //     }
      //     x += 1;
      //   });
      //   alert(newArr);
      //   this.setState({cartItems : newArr});
      // }
      
    }
  }
  
  render() {
    return (
        <div className="page-content">
            {ProductData.products.map(p => (
              //maybe onAddToCart should just be the function, not a new function
              //it doesn't work to just pass function cause then cartItems is nothing...
              <Product productName={p.name} price={p.cost} onRemove={() => this.handleRemove(p.name)} onAddToCart={() => this.handleAddToCart(p.name, p.cost)}/>//limit={p.stock}
            ))}
            <Receipt items={this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
