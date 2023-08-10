/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react'
import { Appearance, Platform, StatusBar, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from '@styles'
import { Root } from '@navigation'
import NavigationService from './src/utilities/NavigationService'
import { Provider } from 'react-redux'
import store from '@store'
import { useUser } from '@hooks'
type STATUBARSTYLE = 'default' | 'dark-content' | 'light-content'
type ColorSchemeName = 'light' | 'dark' | null | undefined
const App = () => {
  const [barStyle, setBarStyle] = useState<STATUBARSTYLE>('default')
  const theme: ColorSchemeName = Appearance.getColorScheme()

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setBarStyle('dark-content')
    } else {
      setBarStyle('light-content')
    }
  }, [theme])
  useUser()
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}>
          <StatusBar
            backgroundColor={Colors.black}
            animated={true}
            barStyle={barStyle}
            hidden={false}
          />

          <Root />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
