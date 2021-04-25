import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import RootStack from "./screens/RootScreen"


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  )
}

export default App;