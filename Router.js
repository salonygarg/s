import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/Screens/Login';
import EnterEmail from './src/Screens/EnterEmail';
import NewPassword from './src/Screens/NewPassword';
import SignUp from './src/Screens/SignUp';
const Routing = createStackNavigator(
  {
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    EnterEmail: {screen: EnterEmail},
    NewPassword: {screen: NewPassword},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    mode: 'card',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);
const AppContainer = createAppContainer(Routing);

const Router = () => <AppContainer />;

export default Router;
