import { useEffect } from 'react';
import '../assets/Admin.css'
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';
import axios from 'axios';
export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyUser = async () => {
      const token = await Cookies.get("jwt");
      if (token) {
        const url = "http://localhost:3000/api/v1/decode"
        const data = {
          token
        }
        try {
          const response = await axios.post(url, { data })
          if (response.data.role !== "Admin") {
            navigate("/student")
          }

          if(response.status !== 200) {
            navigate("/")
          }
          
        } catch (error) {
            console.log(error.response.status);
            navigate("/")
        }
      } else {
        navigate("/")
      }
    }
    verifyUser()
  }, []);
  return (
    <div className="admin">
      <h1>WELCOME TO ADMIN ROUTE</h1>
    </div>
  )
}
