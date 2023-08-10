import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
const DarkModeIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M19.64 11a1 1 0 0 0-1.05-.14 8.052 8.052 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 6 .36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 5.08 3.22v.27a10.15 10.15 0 0 0 12.24 9.92 8.11 8.11 0 0 1-7.18 4.32v-.04Z"
    />
  </Svg>
)
export { DarkModeIcon }
