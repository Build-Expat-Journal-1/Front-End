import React, {useState, useEffect} from 'react'
import {TextField, Button} from '@material-ui/core'
import formSchema from './Validation/schema'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import * as Yup from 'yup'


const signUpInitialValue = {

    username: '',
    password: '',

}

const errors = {
  
    username:'',
    password:'',
    
    
  }

const SignUp = (props) => {

    const [newUser, setNewUser] = useState([]);
    const [signUpForm, setSignUp] = useState(signUpInitialValue);
    const [signUpError, setSignUpError] = useState(errors) 
    const [disable, setDisabled] = useState(true) 
  
  
      
    const getUser = () => {
      axios.get('http://localhost:3000')
      .then(response => {
        
        setNewUser(response.data)
      
      })
      .catch(err => {
        debugger
      })
  }
  
  const postNewUser= newSignUp =>{
    axios.post('https://http://localhost:3000/sign-up', newSignUp)
    .then(res => {
      setNewUser([...newUser, res.data])
      
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setSignUp(signUpInitialValue)
    })
    
  }
  
    const onInputChange = evt => {
     
     
      const { name, value } = evt.target
      
    
      Yup
        .reach(formSchema, name)
     
        .validate(value)
        
        .then(() => {
          setSignUpError({
            ...signUpError,
            [name]: ''
          })
        })
        
        .catch(err => {
          setSignUpError({
            ...signUpError,
            [name]: err.errors[0] 
          })
        })
  
      setSignUp({
        ...signUpForm,
        [name]: value 
      })
    }
  
    
    
    const onSubmit = evt => {
      evt.preventDefault()
      
      const newSignUp = {
    
        username: signUpForm.username.trim(),
     
        password: signUpForm.password.trim() 
      }
       postNewUser(newSignUp)
     
    }
   
    
    useEffect(() => {
      getUser()
      
    }, [])
  
    
   
    useEffect(() => {
      formSchema.isValid(signUpForm)
      .then(valid => {
        setDisabled(!valid);
      })
    }, [signUpForm])

    return(
      <div className="sign-up-container">

     

          

        <form onSubmit={onSubmit}  noValidate autoComplete="off">
          
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}} className="imput-container">
         
                <TextField  onChange={onInputChange} required id="username" label="Username" type="username" variant="filled" />
                <TextField   onChange={onInputChange} required id="password" type="password" label="Password" variant='filled'/>
            
            </div>
            <div className= 'submit-btn'>

                  <Button variant="contained" disabled > Sumbit </Button>

            </div>
         
        </form>



      </div>





    )

}


export default SignUp