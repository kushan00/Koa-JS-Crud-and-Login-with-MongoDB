import React,{useEffect,useState} from "react";
import { GetAllRegs } from "../../../services/RegSubjectsServices";

const AllRegs = () =>{

    const [users, setusers] = useState([]);

    const getall = async ()=>{
        try {
            let data = await GetAllRegs();
            console.log("all",data?.data);
            setusers(data?.data);
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        getall();
    }, [])



    return(
        <div>
            <center>
            <div>
                <h1>Enroll Subject</h1>
            </div>
            </center>
            <div>
              <a href="/reg-new-subject" className="btn btn-success">Enroll in Sub</a>
            </div>
            <br></br>
            <table className="table table-dark">
                <thead className="">
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Studnet Details</th>
                </tr>
                </thead>

                <tbody>
                {users.map((data,index) => {
                        return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{data._id}</td>
                            <td>{data.sub.sub_name}<br/><br/>{data.sub.sub_class}</td>
                            <td>{data.user.map((users)=>{
                                return(
                                    <tr>
                                        <td>{users?.name}</td>
                                        <td>{users?.email}</td>
                                        <td>{users?.userRole}</td>
                                    </tr>
                                )
                            })}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>


        </div>
    )
};

export default AllRegs;