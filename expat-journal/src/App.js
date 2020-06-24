import React, {useRef,useEffect} from 'react';
import { BrowserRouter as Route, Link, Switch, useHistory } from 'react-router-dom';

import './App.css';

// import PostContext from './contexts'

import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import PrivateRoute from './utils/PrivateRoute'
import Profile from './components/Profile'
<<<<<<< HEAD
import {TweenMax, TimelineLite, Power3} from 'gsap'
=======
import Dashboard from './components/Dashboard'

import {TweenMax, TimelineLite, Power3} from 'gsap'

>>>>>>> 950a614cf2f48b2c6b7096a84d8d6f85f860dca3
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Button, IconButton } from '@material-ui/core';
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

  // const [ storyToEdit, setStoryToEdit ] = useState(initalStory);

  // const editStory = story => {
  //     setEditing(true);
  //     setStoryToEdit(story);
  // };

  // const saveEdit = e => {
  //     axiosWithAuth()
  //     .put(`/api/stories/${storyToEdit.id}`, storyToEdit)
  //     .then(res => 
  //         console.log(res))
  //     .catch(err => console.log(err))
  // }

  // Gsap Animation
  let app = useRef(null);
<<<<<<< HEAD
       useEffect(() =>{
        TweenMax.to(app, 0, {css:{visibility:'visible'}})
      })
// End of Animation
=======

 
useEffect(() =>{
  
  TweenMax.to(app, 0, {css:{visibility:'visible'}})
 
 })

>>>>>>> 51ba95ff88e12fd94e4c35ff39f0134a9c6e85f8
  return (
  <div ref= {element => app=element}>
<<<<<<< HEAD
   <AppBar className={classes.root} position='static'>
        <Toolbar>
            <Button>
                <Link to='/login' className={classes.links}>Login</Link>
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
                  onClick={() => history.push('/profile')}
                >
                      <AccountCircle />
                </IconButton>
          </div>
      </Toolbar>
    </AppBar>
=======
        <AppBar className={classes.root} position='static'>
              <Toolbar>
                  <Button>
                      <Link to='/login' className={classes.links}>Login</Link>
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
>>>>>>> 950a614cf2f48b2c6b7096a84d8d6f85f860dca3

     <Switch>
          <Route path='/login' component={Login}>
            <Login />
          </Route>

          <Route path='/sign-up' component={SignUp}>
            <SignUp />
          </Route>
    
          <Route path='/home'>
            <Home/>
          </Route>
<<<<<<< HEAD
    
          <Route path='/profile' component={Profile}/>
          <PrivateRoute path='/profile/:id' component={Profile}/>

=======
          <Route path='/dashboard' component={Dashboard}>
            <Dashboard />
         </Route>
>>>>>>> 950a614cf2f48b2c6b7096a84d8d6f85f860dca3
    </Switch>

   </div>

  )
}

export default App;
