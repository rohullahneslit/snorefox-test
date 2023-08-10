import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
const SettingsIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Circle cx={12} cy={12} r={2} stroke={props.color} strokeWidth={2} />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.398 5.88A8.99 8.99 0 0 0 3.4 9.343l1.6.924c1.333.77 1.333 2.694 0 3.464l-1.602.924a9.03 9.03 0 0 0 2 3.464L7 17.196c1.334-.77 3 .192 3 1.732v1.847c1.3.297 2.668.306 4 .002v-1.849c0-1.54 1.667-2.502 3-1.732l1.602.925a8.991 8.991 0 0 0 1.998-3.466l-1.6-.923c-1.333-.77-1.333-2.694 0-3.464l1.601-.925a9.034 9.034 0 0 0-2-3.464l-1.6.925c-1.334.77-3-.193-3-1.732V3.225a8.99 8.99 0 0 0-4-.003v1.85c0 1.54-1.667 2.501-3 1.732l-1.602-.925Z"
    />
  </Svg>
)
export { SettingsIcon }
