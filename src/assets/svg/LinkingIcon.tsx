import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'
const LinkingIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6.5)}
    height={widthPercentageToDP(6.5)}
    fill="none"
    {...props}>
    <G
      stroke={props.color ? props.color : '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.395}
      clipPath="url(#a)">
      <Path d="M9.584 12.459a4.792 4.792 0 0 0 7.226.517l2.875-2.875a4.792 4.792 0 0 0-6.776-6.775l-1.648 1.638" />
      <Path d="M13.417 10.543a4.79 4.79 0 0 0-7.226-.518L3.316 12.9a4.792 4.792 0 0 0 6.775 6.776l1.639-1.64" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color ? props.color : '#fff'} d="M0 0h23v23H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export { LinkingIcon }
