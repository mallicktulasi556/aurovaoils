import "./AdminLogin.css";
import oil from "../images/oil-login.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const BASE_URL = "http://192.168.88.10:8080";

const handleAdminLogin = async () => {

try{

const response = await fetch(`${BASE_URL}/api/auth/admin/login`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:email,
password:password
})
});

const data = await response.json();

console.log(data);

if(response.ok){
alert("Admin Login Successful");
navigate("/admin/dashboard");   // admin page
}else{
alert(data.message || "Login Failed");
}

}catch(error){
console.log(error);
alert("Server Error");
}

};

return(

<div className="admin-wrapper">

{/* LEFT */}
<div className="admin-left">

<h1>Welcome back!</h1>

<button className="top-btn">Log In</button>

<label>Email Id / Mobile</label>
<div className="input-box">
<input
type="text"
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="thisuix@mail.com"
/>
</div>

<label>Password</label>
<div className="input-box">
<input
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
placeholder="********"
/>
</div>

<div className="options">
<div>
<input type="checkbox"/> Remember me
</div>
<span>Forgot Password?</span>
</div>

<button className="login-btn" onClick={handleAdminLogin}>
LOGIN
</button>

</div>

{/* RIGHT IMAGE */}
<div className="admin-right">
<img src={oil} alt="oil"/>
</div>

</div>

);
}

export default AdminLogin;