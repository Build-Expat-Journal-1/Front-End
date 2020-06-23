import React, {useRef,useEffect} from 'react';
import { BrowserRouter as Route, Link, Switch, useHistory } from 'react-router-dom';

import './App.css';

// import PostContext from './contexts'

import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import PrivateRoute from './utils/PrivateRoute'
import Profile from './components/Profile'
import {TweenMax, TimelineLite, Power3} from 'gsap'
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

  let app = useRef(null);

 
useEffect(() =>{
  
  TweenMax.to(app, 0, {css:{visibility:'visible'}})
 
 })

  return (
  <div ref= {element => app=element}>
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
    
          <Route path='/profile' component={Profile}/>
          <PrivateRoute path='/profile/:id' component={Profile}/>

    </Switch>
   </div>

  )
}

export default App;
