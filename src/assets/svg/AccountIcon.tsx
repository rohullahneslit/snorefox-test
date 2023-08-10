import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
const AccountIcon = (props: SvgProps) => (
  <Svg width={RFValue(21)} height={RFValue(21)} fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
    />
    <Circle cx={12} cy={7} r={3} stroke={props.color} strokeWidth={2} />
  </Svg>
)
export { AccountIcon }
