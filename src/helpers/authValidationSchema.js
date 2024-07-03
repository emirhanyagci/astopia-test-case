import * as yup from "yup";

export const signupSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter",
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter",
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number"),
});
export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
  password: yup.string().trim().required("Password is required"),
});
