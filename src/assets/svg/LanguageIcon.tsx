import * as React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
const LanguageIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(6)}
    height={widthPercentageToDP(6)}
    fill="none"
    {...props}>
    <Path
      fill="#FF6A42"
      d="M21.41 8.638v-.05a10 10 0 0 0-18.78 0v.05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0v-.05a9.86 9.86 0 0 0 0-6.72Zm-17.15 5.36a7.82 7.82 0 0 1 0-4h1.86a16.73 16.73 0 0 0 0 4H4.26Zm.82 2h1.4c.234.892.57 1.754 1 2.57a8.001 8.001 0 0 1-2.4-2.57Zm1.4-8h-1.4a8 8 0 0 1 2.37-2.57 12.15 12.15 0 0 0-.97 2.57Zm4.52 11.7a6.34 6.34 0 0 1-2.43-3.7H11v3.7Zm0-5.7H8.14a14.36 14.36 0 0 1 0-4H11v4Zm0-6H8.57a6.34 6.34 0 0 1 2.43-3.7v3.7Zm7.92 0h-1.4a12.148 12.148 0 0 0-1-2.57 8 8 0 0 1 2.4 2.57ZM13 4.298a6.34 6.34 0 0 1 2.43 3.7H13v-3.7Zm0 15.4v-3.7h2.43a6.34 6.34 0 0 1-2.43 3.7Zm2.86-5.7H13v-4h2.86a14.361 14.361 0 0 1 0 4Zm.69 4.57a12.15 12.15 0 0 0 1-2.57h1.4a8.001 8.001 0 0 1-2.4 2.57Zm3.19-4.57h-1.86c.08-.663.12-1.331.12-2a16.285 16.285 0 0 0-.12-2h1.86a7.82 7.82 0 0 1 0 4Z"
    />
  </Svg>
)
export { LanguageIcon }
