import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path } from 'react-native-svg'
const TermsConditionsIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M9.5 18h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v5a1 1 0 0 0 2 0V6.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19.29.29 0 0 0-.1 0A1.1 1.1 0 0 0 9.56 0H3.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a1 1 0 0 0 0-2Zm1-14.59L13.09 6H11.5a1 1 0 0 1-1-1V3.41ZM5.5 12h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2Zm4 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-4-6h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm13.71 6.29a1.002 1.002 0 0 0-1.42 0l-3.29 3.3-1.29-1.3a1.004 1.004 0 0 0-1.42 1.42l2 2a1.002 1.002 0 0 0 1.42 0l4-4a1.002 1.002 0 0 0 0-1.42Z"
    />
  </Svg>
)
export { TermsConditionsIcon }
