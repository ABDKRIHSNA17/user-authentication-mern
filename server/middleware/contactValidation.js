const Joi = require("joi");

const validateInput = (req, res, next) => {
  const schema = Joi.object({
    companyName: Joi.string().min(5).max(100).required().messages({
      "string.base": "Company Name should be a text",
      "string.empty": "Company Name cannot be empty",
      "string.min": "Company Name should be at least 5 characters long",
      "string.max": "Company Name should not exceed 100 characters",
      "any.required": "Companyname is required",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "Please provide a valid email address",
      "any.required": "Email is required",
    }),
    message: Joi.string().min(10).max(100).required().messages({
      "string.min": "message should be at least 20 characters long",
      "string.max": "message should not exceed 100 characters",
      "any.required": "message is required",
    }),
    
  });
  next();
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "bad request from /contact", error });
  }
};

module.exports = {validateInput};