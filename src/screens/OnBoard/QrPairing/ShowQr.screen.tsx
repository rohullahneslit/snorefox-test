import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import {
  Button,
  FullScreenView,
  HeaderBar,
  TextBold,
  TextRegular,
} from '@components'

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { useConnect, useNetInfo } from '@hooks'
import { NavigationService } from '@utilities'
import { Colors } from '@styles'
import { useUserSelector } from '@store'
const ShowQrScreen = () => {
  const { user } = useUserSelector(state => state)
  const { ipServer, deviceName, pairToken } = useNetInfo()
  const {} = useConnect(true)
  return (
    <FullScreenView>
      <HeaderBar showBackButton />
      <View style={styles.parentContainer}>
        <View style={styles.upperContainer}>
          <TextBold style={{ fontSize: RFValue(18), marginBottom: 10 }}>
            Scan your partners code
          </TextBold>
          <TextRegular
            style={{
              fontSize: RFValue(14),
              textAlign: 'center',
              color: '#66514C',
            }}>
            Snoring and breathing noises from the bed partner or pets falsify
            measurement results. Therefore: sleep alone.
          </TextRegular>
        </View>
        <View style={styles.middleContainer}>
          {ipServer ? (
            <QRCode
              value={JSON.stringify({
                ipServer,
                deviceName,
                pairToken,
                userId: user._id,
              })}
              size={RFValue(110)}
            />
          ) : (
            <ActivityIndicator color={Colors.primary} />
          )}
        </View>
        <View style={{ marginVertical: heightPercentageToDP(3) }}>
          <Button
            title="Scan"
            onPress={() => NavigationService.navigate('ScanQrScreen', {})}
          />
          <Button
            primary={false}
            title="Cancel"
            onPress={() => NavigationService.goBack()}
          />
        </View>
      </View>
    </FullScreenView>
  )
}

export { ShowQrScreen }

const styles = StyleSheet.create({
  parentContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  upperContainer: {
    marginVertical: heightPercentageToDP(2),
    alignItems: 'center',
    alignSelf: 'center',
  },

  middleContainer: {
    width: widthPercentageToDP('40%'),
    height: widthPercentageToDP('40%'),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#fff',
  },
  individualsButtons: {
    marginVertical: heightPercentageToDP(1),
    paddingVertical: heightPercentageToDP(1.5),
    paddingHorizontal: widthPercentageToDP(3),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 13,
    justifyContent: 'center',
    overflow: 'hidden',
  },
})
