const Subject = require("../dal/connection").db("userDB").collection("Subject");
const User = require("../dal/connection").db("userDB").collection("userdata");

const { ObjectId } = require("mongodb").ObjectId;;
const { copyFileSync } = require("fs");
const {getAllRegs} = require("../dal/SubjectReg.dal");


const getFullDetails = async ()=>{
    let data = await getAllRegs();
    console.log(data);
    const alldata =[];

    for(let i =0;i<data.length;i++)
    {
        let studnetIDs =data[i].students;
        const array =[];

        const subject = await Subject.findOne({_id:ObjectId(data[i].subject)});
        
        for(let y = 0;y<studnetIDs.length;y++)
        {   

            const students = await User.findOne({_id:ObjectId(studnetIDs[y])});
            array.push(students);
        }

        alldata.push({
            _id:data[i]._id,
            sub:subject,
            user:array
        })
    }

    return alldata;
}


module.exports = {getFullDetails};