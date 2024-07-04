import '../assets/Dashboard.css'
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';
import { useEffect } from 'react';

function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        const jwtToken = Cookies.get("jwt");
        // TODO: send this token to verify route
        // if verify return true then do nothing 
        // if verify returns false then redirect to "/"
        console.log(jwtToken)
        if (jwtToken === undefined) {
            navigate("/")
        }
    }, [])
    return (
        <div id="dashboard">
            <nav>
                <ul>
                    <li><a href="#student" id="studentLink">Student</a></li>

                    <li><a href="#admin" id="adminLink">Admin</a></li>
                </ul>
            </nav>
            <main>
                <section id="student" className="content">
                    <h2>Student Content</h2>
                    <p>Welcome to the student section!</p>
                </section>
                <section id="admin" className="content">
                    <h2>Admin Content</h2>
                    <p>Welcome to the admin section!</p>
                </section>
            </main>
        </div>
    )
}
export default Dashboard;