import * as Yup from "yup";

const formSchema = Yup.object().shape({
   

  first_name: Yup
  .string()
  .min(3, "First Name must be at least 3 characters long.")
  .required("First is Required"),

  last_name: Yup
  .string()
  .min(3, "Last name must be at least 3 characters long.")
  .required("Last Name is Required"),

  email: Yup
  .string()
  .email("Must be a valid email address.")
  .required("Must include email address."),


  password:Yup
  .string()
  .min(5,  "Password must be at least 5 characters long.")
  .required("Password is Required"),
  
  


})

export default formSchema