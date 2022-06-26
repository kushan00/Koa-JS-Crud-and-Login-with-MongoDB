import React,{useEffect,useState} from "react";
import { getAllSubjects , deleteSubject } from "../../../services/subjectServices";

const StudentHome = () =>{

    const [subjects, setsubjects] = useState([]);

    const getall = async ()=>{
        try {
            let data = await getAllSubjects();
            console.log("all",data?.data);
            setsubjects(data?.data);
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        getall();
    }, [])

    const deleteData = async (e,id)=>{
      e.preventDefault();  
      try {
            const data = await deleteSubject(id);
            console.log("data",data?.data);
            if(data?.data?.deletedCount === 1)
            {
              alert("delete success");
              window.location.reload();
            }
        } catch (error) {
          console.log(error);
        }
    }

    return(
        <div>
            <center>
            <div>
                <h1>Admin Home page</h1>
            </div>
            </center>
            <div>
              <a href="/add-new-subject" className="btn btn-success">Add New Subject</a>
            </div>
            <br></br>
      <table className="table table-dark">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Subject Name</th>
            <th>Subject Class </th>
            <th>Subject Price</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((subject,index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{subject.sub_name}</td>
                    <td>{subject.sub_class}</td>
                    <td>{subject.sub_price}</td>
                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/subject-update/${subject._id}`}
                      >
                        Update
                      </a>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                           deleteData(e,subject._id);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>


        </div>
    )
};

export default StudentHome;