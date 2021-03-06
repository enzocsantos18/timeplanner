import React from 'react';
import {Switch} from 'react-router-dom'
import Route from './Route'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'



export default function Routes(){
  return(
    <Switch>

      <Route path="/" exact component={Login}></Route>
      <Route path="/home" isPrivate component={Home}></Route>
      <Route path="/register" component={Register}></Route>


    </Switch>
  )
}