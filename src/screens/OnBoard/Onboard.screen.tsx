import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  FullScreenView,
  HeaderBar,
  TextBold,
  TextMedium,
  TextRegular,
  Touchable,
} from '@components'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { BedIcon, DoubleBedIcon, SingleBedIcon } from '@assets/svg'
import { NavigationService } from '@utilities'

const OnboardScreen = () => {
  return (
    <FullScreenView>
      <HeaderBar
        showMedText={false}
        onSkipPress={() =>
          NavigationService.navigate('BottomTab', { screen: 'HomeStack' })
        }
      />
      <View style={styles.mainContainer}>
        <View style={{ marginVertical: heightPercentageToDP(2) }}>
          <TextBold style={{ fontSize: RFValue(18), marginBottom: 5 }}>
            Sleep alone
          </TextBold>
          <TextRegular style={{ fontSize: RFValue(14), color: '#66514C' }}>
            Snoring and breathing noises from the bed partner or pets falsify
            measurement results. Therefore: sleep alone.
          </TextRegular>
        </View>
        <View style={styles.middleContainer}>
          <BedIcon />
          <TextRegular style={{ fontSize: RFValue(13), color: '#66514C' }}>
            Sleep alone
          </TextRegular>
        </View>
        <View style={{ marginVertical: heightPercentageToDP(3) }}>
          <Touchable
            rippleEffect="gray"
            onPress={() => NavigationService.navigate('ShowQrScreen', {})}>
            <View style={styles.individualsButtons}>
              <View style={styles.subButtonText}>
                <TextRegular style={{ color: 'white' }}>Med</TextRegular>
              </View>
              <View style={{ flex: 1 }}>
                <DoubleBedIcon />
              </View>
              <View style={{ flex: 6 }}>
                <TextMedium style={styles.buttonText}>
                  Add a Second sleeper
                </TextMedium>
              </View>
            </View>
          </Touchable>
          <Touchable
            rippleEffect="gray"
            onPress={() =>
              NavigationService.navigate('BottomTab', { screen: 'HomeStack' })
            }>
            <View style={styles.individualsButtons}>
              <View style={{ flex: 1 }}>
                <SingleBedIcon />
              </View>
              <View style={{ flex: 6 }}>
                <TextMedium style={styles.buttonText}>Sleep alone</TextMedium>
              </View>
            </View>
          </Touchable>
        </View>
      </View>
    </FullScreenView>
  )
}

export { OnboardScreen }

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flex: 1,
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
  buttonText: {
    color: 'red',
    fontSize: RFValue(13),
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
  subButtonText: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    paddingVertical: heightPercentageToDP(0.2),
    paddingHorizontal: widthPercentageToDP(4),
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 13,
  },
})
