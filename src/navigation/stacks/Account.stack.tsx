import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AccountScreen } from '@screens'

const Stack = createStackNavigator()

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AccountScreen">
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  )
}
export { AccountStack }
