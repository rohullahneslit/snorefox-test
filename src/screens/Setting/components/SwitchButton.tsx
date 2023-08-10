import { Colors } from '@styles'
import React from 'react'
import { StyleSheet } from 'react-native'
import SwitchToggle from 'react-native-switch-toggle'

const SwitchButton = ({ switchMode, setSwitchMode }) => {
  return (
    <SwitchToggle
      switchOn={switchMode}
      onPress={() => setSwitchMode(!switchMode)}
      containerStyle={styles.mainContainer}
      circleStyle={styles.circleStyles}
      circleColorOff={Colors.white}
      circleColorOn={Colors.white}
      backgroundColorOn={Colors.primary}
      backgroundColorOff={Colors.siwtchBackground}
    />
  )
}

export { SwitchButton }

const styles = StyleSheet.create({
  mainContainer: {
    width: 50,
    height: 28,
    borderRadius: 25,
    padding: 5,
  },
  circleStyles: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
})
