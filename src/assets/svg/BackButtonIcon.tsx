import * as React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path } from 'react-native-svg'
const BackButtonIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(4)}
    height={widthPercentageToDP(4)}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="M.244 5.77c.006-.2.076-.37.235-.522l4.57-4.47a.636.636 0 0 1 .474-.194c.381 0 .68.293.68.674a.707.707 0 0 1-.205.492l-4.12 4.02 4.12 4.02a.683.683 0 0 1 .205.485.67.67 0 0 1-.68.68.636.636 0 0 1-.474-.193L.479 6.29a.697.697 0 0 1-.235-.521Z"
    />
  </Svg>
)
export { BackButtonIcon }
