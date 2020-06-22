import React from 'react';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom';

import './App.css';

import PostContext from './contexts'

import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import PrivateRoute from './utils/PrivateRoute'
import Profile from './components/Profile'


const initalStory = {
  title: '',
  location: '',
  date: '',
  description: '',
  storyImage: ''
}


function App() {

  const [ storyToEdit, setStoryToEdit ] = useState(initalStory);

  const editStory = story => {
      setEditing(true);
      setStoryToEdit(story);
  };

  const saveEdit = e => {
      axiosWithAuth()
      .put(`/api/stories/${storyToEdit.id}`, storyToEdit)
      .then(res => 
          console.log(res))
      .catch(err => console.log(err))
  }

  return (
      <PostContext.Provider value={} />
        <div>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/sign-up'>Sign Up</Link>
                </li>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
            </ul>

          <Switch>
            
                <Route path='/login' component={Login}>
                  <Login />
                </Route>

                <Route path='/sign-up' component={SignUp}>
                  <SignUp />
                </Route>
                <PrivateRoute path='/home' component={Home}/>
                <PrivateRoute path='/profile/:id' component={Profile}/>
          </Switch>
    </div>
  </PostContext.Provider>
  )
}

export default App;
