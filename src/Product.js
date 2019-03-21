// import React from "react";
// 
// class Product extends React.Component (
//   redner() {
//     return (
//       <div class="ui cards">
//         <div class="card">
//           <div class="content">
//             <div class="header">Elliot Fu</div>
//             <div class="description">
//               Elliot Fu is a film-maker from New York.
//             </div>
//           </div>
//           <div class="ui bottom attached button">
//             <i class="add icon"></i>
//             Add Friend
//           </div>
//         </div>
//       </div>
//     );
//   }
// )
// 
// 
// export default Product;

import React from "react";
import "./styles/cart.css";

const Product = props => {
  var dict = {};
  function addToCart(elem) {
    //need the elem to be the productName
    if (elem.limit == 0) {
      alert("This item is out of stock!");
      return;
    }
    if (dict[elem.productName] + 1 > elem.limit) {
      alert("There are too many " + elem.productName + " in your cart!");
      return;
    }
    if (elem.productName in dict) {
      let n = dict[elem.productName];
      n = n + 1;
      dict[elem.productName] = n;
    } else {
      dict[elem.productName] = 1;
    }
    alert("There are " + dict[elem.productName] + " " + elem.productName + "s in your cart.");
  }
    return (
        // <div className="page-content">
        //     <h2>Add your products here!</h2>
        // </div>
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <div class="header">{props.productName}</div>
              <div class="description">
                Price: ${props.price}
              </div>
            </div>
            <div class="ui bottom attached button" onClick={() => addToCart(props)}>
              <i class="add icon"></i>
              Add to Cart
            </div>
          </div>
        </div>
    );
  }

// }

export default Product;
