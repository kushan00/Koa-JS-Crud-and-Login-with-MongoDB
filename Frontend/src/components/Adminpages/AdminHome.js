import React,{useEffect,useState} from "react";
import { getAllUsers , deleteUser } from "../../../services/userServices";

const AdminHome = () =>{

    const [users, setusers] = useState([]);

    const getall = async ()=>{
        try {
            let data = await getAllUsers();
            console.log("all",data?.data);
            setusers(data?.data);
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
            const data = await deleteUser(id);
            console.log("data",data);
            if(data?.data.msg === "delete success")
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
              <a href="/add-new-user" className="btn btn-success">Add New User</a>
            </div>
            <br></br>
      <table className="table table-dark">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email </th>
            <th>user Role</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user,index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.userRole}</td>
                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/user-update/${user._id}`}
                      >
                        Update
                      </a>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                           deleteData(e,user._id);
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

export default AdminHome;