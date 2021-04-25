import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp';
import Login from './Login';
import MainTabScreen from './MainTabScreen';
import Games from './Games';
import calendar from './calendar';



const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name='Login' component={Login}/>
            <RootStack.Screen name='SignUp' component={SignUp}/>
            <RootStack.Screen name='MainTabScreen' component={MainTabScreen}/>
            <RootStack.Screen name='Games' component={Games}/>
        </RootStack.Navigator>
);
export default RootStackScreen;
