import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
const HeartIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M19.16 2A6.29 6.29 0 0 0 11 1.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84Zm-1.41 7.46-6.21 6.21a.76.76 0 0 1-1.08 0L4.25 9.43a4.29 4.29 0 0 1 0-6 4.27 4.27 0 0 1 6 0 .999.999 0 0 0 1.42 0 4.27 4.27 0 0 1 6 0 4.29 4.29 0 0 1 .08 6v.03Z"
    />
  </Svg>
)
export { HeartIcon }
