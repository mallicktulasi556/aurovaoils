// import { Routes, Route } from "react-router-dom";
// import Home from "./screens/Home";
// import About from "./screens/About";
// import Oils from "./screens/Oils";
// import Benefits from "./screens/Benefits";
// import Contact from "./screens/Contact";
// import Cart from "./screens/Cart";
// import Wishlist from "./screens/Wishlist";
// import Notifications from "./screens/Notifications";
// import Payment from "./screens/Payment";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import ProfilePage from "./screens/ProfilePage"
// import ProductDescription from "./screens/ProductDescription";


// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/oils" element={<Oils />} />
//       <Route path="/benefits" element={<Benefits />} />
//       <Route path="/contact" element={<Contact />}/>
//        <Route path="/cart" element={<Cart />}/>
//        <Route path="/wishlist" element={<Wishlist />}/>
//         <Route path="/notifications" element={<Notifications />} />
//         <Route path="payment/" element={<Payment />} />
//         <Route path="/login" element={<Login />}/>
//         <Route path="/signup" element={<Signup />}/>
//          <Route path="/profilepage" element={<ProfilePage />}/>
//             <Route path="/productdescription" element={<ProductDescription />}/>
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Oils from "./screens/Oils";
import Benefits from "./screens/Benefits";
import Contact from "./screens/Contact";
import Cart from "./screens/Cart";
import Wishlist from "./screens/Wishlist";
import Notifications from "./screens/Notifications";
import Payment from "./screens/Payment";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
// import ProfilePage from "./screens/ProfilePage";
import ProductDescription from "./screens/ProductDescription";
import Adminlogin from "./screens/AdminLogin"
import Dashboard from "./screens/Dashboard";
import Products from "./screens/Products";
import DashboardOrders from "./screens/DashboardOrders"; 
import Customers from "./screens/Customers";
import Reviews from "./screens/Reviews";
import ContentManagement from "./screens/ContentManagement";
import Settings from "./screens/Settings";
import Animations from "./screens/Animations"
import Profile from "./screens/Profile";
import ProfileOrders from "./screens/ProfileOrders"
import Terms from "./screens/Terms";
import Privacy from "./screens/Privacy";
import AdminHealthBenefits from "./screens/AdminHealthBenefits";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/oils" element={<Oils />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/payment" element={<Payment />} />
      {/* <Route path="/profilepage" element={<ProfilePage />} /> */}
      {/* <Route path="/productdescription/:id" element={<ProductDescription />} /> */}
      <Route path="/products/:productId" element={<ProductDescription />} />
      <Route path="/adminlogin" element={<Adminlogin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/dashboardorders" element={<DashboardOrders/>} />
       <Route path="/customers" element={<Customers/>} />
       <Route path="/reviews" element={<Reviews/>} />
      <Route path="/content" element={<ContentManagement />} />
      <Route path="/settings" element={<Settings />} />
    <Route path="/animations/:id" element={<Animations />} />
      <Route path="/profile" element={<Profile />} />
       <Route path="/Profileorders" element={<ProfileOrders />} />
        <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/adminhealthbenefits" element={<AdminHealthBenefits />} />
    </Routes>
  );
}

export default App;