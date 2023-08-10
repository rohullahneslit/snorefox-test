import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path } from 'react-native-svg'
const BedIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(15)}
    height={widthPercentageToDP(15)}
    fill="none"
    {...props}>
    <Path
      fill="#40261F"
      stroke="#fff"
      strokeWidth={0.5}
      d="M24.75 30.625H25v-13.75a2 2 0 0 1 2-2h18a6.5 6.5 0 0 1 6.5 6.5v20.25a2 2 0 0 1-4 0v-7h-41v7a2 2 0 0 1-4 0v-29.25a2 2 0 0 1 4 0v18.25h18.25Zm22.5 0h.25v-9.25a2.5 2.5 0 0 0-2.5-2.5H29v11.75h18.25ZM19.361 26.78a6.5 6.5 0 1 1-7.222-10.81 6.5 6.5 0 0 1 7.222 10.81Zm-2.222-7.484a2.5 2.5 0 1 0-2.778 4.157 2.5 2.5 0 0 0 2.778-4.157Z"
    />
  </Svg>
)
export { BedIcon }
