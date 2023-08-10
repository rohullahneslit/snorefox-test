import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '@screens'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Homescreen">
      <Stack.Screen name="Homescreen" component={HomeScreen} />
    </Stack.Navigator>
  )
}
export { HomeStack }
