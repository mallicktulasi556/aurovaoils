import React, { useState } from "react";
import "./AdminHealthBenefits.css";

import {
  FaShoppingCart, FaStar, FaMinus, FaPlus
} from "react-icons/fa";

import oil from "../images/oil-main.png";
import thumb from "../images/oil-thumb.png";

export default function AdminHealthBenefits() {

const [qty,setQty] = useState(1)
const [size,setSize] = useState("250 ML")

const increase = () =>{
setQty(qty+1)
}

const decrease = () =>{
if(qty>1){
setQty(qty-1)
}
}

return (

<div className="product-page">

{/* PRODUCT SECTION */}

<div className="product-container">

{/* LEFT SIDE */}

<div className="product-images">

<img src={oil} className="main-image"/>

<div className="thumbnail-row">
<img src={thumb}/>
<img src={thumb}/>
<img src={thumb}/>
<img src={thumb}/>
</div>

</div>


{/* RIGHT SIDE */}

<div className="product-info">

<h1>Ground Nut Oil</h1>

<div className="rating">

<div className="rating-box">
<FaStar/> 4.6
</div>

<span>422 Verified reviews</span>

</div>

<h3>Size:</h3>

<div className="size-options">

<button
className={size==="250 ML" ? "active" : ""}
onClick={()=>setSize("250 ML")}
>
250 ML
</button>

<button
className={size==="500 ML" ? "active" : ""}
onClick={()=>setSize("500 ML")}
>
500 ML
</button>

<button
className={size==="1 L" ? "active" : ""}
onClick={()=>setSize("1 L")}
>
1 L
</button>

<input
type="number"
placeholder="Enter Quantity"
/>

</div>


{/* QUANTITY */}

<div className="cart-row">

<div className="qty-box">

<button onClick={decrease}>
<FaMinus/>
</button>

<span>{qty}</span>

<button onClick={increase}>
<FaPlus/>
</button>

</div>

<button className="cart-btn">
<FaShoppingCart/> Add to Cart
</button>

</div>


{/* DESCRIPTION */}

<div className="description">

<h2>Groundnut Oil Description</h2>

<p>
Groundnut oil is a natural cooking oil extracted from high-quality
peanuts using a cold-pressed method to retain its nutrients and flavor.
It has a light golden color, rich aroma, and smooth taste that enhances
the flavor of food.
</p>

<p>
This oil is rich in healthy fats, vitamin E, and antioxidants, making it
a good choice for daily cooking. Groundnut oil is commonly used for
frying, sautéing, and traditional dishes because of its high smoke
point.
</p>

</div>

</div>

</div>
</div>
);
}