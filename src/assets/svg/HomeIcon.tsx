import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Svg, { SvgProps, Path } from 'react-native-svg'
const HomeIcon = (props: SvgProps) => (
  <Svg width={RFValue(20)} height={RFValue(20)} fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m16 2-9-9-9 9"
    />
  </Svg>
)
export { HomeIcon }
