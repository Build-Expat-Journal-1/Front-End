import React from 'react';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import PrivateRoute from './utils/PrivateRoute'



function App() {

  return (
   <div>
      <ul>
          <li>
              <Link to='/login'>Login</Link>
          </li>
          <li>
              <Link to='/sign-up'>Sign Up</Link>
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
    </Switch>
   </div>
  )
}

export default App;
