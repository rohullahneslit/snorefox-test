import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { SvgProps, Path } from "react-native-svg"
const BluetoothIcon = (props: SvgProps) => (
    <Svg
        width={RFValue(52)}
        height={RFValue(52)}
        fill="none"
        {...props}
    >
        <Path
            stroke="#66514C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m17.063 17.063 28.875 28.875L31.5 60.374V2.625l14.438 14.438-28.876 28.875"
        />
    </Svg>
)
export { BluetoothIcon }
