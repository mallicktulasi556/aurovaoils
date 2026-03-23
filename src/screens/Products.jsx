import "./Products.css";
import {  FaBell,
  FaUser,
  FaSignOutAlt,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCog,
  FaClipboardList,
  FaTrash, 
  FaEdit  } from "react-icons/fa";
    import { HiOutlineInbox, HiOutlineDocumentText} from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Products(){

const products = [
  {name:"Cold Pressed", category:"Groundnut Oil", price:"250 ml 200", stock:"out"},
  {name:"Extra Virgin", category:"Olive Oil", price:"500 ml 500", stock:"in"},
  {name:"Organic", category:"Coconut Oil", price:"300 ml 300", stock:"in"},
  {name:"Avocado", category:"Oil", price:"250 ml 400", stock:"limited"},
  {name:"Sunflower", category:"Oil", price:"1 L 150", stock:"in"},
  {name:"Sesame", category:"Oil", price:"500 ml 350", stock:"out"},
  {name:"Pumpkin Seed", category:"Oil", price:"200 ml 650", stock:"in"},
  {name:"Grapeseed", category:"Oil", price:"750 ml 450", stock:"in"},
  {name:"Hemp Seed", category:"Oil", price:"250 ml 750", stock:"in"},
];

return(

    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <div className="dashboard-sidebar">

        <h2 className="dashboard-logo">Admin</h2>

        <NavLink to="/dashboard" className="menu">
          <FaClipboardList /> Dashboard
        </NavLink>

        <NavLink to="/products" className="menu active">
          <FaBox /> Products
        </NavLink>

        <NavLink to="/dashboardorders" className="menu">
          <FaShoppingCart /> Orders
        </NavLink>

        <NavLink to="/customers" className="menu ">
          <FaUsers /> Customers
        </NavLink>

        <NavLink to="/reviews" className="menu">
  <HiOutlineInbox /> Reviews
</NavLink>

<NavLink to="/content" className="menu">
  <HiOutlineDocumentText /> Content management
</NavLink>
        <NavLink to="/settings" className="menu">
          <FaCog /> Settings
        </NavLink>

      </div>

      {/* RIGHT */}
      <div className="dashboard-right">

        {/* TOPBAR */}
        <div className="topbar">
          <input placeholder="Search here...................." className="search"/>

          <div className="top-icons">
            <FaBell/>
            <FaUser/>
            <FaSignOutAlt/>
          </div>
        </div>


{/* PAGE */}
<div className="products-page">

<div className="header">
<div>
<h1>Products</h1>
<p>Here you're able to see the products</p>
</div>

<button className="add-btn">Add Product</button>
</div>


{/* TABLE */}
<table>

<thead>
<tr>
<th>Product</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{products.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>
<td>{item.category}</td>
<td>{item.price}</td>

<td>
<span className={`stock ${item.stock}`}>
{item.stock === "in" && "In stock"}
{item.stock === "out" && "Out of stock"}
{item.stock === "limited" && "Limited stock"}
</span>
</td>

<td className="actions">
<FaTrash className="delete"/>
<FaEdit className="edit"/>
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

);
}