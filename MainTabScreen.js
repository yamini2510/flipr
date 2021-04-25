import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Dashboard from "./Dashboard";
import { COLORS, FONTS, icons } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import dreamteam from "./dreamteam";
import calendar from "./calendar";
import notifications from "./notifications";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    activeColor="#4096FE"
    inactiveColor="#464646"
    inactiveBackgroundColor="#464646"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.black,
          borderTopColor: "transparent",
          height: 100,
          
        },
        
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardStackScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <Icon name="location" color={color} size={35} />
              ),
            }}
      />
      <Tab.Screen
        name="group"
        component={dreamteamStackScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <FontAwesome name="group" color={color} size={30} />
              ),
            }}
      />
      <Tab.Screen
        name="Calendar"
        component={calendarStackScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <FontAwesome name="calendar" color={color} size={30} />
              ),
            }}
      />
      <Tab.Screen
        name="Plane"
        component={notificationsStackScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <Icon name="notifications" color={color} size={35} />
              ),
            }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.blue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
const DashboardStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="Dashboard" component={Dashboard} />
  </RootStack.Navigator>
);
const dreamteamStackScreen = ({ navigation }) => (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="dreamteam" component={dreamteam} />
    </RootStack.Navigator>
  );
  const calendarStackScreen = ({ navigation }) => (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="calendar" component={calendar} />
    </RootStack.Navigator>
  );
  const notificationsStackScreen = ({ navigation }) => (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="notifications" component={notifications} />
    </RootStack.Navigator>
  );