import React , {useEffect,useState} from "react";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";

import Home from "./components/Mainpages/Home";
import Login from "./components/Mainpages/Login";
import Navbar from "./components/Mainpages/NavBar";
import AdminHome from "./components/Adminpages/AdminHome";
import StudentHome from "./components/Studentpages/StudentHome";
import EditUser from "./components/Adminpages/EditUser";
import AddNewUser from "./components/Adminpages/AddNewUser";
import Register from "./components/Mainpages/Register";
import UpdateSelectedSubject from "./components/Studentpages/UpdateSubject";
import AddNewSubject from "./components/Studentpages/AddNewSubject";

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
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/admin-pages" element={<AdminHome/>}/>
                    <Route path="/student-pages" element={<StudentHome/>}/>
                    <Route path="/user-update/:id" element={<EditUser/>}/>
                    <Route path="/add-new-user" element={<AddNewUser/>}/>
                    <Route path="/subject-update/:id" element={<UpdateSelectedSubject/>}/>
                    <Route path="/add-new-subject" element={<AddNewSubject/>}/>
                </Routes> 
            </Router>
        </div>
    );
};

export default App;