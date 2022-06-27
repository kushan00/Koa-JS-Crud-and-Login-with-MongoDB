import React,{useEffect, useState} from "react";
import { RegSub } from "../../../services/RegSubjectsServices";
import { useNavigate } from "react-router-dom";

const EnrollSUbject = ()=>{


    const navigate = useNavigate();

    const [formdata, setformdata] = useState({
        subject:"",
    });

    const {subject} = formdata;

    const [student, setstudent] = useState([]);

    const onChangeStudents = (e) =>{
		setstudent(e.target.value);
    }

    const onChangedata = (e) =>{
		setformdata({ ...formdata, [e.target.name]: e.target.value });
    }


    const AddNewSubjectData = async (e)=>{
        e.preventDefault();
        try {
            var data = await RegSub(formdata);
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
                <br/><br/>
                <div>
                    <form className="form">
                        <input 
                        type="text"
                        placeholder="Enter your subject"
                        name="subject"
                        value={subject}
                        onChange={(e)=>onChangedata(e)}
                        />
                        <br/>
                        <br/>

                        <input 
                        type="text"
                        placeholder="Enter your students"
                        name="students"
                        value={student}
                        onChange={(e)=>onChangeStudents(e)}
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

export default EnrollSUbject;