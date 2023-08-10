import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { SvgProps, Path } from "react-native-svg"
const MediBagIcon = (props: SvgProps) => (
    <Svg
        width={RFValue(20)}
        height={RFValue(20)}
        fill="none"
        {...props}
    >
        <Path
            fill="#FF6A42"
            d="M8 15h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1a1 1 0 0 0-2 0v1H8a1 1 0 0 0 0 2Zm9-11h-2V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Zm11 14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7h16v7Zm0-9H2V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1Z"
        />
    </Svg>
)
export { MediBagIcon }
