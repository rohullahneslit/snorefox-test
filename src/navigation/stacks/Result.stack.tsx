import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HeaderBar } from '@components'
import { ResultsScreen } from '@screens'

const Stack = createStackNavigator()

const ResultsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ResultsScreen">
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
    </Stack.Navigator>
  )
}
export { ResultsStack }
