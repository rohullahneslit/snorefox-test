import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path } from 'react-native-svg'
const BulbIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M13.09 1.821A8 8 0 0 0 6.41.161a8 8 0 0 0-6.27 6.32 8.07 8.07 0 0 0 1.72 6.65A4.54 4.54 0 0 1 3 16.001v3a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2.81a5.17 5.17 0 0 1 1.22-3.19 8 8 0 0 0-1.13-11.2v.02ZM11 19.001a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1h6v1Zm1.67-7.24a7.13 7.13 0 0 0-1.67 4.24H9v-3a1 1 0 1 0-2 0v3H5a6.5 6.5 0 0 0-1.6-4.16 6 6 0 0 1 3.39-9.72A6 6 0 0 1 14 8.001a5.89 5.89 0 0 1-1.33 3.76Z"
    />
  </Svg>
)
export { BulbIcon }
