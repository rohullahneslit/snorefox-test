import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
const HelpnSupportIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M10.07 10h-5a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Zm1 8h-8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V7a.138.138 0 0 0 0-.06.857.857 0 0 0-.07-.27v-.09a1.068 1.068 0 0 0-.19-.28l-6-6a1 1 0 0 0-.29-.19h-.08A.88.88 0 0 0 9.12 0h-6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a1 1 0 1 0 0-2h-.05Zm-1-14.59L12.65 6h-1.58a1 1 0 0 1-1-1V3.41Zm5.57 14.88a1.08 1.08 0 0 0-.51-.27.999.999 0 1 0 .51.27ZM10.07 14h-5a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Zm4.86-3a3 3 0 0 0-2.6 1.5 1.006 1.006 0 0 0 .37 1.37 1.003 1.003 0 0 0 1.37-.37 1 1 0 1 1 .86 1.5 1 1 0 0 0 0 2 3 3 0 1 0 0-6ZM5.07 8h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Z"
    />
  </Svg>
)
export { HelpnSupportIcon }
