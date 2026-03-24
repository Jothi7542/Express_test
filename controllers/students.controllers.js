import studentsServices from "../services/students.services";
import { StatusCodes } from "http-status-codes";


const getStudents = async (request, response) => {
  const data = await studentsServices.getAllStudents();
  if (data.length == 0)
    return response.status(StatusCodes.BAD_REQUEST).json(data);
  else return response.status(StatusCodes.OK).json(data);
};

const getStudentsById = async (request, response) => {
  const { id } = request.params;
  try {
    const students = await studentsServices.getStudentsById(id);
    if (!students) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Students not found" });
    }
    response.status(StatusCodes.OK).json(product);
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

export {
  getStudents,
  getStudentsById,
};