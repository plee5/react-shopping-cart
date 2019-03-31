import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.productName}>
	       <div className="receipt-text">
          {item.productName} x {item.count}
	        </div>
      <div className="receipt-text">
		    {item.price}
	     </div>
      </div>
    )
    // return (<p>Replace me!</p>);
  }

  calculateTotal() {
    let total = 0;
    this.props.items.map(p => {
      total += (p.price * p.count);
    })
    return total.toFixed(2);
  }

  render() {
    const items = this.props.items; //[{ name: "Apple", price: 3 }, { name: "Banana", price: 3 }];
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">{this.calculateTotal()}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;