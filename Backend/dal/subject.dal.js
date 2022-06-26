//DB colection object
const Subject = require("./connection").db("userDB").collection("Subject");

//objcet id 
const ObjectId = require("mongodb").ObjectId;


//create new
const createSubject  = async ({sub_name,sub_class,sub_price}) => {
    let data = await Subject.insertOne({sub_name,sub_class,sub_price});
    return data.ops[0];
}

const getAllSubjects =  async ()=> {
    let data = await Subject.find();
    return data.toArray();
}

const getSubjectByID = async (id)=> {
    let data = await Subject.findOne({_id:ObjectId(id)});
    return data;
}

const updateSubject = async (id,{sub_name,sub_class,sub_price})=>{
    let data = await Subject.replaceOne({_id:ObjectId(id)},{sub_name,sub_class,sub_price});
    return data;
}

const removeSUbject = async (id)=>{
    let data = await Subject.deleteOne({_id:ObjectId(id)});
    return data;
}

module.exports = {createSubject,getAllSubjects,getSubjectByID,updateSubject,removeSUbject}