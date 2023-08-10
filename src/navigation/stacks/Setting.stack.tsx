import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SettingScreen } from '@screens'

const Stack = createStackNavigator()

const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SettingScreen">
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  )
}
export { SettingStack }
