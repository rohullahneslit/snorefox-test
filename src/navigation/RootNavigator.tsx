import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { BottomTab } from './tab'
import { OnBoardStack } from './stacks'
import { useUserSelector } from '@store'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'

const Stack = createStackNavigator()
const RootNavigator = () => {
  const { paireDevice } = useUserSelector(state => state)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  if (loading) {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require('../assets/pngs/AppLogo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={!paireDevice.remoteIp ? 'OnBoardStack' : 'BottomTab'}>
      <Stack.Screen name="OnBoardStack" component={OnBoardStack} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({
  mainContainer: {
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: widthPercentageToDP(40),
    height: heightPercentageToDP(15),
  },
})
