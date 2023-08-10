import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  FullScreenView,
  HeaderBar,
  TextMedium,
  TextRegular,
  Touchable,
} from '@components'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  BulbIcon,
  LinkingIcon,
  MeasurementIcon,
  MediBagIcon,
  MedicalIcon,
} from '@assets/svg'

const HomeScreen = () => {
  return (
    <FullScreenView>
      <HeaderBar showMedText />
      <View style={styles.parentContainer}>
        <View style={styles.upperContainer}>
          <TextRegular style={styles.headingText}>
            Well done! You are now using the Medical version of Snorefox. A
            little more information will be collected to support the risk
            analysis for Sleep Apnea.
          </TextRegular>
        </View>
        <View style={{ marginVertical: heightPercentageToDP(3) }}>
          <Touchable
            style={[styles.individualsButtons, { backgroundColor: 'red' }]}>
            <View style={{ flex: 1 }}>
              <MeasurementIcon />
            </View>
            <View style={{ flex: 6 }}>
              <TextMedium style={[styles.buttonText, { color: '#fff' }]}>
                Start Measurement
              </TextMedium>
            </View>
            <View style={{ flex: 1 }}>
              <LinkingIcon />
            </View>
          </Touchable>
          <Touchable
            style={[
              styles.individualsButtons,
              { borderColor: 'rgba(0,0,0,0.2)' },
            ]}>
            <View style={{ flex: 1 }}>
              <MediBagIcon />
            </View>
            <View style={{ flex: 6 }}>
              <TextMedium style={styles.buttonText}>View results</TextMedium>
            </View>
          </Touchable>
          <Touchable
            style={[
              styles.individualsButtons,
              { borderColor: 'rgba(0,0,0,0.2)' },
            ]}>
            <View style={{ flex: 1 }}>
              <BulbIcon />
            </View>
            <View style={{ flex: 6 }}>
              <TextMedium style={styles.buttonText}>Learn more</TextMedium>
            </View>
          </Touchable>
          <Touchable
            style={[
              styles.individualsButtons,
              { marginTop: heightPercentageToDP(8) },
            ]}>
            <View style={styles.subButtonText}>
              <TextRegular style={{ color: 'white' }}>
                Start Treatment now!
              </TextRegular>
            </View>
            <View style={{ flex: 1 }}>
              <MedicalIcon />
            </View>
            <View style={{ flex: 6 }}>
              <TextMedium style={styles.buttonText}>Find a doctor</TextMedium>
            </View>
          </Touchable>
        </View>
      </View>
    </FullScreenView>
  )
}

export { HomeScreen }

const styles = StyleSheet.create({
  parentContainer: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  upperContainer: {
    marginVertical: heightPercentageToDP(2),
    alignItems: 'center',
    alignSelf: 'center',
  },
  headingText: {
    fontSize: RFValue(14),
    textAlign: 'center',
    color: '#66514C',
  },
  buttonText: {
    color: '#000',
    fontSize: RFValue(13),
  },
  middleContainer: {
    width: widthPercentageToDP('85%'),
    height: widthPercentageToDP('85%'),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#40261F',
  },
  individualsButtons: {
    marginVertical: heightPercentageToDP(1),
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(3),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 13,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  subButtonText: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    paddingVertical: heightPercentageToDP(0.2),
    paddingHorizontal: widthPercentageToDP(4),
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
  },
})
