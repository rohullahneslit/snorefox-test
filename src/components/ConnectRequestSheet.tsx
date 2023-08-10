import React, { memo, useEffect, useRef } from 'react'
import { StyleSheet, View, Image, Platform } from 'react-native'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { hasDynamicIsland, hasNotch } from 'react-native-device-info'
import { BottomSheet, BottomSheetRefProps } from './BottomSheet'
import { Colors } from '@styles'
import { TextBold, TextMedium, TextRegular } from './Text'
import { Button } from './Button'
import { useConnect } from '@hooks'
import { NavigationService } from '@utilities'

const BOTTOMSHEETHEIGHT = Platform.OS === 'android' ? 85 : 90
const isServer = false
const ConnectRequestSheet = memo(
  ({
    deviceName,
    remoteIp,
    remotePort,
    remotePairToken,
    remoteUserId,
    setRemoteIp,
  }: {
    deviceName: string
    remoteIp: string
    remotePort: string
    remotePairToken: string
    remoteUserId: string
    setRemoteIp: (val: string) => void
  }) => {
    const ref = useRef<BottomSheetRefProps>(null)

    useEffect(() => {
      if (!remoteIp) {
        ref?.current?.scrollTo(0)
      } else {
        ref?.current?.scrollTo(
          hasDynamicIsland()
            ? -heightPercentageToDP(BOTTOMSHEETHEIGHT + 2)
            : hasNotch()
            ? -heightPercentageToDP(BOTTOMSHEETHEIGHT)
            : -heightPercentageToDP(BOTTOMSHEETHEIGHT),
        )
      }
    }, [remoteIp])

    const onClosingSheet = () => {
      setRemoteIp('')
    }

    const { requestSendLoading, remotePaired, sendResponseMessage } =
      useConnect(isServer)
    return (
      <BottomSheet
        ref={ref}
        height={BOTTOMSHEETHEIGHT + 1.5}
        onClose={onClosingSheet}
        closeBottomSheet={onClosingSheet}>
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: widthPercentageToDP(5),
          }}>
          <TextMedium style={styles.mainHeadingText}>
            You received a pairing request
          </TextMedium>
          <TextMedium style={styles.subHeadingText}>
            Pairing two devices will associate both accounts for synchronised
            measurements in the second sleeper function
          </TextMedium>
          <TextMedium
            style={[
              styles.subButtonText,
              {
                textDecorationLine: 'underline',
              },
            ]}>
            Learn more
          </TextMedium>
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: heightPercentageToDP(5),
          }}>
          <Image
            source={require('../assets/pngs/Device.png')}
            style={{
              height: widthPercentageToDP(50),
              width: widthPercentageToDP(50),
            }}
          />
          <View
            style={[
              styles.subState,
              requestSendLoading
                ? styles.subStateWaiting
                : remotePaired
                ? styles.subStateAccepted
                : styles.subStateFound,
            ]}>
            <TextRegular
              style={[
                styles.subText,
                requestSendLoading
                  ? styles.subStateWaitingText
                  : remotePaired
                  ? styles.subStateAcceptedText
                  : styles.subStateFoundText,
                ,
              ]}>
              {requestSendLoading
                ? 'WAITING'
                : remotePaired
                ? 'ACCEPTED'
                : `Device Found`}
            </TextRegular>
          </View>
          <TextBold
            style={{
              marginTop: 20,
            }}>
            {requestSendLoading
              ? `Waiting for ${deviceName} to accept`
              : remotePaired
              ? 'Pairing successfull'
              : `Pair with ${deviceName}?`}
          </TextBold>
        </View>
        <View style={{ paddingHorizontal: widthPercentageToDP(2) }}>
          {remotePaired ? (
            <>
              <Button
                title="Start Measurment"
                primary={true}
                onPress={() =>
                  NavigationService.navigate('BottomTab', {
                    screen: 'HomeStack',
                  })
                }
              />
              <Button
                title="Cancel"
                primary={false}
                onPress={() =>
                  NavigationService.navigate('BottomTab', {
                    screen: 'SettingStack',
                  })
                }
              />
            </>
          ) : (
            <>
              <Button
                title="Pair Account"
                onPress={() =>
                  sendResponseMessage(
                    remoteUserId,
                    remotePairToken,
                    remoteIp,
                    remotePort,
                    deviceName,
                  )
                }
              />
              <Button title="Cancel" primary={false} onPress={onClosingSheet} />
            </>
          )}
        </View>
      </BottomSheet>
    )
  },
)

const styles = StyleSheet.create({
  mainHeadingText: {
    fontSize: RFValue(13),
    color: Colors.headingText,
    fontWeight: '500',
    marginBottom: heightPercentageToDP(2),
  },
  subHeadingText: {
    textAlign: 'center',
    fontSize: RFValue(13),
    color: Colors.headingText,
    fontWeight: '400',
  },
  subText: {
    textAlign: 'center',
    color: Colors.headingText,
    fontWeight: '300',
    fontSize: RFValue(11),
  },
  subState: {
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  subStateFound: {
    backgroundColor: '#EEE6EE',
  },
  subStateFoundText: {
    color: Colors.headingText,
  },
  subStateWaiting: {
    backgroundColor: '##F6A60940',
  },
  subStateWaitingText: {
    color: Colors.headingText,
  },
  subStateAccepted: {
    backgroundColor: '#E4F7EA',
  },
  subStateAcceptedText: {
    color: Colors.green,
  },
})

export { ConnectRequestSheet }
