import { ObjectId } from "mongodb";
import { client, MONGO_DATABASE } from "../index.js";

const getAllStudents = async () => {
  return await client
    .db(MONGO_DATABASE)
    .collection("students")
    .find({})
    .toArray();
};

const getStudentsById = async (id) => {
  try {
    const data = await client
      .db(MONGO_DATABASE)
      .collection("students")
      .findOne({ _id: new ObjectId(id) });
    if (data) return data;
    else return null;
  } catch (err) {
    throw new Error("error", err);
  }
};

const createStudents = async (id) =>{
   
}

const updateStudents = async (id) =>{

}

const deleteStudents = async(id) =>{

}
const studentsServices = {
  getAllStudents,
  getStudentsById,
  createStudents,
  updateStudents,
  deleteStudents,
};

export default studentsServices;