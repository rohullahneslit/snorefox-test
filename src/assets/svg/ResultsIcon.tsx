import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Svg, { SvgProps, Path } from 'react-native-svg'
const ResultsIcon = (props: SvgProps) => (
  <Svg width={RFValue(20)} height={RFValue(20)} fill="none" {...props}>
    <Path
      fill={props.color}
      d="M10 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Zm-5 6a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Zm10-2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Zm2-8H3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14Z"
    />
  </Svg>
)
export { ResultsIcon }
