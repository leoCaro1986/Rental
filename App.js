/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/auth/screens/login/LoginScreen';
import registerUserScreen from './src/register/screens/register_user/registerUserScreen';
import listPropertyScreen from './src/propertys/screens/list_Propertys/listPropertyScreen';
import SplashScreen from './src/splash/screens/splash-screen/SplashScreen';
import ListUserScreen from './src/user/screen/list_users/ListUserScreen';

const Stack = createStackNavigator(); //inicializa navegación
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="register" component={registerUserScreen} options={{headerShown: false}}/>
        <Stack.Screen name="listProperty" component={listPropertyScreen} options={{headerShown: false}}/>
        <Stack.Screen name="listUser" component={ListUserScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

