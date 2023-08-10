import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path } from 'react-native-svg'
const PrivacyIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M8 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Zm.38-2.92A1 1 0 0 0 7.8 9l-.18.06-.18.09-.15.12A1 1 0 0 0 7 10a1 1 0 0 0 .29.71 1 1 0 0 0 .33.21 1 1 0 0 0 1.09-.21A1 1 0 0 0 9 10a1 1 0 0 0-.29-.71 1.15 1.15 0 0 0-.33-.21ZM16 6.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.1A1.1 1.1 0 0 0 9.06 0H3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6.94Zm-6-3.53L12.59 6H11a1 1 0 0 1-1-1V3.41ZM14 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Z"
    />
  </Svg>
)
export { PrivacyIcon }
