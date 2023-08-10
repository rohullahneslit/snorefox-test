import { Colors } from '@styles'
import React from 'react'
import { TextProps, Text as Text } from 'react-native'

type TextProp = TextProps & {
  children: React.ReactNode
  numberOfLines?: number | undefined
}

const RNText = ({ ...props }: TextProp) => (
  <Text
    {...props}
    style={[
      {
        fontFamily: 'SFCompactText-Bold',
        color: Colors.headingText,
      },
      props.style,
    ]}
  />
)

const TextRegular = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[
        {
          fontFamily: 'SFCompactText-Regular',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}
    />
  )
}
const TextBold = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[
        {
          fontFamily: 'SFCompactText-Bold',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}
    />
  )
}
const TextMedium = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[
        {
          fontFamily: 'SFCompactText-Medium',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}
    />
  )
}
export { TextRegular, TextBold, TextMedium }
