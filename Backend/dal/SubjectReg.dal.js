const RegSubject =  require("./connection").db("userDB").collection("RegSubject");


const createRegSub = async (data)=>{
    const alldata = {
        subject:data?.subject,
        students:data?.students
    }

    let regs = await RegSubject.insertOne(alldata);
    return regs;
}

const getAllRegs = async ()=>{
    let data = await RegSubject.find();
    return data.toArray();
}

module.exports = {createRegSub,getAllRegs}