import '../assets/Login.css'
import { useState } from 'react';
import {Link,  useNavigate} from 'react-router-dom'
import 'axios'
import axios from 'axios';
import Cookies from 'js-cookie';
 
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuth, setIsAuth] = useState(false)

  async function handleLogin(){
    const url = "http://localhost:3000/api/v1/login"
    const  data = {
      email: email,
      password: password
    }
    const response = await axios.post(url, data)
    console.log(response.data);
    Cookies.set("jwt", response?.data?.token);
     if(response.status===200){
      navigate("/admin");
    }else {
      navigate("/")
    }
  }
  return (
    <div className="container">
      <h3>LOG IN</h3>
      <form action="javascript:void(0)" onSubmit={handleLogin}>
        <label >User Name</label>
        <input type="text" className="input-field" id="user-name"placeholder="enter your email" required onChange={(e) => {setEmail(e.target.value)}}/>
        <label >Enter your Password</label>
        <input type="password" className ="input-field" id="password" placeholder="enter your password" required onChange={(e) => {setPassword(e.target.value)}}/>
        <p>Already have an account? <Link to={"/"}>Sign Up</Link></p>
        <button type='submit' className = "btn-submit">Log In</button>
      </form>
      {/* {isAuth ? <Dashboard/> : "Wrong password" } */}
    </div>
  );
}


export default Login;
