import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'

import { NavigationService } from '@utilities'
import { BackButtonIcon } from '@assets/svg'
import { Touchable } from './Touchable'
import { TextBold } from './Text'
import { Colors } from '@styles'
import { RFValue } from 'react-native-responsive-fontsize'

const HeaderBar = ({
  showBackButton,
  showMedText,
  onBackPress,
  onSkipPress,
}: {
  showBackButton?: boolean
  showMedText?: boolean
  onBackPress?: () => void
  onSkipPress?: () => void
}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.leftIconContainer]}>
        {(showBackButton || onBackPress) && (
          <Touchable
            onPress={() =>
              onBackPress ? onBackPress() : NavigationService.goBack()
            }>
            <View
              style={{
                height: '80%',
                justifyContent: 'center',
              }}>
              <BackButtonIcon />
            </View>
          </Touchable>
        )}
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/pngs/AppLogo.png')}
          style={{
            width: widthPercentageToDP(30),
            height: heightPercentageToDP(5),
          }}
          resizeMode="contain"
        />
        {showMedText && (
          <View style={styles.medTextContainer}>
            <TextBold
              style={{
                color: Colors.white,
              }}>
              MED
            </TextBold>
          </View>
        )}
      </View>
      <View style={styles.rightIconContainer}>
        {onSkipPress && (
          <Touchable onPress={onSkipPress}>
            <TextBold
              style={{
                color: Colors.headingText,
                fontWeight: '600',
                fontSize: RFValue(14),
              }}>
              Skip
            </TextBold>
          </Touchable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPercentageToDP(8),
    alignItems: 'center',
    width: widthPercentageToDP(90),
    alignSelf: 'center',
  },
  leftIconContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
    height: '100%',
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingBottom: '4%',
  },
  medTextContainer: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 5,
    right: widthPercentageToDP(0),
    bottom: heightPercentageToDP(2.7),
  },
})
export { HeaderBar }
