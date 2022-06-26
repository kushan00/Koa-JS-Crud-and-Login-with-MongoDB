import axios from "axios";

const CreateSubjectURL = "http://localhost:5000/subject/create-subject";
const getAllSubjectsURL = "http://localhost:5000/subject/get-subjects";
const updateSubjectURL = "http://localhost:5000/subject/update-sub/"
const deleteSubjectURL = "http://localhost:5000/subject/delete-subject/"
const getSubjectByidURL = "http://localhost:5000/subject/get-subject/"

export async function createSubject(data){
    const alldata ={
            sub_name:data.sub_name,
            sub_class:data.sub_class,
            sub_price:data.sub_price
        }
        return axios.post(CreateSubjectURL,alldata);
}

export async function getAllSubjects(){
    return await axios.get(getAllSubjectsURL);
}

export async function updateSubject(id,data){
    
    const alldata ={
        sub_name:data.sub_name,
        sub_class:data.sub_class,
        sub_price:data.sub_price
    }

    return await axios.put(updateSubjectURL + id,alldata)
}

export async function deleteSubject(id){
    return axios.delete(deleteSubjectURL+id);
}

export async function getSubjectbyID(id){
    return axios.get(getSubjectByidURL + id);
}