import React,{useEffect, useState} from "react";
import { updateUser, getbyID } from "../../../services/userServices";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = ()=>{

    const id = useParams();

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

    const getdata = async ()=> {
        try {
            var data = await getbyID(id.id);
            console.log(data);
            setformdata(data?.data?.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getdata();
    },[])

    const updateuserData = async (e)=>{
        e.preventDefault();
        try {
            var data = await updateUser(id.id,formdata);
            console.log(data);
            if(data?.data?.data?.ops[0]?.name)
            {
                alert("update success");
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
                        readOnly
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

                        <button className="btn btn-success" onClick={(e)=>updateuserData(e)}>Update</button>

                    </form>
                </div>
            </center>
            </div>
        </div>
    )
}

export default EditUser;