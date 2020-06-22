import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import './Login.css'


const initalCredentials = {
    username: '',
    password: ''
  }


const Login = () => {

const [ credentials, setCredentials ] = useState(initalCredentials)

const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        setCredentials({
            ...credentials,
            [name]: value 
        })
    }
    
    return (
        <form className='form'>
                <TextField 
                id='outlined-basic' 
                label='USERNAME' 
                variant='outlined'
                name='username'
                value={credentials.username}
                onChange={onInputChange}/>
                
                <TextField 
                id='outlined-basic' 
                label='PASSWORD' 
                variant='outlined'
                name='password'
                value={credentials.password}
                onChange={onInputChange}/>

                <Button variant='contained' color='primary'>
                    Login
                </Button>
        </form>
    )

}

export default Login