import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  FullScreenView,
  TextBold,
  TextRegular,
  Touchable,
  VirtualizedView,
} from '@components'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { HeartIcon, HelpnSupportIcon, LogoutIcon } from '@assets/svg'
import {
  AppearanceComponent,
  ContentComponent,
  NotificationComponent,
  PrivacyComponent,
} from './components'
import { Colors } from '@styles'
import { useUserSelector } from '@store'

const SettingScreen = () => {
  const { paireDevice } = useUserSelector(state => state)
  return (
    <FullScreenView>
      <VirtualizedView>
        <View style={styles.titleContainer}>
          <TextRegular style={{ fontSize: RFValue(20) }}>Settings</TextRegular>
        </View>

        {/* Top Most Component of Settings  */}
        <View style={styles.settingsBox}>
          <Touchable style={styles.individualItem}>
            <View style={{ width: '13%' }}>
              <HeartIcon />
            </View>
            <View style={{ width: '87%' }}>
              <TextRegular style={{ fontSize: RFValue(13) }}>
                Rate Snorefox
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
            <View style={{ width: '13%' }}>
              <HelpnSupportIcon />
            </View>
            <View style={{ width: '87%' }}>
              <TextRegular style={{ fontSize: RFValue(13) }}>
                Help & Support
              </TextRegular>
            </View>
          </Touchable>
        </View>

        {/* Content Component for Settings --  secondSleeper prop is passed to render the pair/unpair button accoridingly*/}
        <ContentComponent secondSleeper={!!paireDevice.remoteIp} />
        {/* Notification Component for Settings */}
        <NotificationComponent />
        {/* Appearance Component for Settings */}
        <AppearanceComponent />
        {/* Privacy Component for Settings */}
        <PrivacyComponent />

        {/* Logout Component for Settings  */}
        <View style={[styles.settingsBox, { marginBottom: 0 }]}>
          <Touchable style={styles.individualItem}>
            <View style={{ width: '13%' }}>
              <LogoutIcon />
            </View>
            <View style={{ width: '87%' }}>
              <TextRegular style={{ fontSize: RFValue(13) }}>
                Logout
              </TextRegular>
            </View>
          </Touchable>
        </View>

        {/* Version Number Component  */}
        <View style={styles.versionContainer}>
          <TextRegular style={{ fontSize: RFValue(8) }}>
            {`Version: `}
            <TextBold>{`1.0 - UserID 13 - Aug 2023`}</TextBold>
          </TextRegular>
        </View>
      </VirtualizedView>
    </FullScreenView>
  )
}

export { SettingScreen }

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: 'center',
    marginVertical: heightPercentageToDP(3),
  },
  settingsBox: {
    backgroundColor: Colors.white,
    marginBottom: heightPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(5),
  },
  individualItem: {
    flexDirection: 'row',
    marginVertical: heightPercentageToDP(0.6),
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP(4),
  },
  versionContainer: {
    marginVertical: heightPercentageToDP(2),
    alignSelf: 'center',
  },
})
