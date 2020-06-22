import * as Yup from "yup";

const formSchema = Yup.object().shape({
   

  

  username: Yup
  .string()
  .min(5,"User name must be 5 charaters long.")
  .required("Must include email address."),


  password:Yup
  .string()
  .min(5,  "Password must be at least 5 characters long.")
  .required("Password is Required"),
  
  


})

export default formSchema