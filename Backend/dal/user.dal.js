const User = require("./connection").db("userDB").collection("userdata");

//object id access to the document based on the _id
const ObjectID = require('mongodb').ObjectId;

//create
 const createuser = async ({name,email,password,userRole}) => {
    const result = await User.insertOne({name,email,password,userRole});
    return result.ops[0];
 }

//get all 
const getAllUsers = async () => {
    const data = await User.find();
    return data.toArray();
}

//
const login = async ({email,password})=> {

    const user = await User.findOne({"email":email});
    if(user)
    {
        if(user?.password !== password)
        {
            return {msg:"login failed"}
        }
        else
        {
            return {msg:"login success" , token:user._id , userRole:user.userRole}
        }
    }
    else
    {
        return {msg:"login failed"}
    }
}

//get one user data
const getUserDataByID = async (id)=> {
    const user = await User.findOne({_id:ObjectID(id)});
    return {data:user,msg:"get success"}
}

//update user
const edituser =  async (id,{name,email,password,userRole}) => {
    const result = await User.replaceOne({_id:ObjectID(id)},{name,email,password,userRole});

    return {data:result , msg:"update success"};
}

//delete user
const deleteuser = async (id)=>{
    console.log(id);
    const result = await User.deleteOne({_id:ObjectID(id)});
    return {data:result,msg:"delete success"};

}

module.exports = {createuser,getAllUsers,login,edituser,deleteuser,getUserDataByID}