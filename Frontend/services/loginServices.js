import axios from "axios";

const loginURL =  "http://localhost:5000/user/login";

export async function loginfunc(data)  {

    let alldata = {
        email:data.email,
        password:data.password
    }

    return await axios.post(loginURL,alldata);
}