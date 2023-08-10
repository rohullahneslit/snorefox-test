import React from 'react'
import {
  StyleProp,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ViewStyle,
  View,
} from 'react-native'
import { Colors } from '@styles'

type Props = React.ComponentProps<typeof TouchableOpacity> &
  React.ComponentProps<typeof TouchableNativeFeedback> & {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
    rippleEffect?: string
    useForeground?: boolean
  }
const Touchable = ({
  children,
  rippleEffect,
  useForeground = true,
  style,
  ...rest
}: Props) =>
  Platform.OS === 'android' ? (
    <TouchableNativeFeedback
      {...rest}
      background={TouchableNativeFeedback.Ripple(
        rippleEffect ?? Colors.rippleEffect,
        false,
      )}
      useForeground={useForeground}>
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity style={style} {...rest}>
      {children}
    </TouchableOpacity>
  )
export { Touchable }
