import React, {useRef,useEffect,useState} from 'react';
import { BrowserRouter as Route, Link, Switch, useHistory } from 'react-router-dom';

import './App.css';

// import PostContext from './contexts'

import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import PrivateRoute from './utils/PrivateRoute'
import Dashboard from './components/Dashboard'

import {TweenMax } from 'gsap'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Button, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


// const initalStory = {
//   title: '',
//   location: '',
//   date: '',
//   description: '',
//   storyImage: ''
// }








const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  links: {
    textDecoration: 'none',
    color: 'white',
    margin: 3
  },
}))

  
function App() {
  
  const classes = useStyles();
  const history = useHistory();
  const [ modalOpen, setModalOpen ]= useState(false)
  

  // Gsap Animation
  let app = useRef(null);

 
useEffect(() =>{
  
  TweenMax.to(app, 0, {css:{visibility:'visible'}})
 
 })

  return (
  <div ref= {element => app=element}>
   
      <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Button>
                    <Link to='/' className={classes.links}>Login</Link>
                </Button>
                <Button>
                    <Link to='/sign-up' className={classes.links}>Sign Up</Link>
                </Button>
        
                  <Button>
                    <Link to='/home' className={classes.links}>Home</Link>
                </Button>
                <div className={classes.icon}>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      color="inherit"
                      onClick={() => history.push('/dashboard')}
                    >
                          <AccountCircle />
                    </IconButton>
              </div>
          </Toolbar>
        </AppBar>  

     <Switch>
          <Route exact path='/' component={Login}>
            <Login />
          </Route>

          <Route path='/sign-up' component={SignUp}>
            <SignUp onClick={()=> setModalOpen(true)} />
          </Route>
    
          <Route path='/home'>
            <Home/>
          </Route>

          <Route path='/dashboard' component={Dashboard}>
            <Dashboard />
         </Route>
    </Switch>

   </div>

  )
}

export default App;
