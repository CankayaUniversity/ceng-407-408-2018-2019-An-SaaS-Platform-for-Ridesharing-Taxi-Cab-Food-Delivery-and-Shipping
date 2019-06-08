import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
// import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CommentScreen from '../screens/CommentScreen';
import RouteScreen from '../screens/RouteScreen';
// import ProfileScreen from '../screens/LoginScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      Links: LinksScreen,
      Route: RouteScreen,
      //   Login: LoginScreen,
      Register: RegisterScreen,
      Comment: CommentScreen,
      Main: MainTabNavigator,
    //   Profile: ProfileScreen,
    },
    {
      initialRouteName: 'Main',
    }
  )
);
