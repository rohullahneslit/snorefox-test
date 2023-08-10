import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
const LogoutIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M0 10a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4-4a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-4-4a1.004 1.004 0 1 0-1.42 1.42L8.59 9H1a1 1 0 0 0-1 1ZM13 0H3a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"
    />
  </Svg>
)
export { LogoutIcon }
