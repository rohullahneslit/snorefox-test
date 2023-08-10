import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { CellularIcon, DarkModeIcon, LanguageIcon } from '@assets/svg'
import { TextRegular } from '@components'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { SwitchButton } from './SwitchButton'
import { Colors } from '@styles'

const AppearanceComponent = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [useCellularData, setUseCellularData] = useState<boolean>(false)

  return (
    <>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginBottom: heightPercentageToDP(0.5),
        }}>
        <TextRegular style={{ fontSize: RFValue(9) }}>APPEARANCE</TextRegular>
      </View>
      <View style={styles.settingsBox}>
        <View style={styles.individualItem}>
          <View style={{ width: '13%' }}>
            <LanguageIcon />
          </View>
          <View style={{ width: '87%' }}>
            <TextRegular style={{ fontSize: RFValue(13) }}>
              Language
            </TextRegular>
          </View>
        </View>

        {/* Seperator between the divs  */}
        <View
          style={{
            alignSelf: 'center',
            borderWidth: 0.5,
            width: '100%',
            borderColor: Colors.borderColor,
          }}
        />

        <View style={[styles.individualItem, { opacity: darkMode ? 1 : 0.5 }]}>
          <View style={{ width: '13%' }}>
            <DarkModeIcon />
          </View>
          <View style={{ width: '70%' }}>
            <TextRegular style={{ fontSize: RFValue(13) }}>
              Dark Mode
            </TextRegular>
          </View>
          <View style={{ width: '17%' }}>
            <SwitchButton switchMode={darkMode} setSwitchMode={setDarkMode} />
          </View>
        </View>

        {/* Seperator between the divs  */}
        <View
          style={{
            alignSelf: 'center',
            borderWidth: 0.5,
            width: '100%',
            borderColor: Colors.borderColor,
          }}
        />

        <View
          style={[
            styles.individualItem,
            { opacity: useCellularData ? 1 : 0.5 },
          ]}>
          <View style={{ width: '13%' }}>
            <CellularIcon />
          </View>
          <View style={{ width: '70%' }}>
            <TextRegular style={{ fontSize: RFValue(13) }}>
              Use cellular data for upload
            </TextRegular>
          </View>
          <View style={{ width: '17%' }}>
            {/* Switch Button */}
            <SwitchButton
              switchMode={useCellularData}
              setSwitchMode={setUseCellularData}
            />
          </View>
        </View>
      </View>
    </>
  )
}

export { AppearanceComponent }

const styles = StyleSheet.create({
  settingsBox: {
    backgroundColor: Colors.white,
    marginBottom: heightPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(5),
    paddingVertical: heightPercentageToDP(1),
  },
  individualItem: {
    flexDirection: 'row',
    marginVertical: heightPercentageToDP(0.6),
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP(4),
  },
})
