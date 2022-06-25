import React,{useEffect,useState} from "react";
import { useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const [userRole, setuserRole] = useState("")

    useEffect(() => {
        setuserRole(localStorage.getItem("userRole"));
    }, [])

    useEffect(() => {
        console.log("userRole",userRole);
    }, [userRole])


    const handleSubmit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userRole");
		window.location.reload();
	  }

    return(
        <div>
            <div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <div className="collapse navbar-collapse" >
              <div className="navbar-nav">

                <a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/admin-pages">Admin Pages</a>
                
                <a style={{ display: userRole == "student" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/atudent-pages" aria-current="page">Student Pages</a>



              </div>
            </div>
          </div>  
          <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{ float: "right", marginRight: "10px" , display:userRole ? "flex":"none"}}>
            {"Logout"}
          </button>
        </nav>
			</div>
        </div>
    )
}

export default Navbar;