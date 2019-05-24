import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CommentScreen from '../screens/CommentScreen';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Home: HomeScreen,
  Links:LinksScreen,
  Login:LoginScreen,
  Register:RegisterScreen,
  Comment:CommentScreen,
  Main: MainTabNavigator,
 
},
{
  initialRouteName: 'Login',
}

));