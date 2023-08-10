import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
const CloudIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(4)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M17.42 4.208a7 7 0 0 0-13.36 1.9 4 4 0 0 0 .94 7.89h11a5 5 0 0 0 1.42-9.79ZM16 11.998H5a2 2 0 1 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.66 3 3 0 0 1-.51 5.95Z"
    />
  </Svg>
)
export { CloudIcon }
