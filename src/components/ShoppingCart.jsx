import React, { useState } from 'react';
import './ShoppingCart.css'; // Make sure to create this file

let a = 30
let b = 40
let c = 50
let d = 0
function ShoppingCart() {
  const [price,setPrice] = useState(0)
  return (
    <>
        <div className="prd">
            <div className="prd1">
                <h1>Product 1</h1>
                <p>Price: ${a} </p>
                <button onClick={()=>{ setPrice(price+a)}} onChange={()=>{console.log("change")}}>Add to Cart</button>
            </div>
            <div className="prd2">
                <h1>Product 2</h1>
                <p>Price: ${b}</p>
                <button onClick={()=>{ setPrice(price+b)}} onChange={()=>{console.log("change")}}>Add to Cart</button>
            </div>
            <div className="prd3">
                <h1>Product 3</h1>
                <p>Price: ${c}</p>
                <button onClick={()=>{ setPrice(price+c)}} onChange={()=>{console.log("change")}}>Add to Cart</button>
            </div>
        </div>
        <div className="totalPrice">
            <h1>Total price: ${price}</h1>
        </div>
    </>
  );
}

export default ShoppingCart;
