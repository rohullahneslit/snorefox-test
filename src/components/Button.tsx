import React from 'react'
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Button as RNButton,
} from 'react-native'
import { Touchable } from './Touchable'
import { TextMedium } from './Text'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { Colors } from '@styles'
import { RFValue } from 'react-native-responsive-fontsize'

type Props = React.ComponentProps<typeof RNButton> & {
  mainContainerStyle?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  loading?: boolean
  primary?: boolean
  warning?: boolean
  regularText?: boolean
  textStyle?: StyleProp<TextStyle>
  rippleEffect?: string
}

const Button = ({
  title,
  style,
  primary = true,
  regularText = false,
  loading = false,
  textStyle,
  rippleEffect,
  mainContainerStyle,
  containerStyle,
  ...restProps
}: Props) => {
  return (
    <Touchable onPress={restProps.onPress}>
      <View
        style={[
          styles.mainContainer,
          primary ? styles.primaryStyle : styles.secondaryStyle,
        ]}>
        <TextMedium
          style={[primary ? styles.primaryText : styles.secondaryText]}>
          {title}
        </TextMedium>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
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
  primaryStyle: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  primaryText: {
    color: Colors.white,
    fontSize: RFValue(13),
  },
  secondaryStyle: {
    backgroundColor: Colors.secondary,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  secondaryText: {
    color: Colors.black,
    fontSize: RFValue(13),
  },
})
export { Button }
