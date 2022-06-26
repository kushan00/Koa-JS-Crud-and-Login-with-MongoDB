import React,{useEffect, useState} from "react";
import { createSubject } from "../../../services/subjectServices";
import { useNavigate } from "react-router-dom";

const AddNewSubject = ()=>{


    const navigate = useNavigate();

    const [formdata, setformdata] = useState({
        sub_name:"",
        sub_class:"",
        sub_price:""
        
    });

    const {sub_name,sub_class,sub_price} = formdata;

    const onChangedata = (e) =>{
		setformdata({ ...formdata, [e.target.name]: e.target.value });
    }


    const AddNewSubjectData = async (e)=>{
        e.preventDefault();
        try {
            var data = await createSubject(formdata);
            console.log(data);
            if(data?.data?.sub_name)
            {
                alert("Insert success");
                navigate("/student-pages")
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
                        placeholder="Enter your sub_name"
                        name="sub_name"
                        value={sub_name}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>

                        <input 
                        type="text"
                        placeholder="Enter your sub_class"
                        name="sub_class"
                        value={sub_class}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>

                        <input 
                        type="text"
                        placeholder="Enter your sub_price"
                        name="sub_price"
                        value={sub_price}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>


                        <button className="btn btn-success" onClick={(e)=>AddNewSubjectData(e)}>Insert</button>

                    </form>
                </div>
            </center>
            </div>
        </div>
    )
}

export default AddNewSubject;