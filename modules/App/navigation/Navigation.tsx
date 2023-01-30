import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import React from 'react'
import AuthenticationScreen from '../../Authentication/AuthenticationScreen'
import HomeScreen from '../../Home/HomeScreen'
import NavigationBar from './components/NavigationBar'

/* ================
  Stack Navigator
================= */
const AuthenticationStack = createStackNavigator()

const StackNavigatorOptions: StackNavigationOptions = {
  headerShown: false,
}

function AuthenticationStackScreen() {
  return (
    <AuthenticationStack.Navigator screenOptions={StackNavigatorOptions}>
      <AuthenticationStack.Screen
        name="LoginScreen"
        component={AuthenticationScreen}
      />
    </AuthenticationStack.Navigator>
  )
}

const HomeStack = createStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={StackNavigatorOptions}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

/* ================
  Tab Navigator
================= */
const Tab = createBottomTabNavigator()

const TabNavigatorOptions: BottomTabNavigationOptions = {
  headerShown: false,
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={TabNavigatorOptions} tabBar={NavigationBar}>
      <Tab.Screen
        name="Authentication"
        component={AuthenticationStackScreen}
        initialParams={{
          initialScreen: 'LoginScreen',
          icon: {
            name: 'rocket-launch-outline',
            type: 'material-community',
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        initialParams={{
          initialScreen: 'HomeScreen',
          icon: {
            name: 'home',
            type: 'antdesign',
          },
        }}
      />
    </Tab.Navigator>
  )
}

/* ================
  MAIN
================= */
const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default Navigation
