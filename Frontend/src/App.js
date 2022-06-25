import React , {useEffect,useState} from "react";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";

import Home from "./components/Mainpages/Home";
import Login from "./components/Mainpages/Login";
import Navbar from "./components/Mainpages/NavBar";
import AdminHome from "./components/Adminpages/AdminHome";
import StudentHome from "./components/Studentpages/StudentHome";
 const App = ()=>{

    const [loggedUser, setloggedUser] = useState(null)

    useEffect(() => {
        setloggedUser(localStorage.getItem("token"));
    }, [])

    return(
        <div>
            <Router>
                {loggedUser!== null ? <Navbar/> : <></>}
                <Routes>
                    <Route exact path="/" element={loggedUser !== null ? <Home/> : <Login/>}/>
                    <Route path="/admin-pages" element={<AdminHome/>}/>
                    <Route path="/student-pages" element={<StudentHome/>}/>
                </Routes> 
            </Router>
        </div>
    );
};

export default App;