import express from "express";
import {
  getStudents,
  getStudentsById,
  createStudents,
  updateStudentsById,
  deleteStudentsById,} from "../controllers/students.controllers.js";
import { validateSchema } from "../middleware/validate.schema.js";
import { createStudentsSchema } from "../schemas/students.schemas.js";

const studentsRouters = express.Router();

studentsRoutersRouters.get("/", getStudents);
studentsRoutersRouters.get("/:id", getStudentsById);
studentsRoutersRouters.post("/", validateSchema(createStudentsSchema), createStudents);

studentsRoutersRouters.put("/:id", updateStudentsById);
studentsRoutersRouters.delete("/:id", deleteStudentsById);

export default studentsRouters;