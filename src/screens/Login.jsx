// import "./Auth.css";
// import oil from "../images/oil-login.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Login() {

// const navigate = useNavigate();

// const [email,setEmail] = useState("");
// const [password,setPassword] = useState("");

// const BASE_URL = "http://192.168.88.23:8080";
// const handleLogin = async () => {

// try{

// const response = await fetch(`${BASE_URL}/api/auth/login`,{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify({
// email:email,
// password:password
// })
// });

// const data = await response.json();

// console.log(data);

// if(response.ok){
// alert("Login Successful");
// navigate("/home");
// }else{
// alert(data.message || "Login Failed");
// }

// }catch(error){
// console.log(error);
// alert("Server Error");
// }

// };

//   return (
//     <div className="auth-wrapper">

//       <div className="auth-container">

//         <div className="auth-form">

//           <h2>Welcome back!</h2>

//           <div className="switch-buttons">

//             <Link to="/signup">
//              <button>Sign Up</button> 
//             </Link>

//              <button className="active">LogIn</button>
//           </div>

//           <label>Email Id / Mobile</label>
//           <input 
//           type="text"
//           value={email}
//           onChange={(e)=>setEmail(e.target.value)}
//           />

//           <label>Password</label>
//           <input 
//           type="password"
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//           />

// <div className="remember-row">

//   <div className="remember">
//     <input type="checkbox"/>
//     <label>Remember me</label>
//   </div>

//   <p className="forgot">Forgot Password?</p>

// </div>

// <button className="auth-btn" onClick={handleLogin}>
// LOGIN
// </button>

//         </div>

//         <div className="auth-image">
//           <img src={oil} alt="oil"/>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Login;


import "./Auth.css";
import oil from "../images/oil-login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [emailormobilenumber,setemailormobilenumber] = useState("");
  const [password,setPassword] = useState("");

  const BASE_URL = "http://18.61.100.138:8080";

  const handleLogin = async () => {
    try{
      const response = await fetch(`${BASE_URL}/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username:emailormobilenumber,
          password:password
        })
      });

      const data = await response.json();

      console.log("LOGIN RESPONSE:", data);

      if(response.ok){

        // ✅ STORE TOKEN
        localStorage.setItem("token", data.token);

        // alert("Login Successful");

        navigate("/home");

      }else{
        alert(data.message || "Login Failed");
      }

    }catch(error){
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="auth-wrapper">

      <div className="auth-container">

        <div className="auth-form">

          <h2>Welcome back!</h2>

          <div className="switch-buttons">
            <Link to="/signup">
              <button>Sign Up</button> 
            </Link>
            <button className="active">LogIn</button>
          </div>

          <label>Email Id / Mobile</label>
          <input 
            type="text"
            value={emailormobilenumber}
            onChange={(e)=>setemailormobilenumber(e.target.value)}
          />

          <label>Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <div className="remember-row">
            <div className="remember">
              <input type="checkbox"/>
              <label>Remember me</label>
            </div>
            <p className="forgot">Forgot Password?</p>
          </div>

          <button className="auth-btn" onClick={handleLogin}>
            LOGIN
          </button>

        </div>

        <div className="auth-image">
          <img src={oil} alt="oil"/>
        </div>

      </div>

    </div>
  );
}

export default Login;