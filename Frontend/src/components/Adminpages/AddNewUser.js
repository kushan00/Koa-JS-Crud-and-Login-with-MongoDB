import React,{useEffect, useState} from "react";
import { CreateNew } from "../../../services/userServices";
import { useNavigate } from "react-router-dom";

const AddNewUser = ()=>{


    const navigate = useNavigate();

    const [formdata, setformdata] = useState({
        name:"",
        email:"",
        password:"",
        userRole:""
    });

    const {name,email,password,userRole} = formdata;

    const onChangedata = (e) =>{
		setformdata({ ...formdata, [e.target.name]: e.target.value });
    }


    const AddNewUserData = async (e)=>{
        e.preventDefault();
        try {
            var data = await CreateNew(formdata);
            console.log(data);
            if(data?.data?.name)
            {
                alert("Insert success");
                navigate("/admin-pages")
            }
            else
            {
                alert("error");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <div>
            <center>
                <div>
                    <h2>Edit User Details</h2>                    
                </div>
                <br /><br />
                <div>
                    <form className="form">
                        <input 
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>

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
                        type="text"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>

                        
                        <input 
                        type="text"
                        placeholder="Enter your userRole"
                        name="userRole"
                        value={userRole}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>

                        <button className="btn btn-success" onClick={(e)=>AddNewUserData(e)}>Insert</button>

                    </form>
                </div>
            </center>
            </div>
        </div>
    )
}

export default AddNewUser;