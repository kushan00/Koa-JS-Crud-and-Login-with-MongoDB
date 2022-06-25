//import methods in dal 
const {createuser,getAllUsers,login} = require("../dal/user.dal");


//use create method
const createNewUser = async(data)=> {

    const user = {
        name:data.name,
        email:data.email,
        password:data.password,
        userRole:data.userRole
    }

    return await createuser(user);
}

//use getallusers method
const getAll = async () => {


    return await getAllUsers();

}


//use login method
const loginuser = async(data)=> {

    const credentials ={
        email:data.email,
        password:data.password
    }

    return await login(credentials);
}

module.exports = {createNewUser,getAll,loginuser}