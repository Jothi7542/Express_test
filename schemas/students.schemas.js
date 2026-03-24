import Joi from "joi";

export const createStudentsSchema = Joi.object({
  Students_name: Joi.string().required(),
  email: Joi.string().required(),
  course: Joi.string().required(),
  marks: Joi.number().required(),
  createdAt: Joi.number().required(),
});

