import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { OnboardScreen, ScanQrScreen, ShowQrScreen } from '@screens'

const Stack = createStackNavigator()

const OnBoardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="OnboardScreen">
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      <Stack.Screen name="ShowQrScreen" component={ShowQrScreen} />
      <Stack.Screen name="ScanQrScreen" component={ScanQrScreen} />
    </Stack.Navigator>
  )
}
export { OnBoardStack }
