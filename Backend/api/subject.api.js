//import subject functions
const {createSubject,getAllSubjects,getSubjectByID,updateSubject,removeSUbject} = require("../dal/subject.dal");

//use create method
const createNewSUb = async (data)=>{
    const alldata = {
        sub_name:data.sub_name,
        sub_class:data.sub_class,
        sub_price:data.sub_price
    }

    return await createSubject(alldata);
}

//use get all method
const GetAllSub = async ()=>{
    return await getAllSubjects();
}

//use get By id method
const GetSubByID = async (id)=> {
    return await getSubjectByID(id);
}

//use update by id 
const UpdateSub = async (id,data)=> {
    console.log(data);
    const alldata = {
        sub_name:data.sub_name,
        sub_class:data.sub_class,
        sub_price:data.sub_price
    }

    return await updateSubject(id,alldata);
}

//use delete sub method
const deleteSub = async (id)=> {
    return await removeSUbject(id);
}

module.exports = {createNewSUb,GetAllSub,GetSubByID,UpdateSub,deleteSub}