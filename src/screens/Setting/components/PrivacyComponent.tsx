import { StyleSheet, View } from 'react-native'
import React from 'react'
import { DisclaimerIcon, PrivacyIcon, TermsConditionsIcon } from '@assets/svg'
import { TextRegular, Touchable } from '@components'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { Colors } from '@styles'

const PrivacyComponent = () => {
  return (
    <>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginBottom: heightPercentageToDP(0.5),
        }}>
        <TextRegular style={{ fontSize: RFValue(9) }}>PRIVACY</TextRegular>
      </View>
      <View style={styles.settingsBox}>
        <Touchable style={styles.individualItem}>
          <View style={{ width: '13%' }}>
            <PrivacyIcon />
          </View>
          <View style={{ width: '87%' }}>
            <TextRegular style={{ fontSize: RFValue(13) }}>
              Privacy Policy
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
              <TermsConditionsIcon />
            </View>
            <View style={{ width: '87%' }}>
              <TextRegular style={{ fontSize: RFValue(13) }}>
                Terms of Use
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

        <Touchable style={styles.individualItem}>
          <View style={styles.individualItem}>
            <View style={{ width: '13%' }}>
              <DisclaimerIcon />
            </View>
            <View style={{ width: '87%' }}>
              <TextRegular style={{ fontSize: RFValue(13) }}>
                Disclaimer
              </TextRegular>
            </View>
          </View>
        </Touchable>
      </View>
    </>
  )
}

export { PrivacyComponent }

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
