import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {TextField, Button} from '@material-ui/core'
import formSchema from './Validation/schema'
import axios from 'axios'
import * as Yup from 'yup'


const signUpInitialValue = {

    username: '',
    password: '',

}

const errors = {
  
    username:'',
    password:''   
   
  }

const SignUp = (props) => {

    const [signUpForm, setSignUp] = useState(signUpInitialValue);
    const [signUpError, setSignUpError] = useState(errors) 
    const [disabled, setDisabled] = useState(true)   
    
    const history = useHistory()
  
  
    const postNewUser = (newSignUp) => { 
    console.log(newSignUp)
     axios
      .post('https://bw-expatjournal.herokuapp.com/api/auth/register', newSignUp)
      .then(res => 
          console.log(res))
      .catch(err => console.log(err))
      .finally(() => {
        setSignUp(signUpInitialValue)
        history.push('/')
      })
     
    };
  
   
    const onInputChange = evt => {

      const name = evt.target.name
      const value = evt.target.value


    setSignUp({
      ...signUpForm,
      [name]: value 
    })
    
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
  
    }
  
    
    
    const onSubmit = evt => {
      evt.preventDefault()
      const newSignUp = {

        username: signUpForm.username.trim(),
        password: signUpForm.password.trim() 
      }
      console.log(newSignUp)
       postNewUser(newSignUp)
       history.push('/')    
    }


  
  useEffect(() => {
      formSchema.isValid(signUpForm)
      .then(valid => {
        setDisabled(!valid);
      })
    }, [signUpForm])

    return(
      <div className="sign-up-container" style={{display:'flex', justifyContent:'center', alignContent:'center', height:'80vh' }}>
     
   
          
      <div className='error'>
                
                <div style={{color:'red'}}>{signUpError.username}</div>
                <div style={{color:'red'}}>{signUpError.password}</div>
              
        </div>
                
      
        <form noValidate autoComplete="off" style={{width:'50%',alignSelf:'center'}}>
              
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}} className="imput-container">
           
               <h1 style={{paddingLeft:'15%'}}>A Whole New World Awaits...</h1>
               <h3 style={{paddingLeft:'35%'}}>Sign Up Today!</h3>
               
                <TextField name='username' value={signUpForm.username} onChange={onInputChange} required id="username" label="Username" type="username" variant="filled" />
                <TextField style={{marginTop:'2rem'}} name='password' value={signUpForm.password} onChange={onInputChange} required id="password" type="password" label="Password" variant='filled'/>
            
            </div>
            <div className= 'submit-btn' style={{display:'flex',justifyContent:'center', marginTop:'2rem'}}>
              <Link to='/'>
                  <Button  onClick={onSubmit} isOpen={false} variant="contained"> Submit </Button>
                </Link>
            </div>
         
        </form>

      </div>





    )

}


export default SignUp