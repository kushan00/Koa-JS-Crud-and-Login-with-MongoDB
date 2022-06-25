import axios from "axios";

const getAllURL = "http://localhost:5000/user/getall";


export async function getAllUsers(){
    return await axios.get(getAllURL);
}