import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { NotificationIcon } from '@assets/svg'
import { TextRegular } from '@components'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { SwitchButton } from './SwitchButton'
import { Colors } from '@styles'

const NotificationComponent = () => {
  const [notification, setNotification] = useState<boolean>(false)
  const [notificationReminder, setNotificationReminder] =
    useState<boolean>(false)

  return (
    <>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginBottom: heightPercentageToDP(0.5),
        }}>
        <TextRegular style={{ fontSize: RFValue(9) }}>NOTIFICATION</TextRegular>
      </View>
      <View style={styles.settingsBox}>
        <View
          style={[styles.individualItem, { opacity: notification ? 1 : 0.5 }]}>
          <View style={{ width: '13%' }}>
            <NotificationIcon />
          </View>
          <View style={{ width: '70%' }}>
            <TextRegular style={{ fontSize: RFValue(13) }}>
              Notifications
            </TextRegular>
          </View>
          <View style={{ width: '17%' }}>
            <SwitchButton
              switchMode={notification}
              setSwitchMode={setNotification}
            />
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
            { opacity: notificationReminder ? 1 : 0.5 },
          ]}>
          <View style={{ width: '13%' }}>
            <NotificationIcon />
          </View>
          <View style={{ width: '70%' }}>
            <TextRegular style={{ fontSize: RFValue(13) }}>
              Reminder notifications
            </TextRegular>
          </View>
          <View style={{ width: '17%' }}>
            {/* Switch Button */}
            <SwitchButton
              switchMode={notificationReminder}
              setSwitchMode={setNotificationReminder}
            />
          </View>
        </View>
      </View>
    </>
  )
}

export { NotificationComponent }

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
