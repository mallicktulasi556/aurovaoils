import "./DashboardOrders.css";
import {
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCog,
  FaClipboardList,
  FaCheckCircle 
} from "react-icons/fa";
  import { HiOutlineInbox, HiOutlineDocumentText} from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Orders() {

  const orders = [
    { date: "2 - 3 - 2026", id: "ORD - 343", name: "Vanitha", product: "Ground nut oil", payment: "Online", status: "pending" },
    { date: "2 - 4 - 2026", id: "ORD - 344", name: "Rajesh", product: "Coconut oil", payment: "In-store", status: "completed" },
    { date: "2 - 5 - 2026", id: "ORD - 345", name: "Aisha", product: "Olive oil", payment: "Online", status: "pending" },
    { date: "2 - 6 - 2026", id: "ORD - 346", name: "Ravi", product: "Sunflower oil", payment: "In-store", status: "processing" },
    { date: "2 - 7 - 2026", id: "ORD - 347", name: "Meera", product: "Sesame oil", payment: "Online", status: "completed" },
  ];

  return (
       <div className="dashboard-layout">
   
         {/* SIDEBAR */}
         <div className="dashboard-sidebar">
   
           <h2 className="dashboard-logo">Admin</h2>
   
           <NavLink to="/dashboard" className="menu">
             <FaClipboardList /> Dashboard
           </NavLink>
   
           <NavLink to="/products" className="menu">
             <FaBox /> Products
           </NavLink>
   
           <NavLink to="/dashboardorders" className="menu active">
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

        {/* ORDERS PAGE */}
        <div className="orders-page">

          <div className="orders-header">
            <div>
              <h1>Orders</h1>
              <p>Here you're able to see the Orders</p>
            </div>

            <input type="text" placeholder="Enter date" />
          </div>

          {/* TABLE */}
          <table className="orders-table">

            <thead>
              <tr>
                <th>Date</th>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Products</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((o, i) => (
                <tr key={i}>
                  <td>{o.date}</td>
                  <td>{o.id}</td>
                  <td>{o.name}</td>
                  <td>{o.product}</td>
                  <td>{o.payment}</td>

                  <td>
                    <span className={`status ${o.status}`}>
                      {o.status === "completed" && <FaCheckCircle />}
                      {o.status}
                    </span>
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