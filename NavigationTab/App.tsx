import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name='Login' component={Login}  />
        <Tab.Screen name='SignUp' component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>  
  )
}

const Login = () => {
  return(
    <View>
      <Text>Login</Text>
    </View>
  )
}

const SignUp = () => {
  return(
    <View>
      <Text>SignUp</Text>
    </View>
  )
}


export default App