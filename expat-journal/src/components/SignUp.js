import React, {useState, useEffect} from 'react'
import {TextField, Button} from '@material-ui/core'
import formSchema from './Validation/schema'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import * as Yup from 'yup'


const signUpInitialValue = {
    id: uuid(),
    first_name: '',
    last_name:'',
    email: '',
    password: '',

}

const errors = {
  
    first_name: '',
    last_name: '',
    email: '',
    password:'',
    
    
  }

const SignUp = (props) => {

    const [newUser, setNewUser] = useState([]);
    const [signUpForm, setSignUp] = useState(signUpInitialValue);
    const [signUpError, setOrderError] = useState(errors) 
    const [disable, setDisabled] = useState(true) 
  
  
      
    const getOrder = () => {
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
          setOrderError({
            ...signUpError,
            [name]: ''
          })
        })
        
        .catch(err => {
          setOrderError({
            ...signUpError,
            [name]: err.errors[0] 
          })
        })
  
      setSignUp({
        ...signUpForm,
        [name]: value 
      })
    }
  
    
    const onCheckboxChange = evt => {
     
      const { name, checked } = evt.target
  
        setSignUp({
          ...signUpForm, 
         
        })
        
      
    }
    const onSubmit = evt => {
      evt.preventDefault()
      
      const newSignUp = {
        id: uuid(),
        first_name: signUpForm.first_name.trim(),
        last_name: signUpForm.last_name.trim(),
        email: signUpForm.email.trim(),
        password: signUpForm.password.trim() 
      }
       postNewUser(newSignUp)
     
    }
   
    
    useEffect(() => {
      getOrder()
      
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
         
                <TextField  required id="first_name" label="First Name" variant="filled" />
                <TextField  required id="last_name" label="Last Name" variant="filled" />
                <TextField  required id="email" label="Email" variant='filled'/>
                <TextField  required id="password" typw="password" label="Password" variant='filled'/>
            
            </div>
            <div className= 'submit-btn'>

                  <Button variant="contained" disabled={disable}> Sumbit </Button>

            </div>
         
        </form>



      </div>





    )

}


export default SignUp