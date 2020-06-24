import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosAuth.js';

import './Login.css'



const initalCredentials = {
    username: '',
    password: ''
  }


const Login = () => {

const [ credentials, setCredentials ] = useState(initalCredentials)
const history = useHistory();

const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        setCredentials({
            ...credentials,
            [name]: value 
        })
    }

const login = (e) => {
        axiosWithAuth()
            .post('/api/auth/login ', credentials)
            .then((res) => {
                window.localStorage.setItem('username', credentials.username);
                window.localStorage.setItem('token', res.data.token);
                history.push('/dashboard');
            })
            .catch(err => console.log(err))
           
      };
    
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
                type="password"
                variant='outlined'
                name='password'
                value={credentials.password}
                onChange={onInputChange}/>

                <Button onClick={login} variant='contained' color='primary'>
                    Login
                </Button>
        </form>
    )

}

export default Login