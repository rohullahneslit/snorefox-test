import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { SvgProps, Path } from "react-native-svg"
const MeasurementIcon = (props: SvgProps) => (
    <Svg
        width={RFValue(20)}
        height={RFValue(20)}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M11 12H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm0-4H7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2Zm2-6h-1.18A3 3 0 0 0 9 0H7a3 3 0 0 0-2.82 2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM6 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H6V3Zm8 14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4h1a1 1 0 0 1 1 1v12Z"
        />
    </Svg>
)
export { MeasurementIcon }
