const User = require("./connection").db("userDB").collection("userdata");

//object id access to the document based on the _id
const ObjectID = require('mongodb').objectId;

//create
 const createuser = async ({name,email,password,userRole}) => {
    const result = await User.insertOne({name,email,password,userRole});
    return result;
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

module.exports = {createuser,getAllUsers,login}