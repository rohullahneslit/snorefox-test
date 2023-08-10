import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, {
  SvgProps,
  Path,
  Circle,
  Mask,
  G,
  Defs,
  ClipPath,
} from 'react-native-svg'
const CellularIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Mask
      id="b"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      stroke="#FF6A42">
      <G
        stroke="#FF6A42"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        clipPath="url(#a)">
        <Path d="M12 20V10M18 20V4M6 20v-4" />
      </G>
    </Mask>
    <G mask="url(#b)">
      <Path fill="#FF6A42" stroke="#FF6A42" d="M2 1h23v24H2z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export { CellularIcon }
