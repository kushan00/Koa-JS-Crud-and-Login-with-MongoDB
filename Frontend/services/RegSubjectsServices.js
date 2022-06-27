import axios from "axios";

const RegSubURL = "http://localhost:5000/reg/reg-sub";
const GetAllURL = "http://localhost:5000/reg/get-regs";


export async function RegSub(data){
    const alldata ={
        subject:data?.subject,
        students:data?.students
    }

    return axios.post(RegSubURL,alldata);
}

export async function GetAllRegs(){
    return axios.get(GetAllURL);
}