//import methods in dal 
const {createuser,getAllUsers,login,edituser,deleteuser,getUserDataByID} = require("../dal/user.dal");


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

//use get by id method
const getUserByID =  async (id)=>{
    return await getUserDataByID(id);
}


//use update method
const updateUser = async (id,data)=>{

    const alldata = {
        name:data.name,
        email:data.email,
        password:data.password,
        userRole:data.userRole
    }

    return await edituser(id,alldata);

}

//use delete method
const deleteUser = async (id)=> {
    return await deleteuser(id);
}

module.exports = {createNewUser,getAll,loginuser,updateUser,deleteUser,getUserByID}