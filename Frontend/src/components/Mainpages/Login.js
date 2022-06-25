import React ,{useEffect , useState} from "react";
import { useNavigate } from "react-router-dom";

import { loginfunc } from "../../../services/loginServices";

const Login = () => {

    const navigate = useNavigate();

    const [formdata, setformdata] = useState({
        email:"",
        password:""
    });

    const {email,password} = formdata;

    const onChangedata = (e) =>{
		setformdata({ ...formdata, [e.target.name]: e.target.value });
    }

    const submitdata = async (e)=>{
		e.preventDefault();
        console.log("data",formdata);
        let data = await loginfunc(formdata);
        console.log("data",data);
        if(data?.data?.token)
        {
            localStorage.setItem("token",data?.data?.token);
            localStorage.setItem("userRole",data?.data?.userRole);
            navigate("/");
            window.location.reload();
        }
        else
        {
            alert("Login failed");
        }
    } 

    return(
        <div>
            <div>
            <center>
                <div>
                    <h2>Login to the system</h2>                    
                </div>
                <br /><br />
                <div>
                    <form className="form">
                        <input 
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>

                        <input 
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>

                        <button className="btn btn-success" onClick={(e)=>submitdata(e)}>Login</button>

                    </form>
                </div>
            </center>
            </div>
        </div>
    )

}

export default Login;