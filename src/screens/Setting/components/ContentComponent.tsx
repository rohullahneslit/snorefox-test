import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CloudIcon, LinkingIcon, StarIcon } from '@assets/svg'
import { TextRegular, Touchable } from '@components'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { SwitchButton } from './SwitchButton'
import { Colors } from '@styles'
import { NavigationService, Storage } from '@utilities'
import { useReduxDispatch, userActions } from '@store'
import { PairDevice } from 'models/PairDevice'

const ContentComponent = ({ secondSleeper }) => {
  const dispatch = useReduxDispatch()
  const [exportSwitch, setExportSwitch] = useState<boolean>(false)

  const handlePairingButton = () => {
    if (secondSleeper) {
      //Handle Logic if second sleeper is paired
      Storage.removeItem(Storage.StorageKeys.PAIRDEVICES)
      dispatch(userActions.setPairDevices({ pairInfo: {} as PairDevice }))
    } else {
      //Handle Logic if second sleeper is not paired
      NavigationService.navigate('OnBoardStack', { screen: 'ShowQrScreen' })
    }
  }

  return (
    <View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginBottom: heightPercentageToDP(0.5),
        }}>
        <TextRegular style={{ fontSize: RFValue(9) }}>CONTENT</TextRegular>
      </View>
      <View style={styles.settingsBox}>
        <Touchable style={styles.individualItem} onPress={handlePairingButton}>
          <View style={{ width: '13%' }}>
            <LinkingIcon color={'red'} />
          </View>
          <View style={{ width: '87%' }}>
            <TextRegular style={{ fontSize: RFValue(13) }}>
              {secondSleeper ? 'Unpair Second Sleeper' : 'Pair Second Sleeper'}
            </TextRegular>
          </View>
        </Touchable>

        {/* Seperator between the divs  */}
        <View
          style={{
            alignSelf: 'center',
            borderWidth: 0.5,
            width: '100%',
            borderColor: Colors.borderColor,
          }}
        />

        <Touchable style={styles.individualItem}>
          <View style={styles.individualItem}>
            <View style={{ width: '13%' }}>
              <StarIcon />
            </View>
            <View style={{ width: '87%' }}>
              <TextRegular style={{ fontSize: RFValue(13) }}>
                Premium subscription
              </TextRegular>
            </View>
          </View>
        </Touchable>

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
          style={[styles.individualItem, { opacity: exportSwitch ? 1 : 0.5 }]}>
          <View style={{ width: '13%' }}>
            <CloudIcon />
          </View>
          <View style={{ width: '70%' }}>
            <TextRegular style={{ fontSize: RFValue(13) }}>
              Export Data
            </TextRegular>
          </View>
          <View style={{ width: '17%' }}>
            {/* Switch Button */}
            <SwitchButton
              switchMode={exportSwitch}
              setSwitchMode={setExportSwitch}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export { ContentComponent }

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
