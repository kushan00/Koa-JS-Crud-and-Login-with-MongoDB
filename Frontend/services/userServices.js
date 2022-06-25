import axios from "axios";

const getAllURL = "http://localhost:5000/user/getall";
const updateURL = "http://localhost:5000/user/update-user/"
const deleteURL = "http://localhost:5000/user/delete-user/"
const getUserByidURL = "http://localhost:5000/user/get-by-id/"
const AddnewURL = "http://localhost:5000/user/create"


export async function CreateNew(data){
    
    var alldata = {
        name:data?.name,
        email:data?.email,
        password:data?.password,
        userRole:data?.userRole
    }

    return await axios.post(AddnewURL,alldata)
}

export async function getAllUsers(){
    return await axios.get(getAllURL);
}

export async function updateUser(id,data){
    
    var alldata = {
        name:data?.name,
        email:data?.email,
        password:data?.password,
        userRole:data?.userRole
    }

    return await axios.put(updateURL + id,alldata)
}

export async function deleteUser(id){
    return axios.delete(deleteURL+id);
}

export async function getbyID(id){
    return axios.get(getUserByidURL + id);
}