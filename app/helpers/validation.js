import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[^\d]+$/, "Wrong Fullname")
    .required("Required"),
  email: Yup.string()
    .email("Wrong Email")
    .matches(/\./, "Wrong Email")
    .required("Required"),
  phone: Yup.string()
    .max(12, "Wrong Phone")
    .min(10, "Wrong Phone")
    .matches(/^\d+$/, "Wrong Phone")
    .required("Required"),
  message: Yup.string(),
});
