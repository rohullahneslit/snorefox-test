import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const MedicalIcon = (props: SvgProps) => (
    <Svg
        width={RFValue(20)}
        height={RFValue(20)}
        fill="none"
        {...props}
    >
        <Path
            fill="#FF6A42"
            d="M17 6a2.993 2.993 0 0 0-1 5.816V13.5a4.5 4.5 0 1 1-9 0v-.59A6.005 6.005 0 0 0 12 7V1a1 1 0 0 0-1-1H9a1 1 0 0 0 0 2h1v5a4 4 0 0 1-8 0V2h1a1 1 0 0 0 0-2H1a1 1 0 0 0-1 1v6a6.004 6.004 0 0 0 5 5.91v.59a6.5 6.5 0 0 0 13 0v-1.684A2.993 2.993 0 0 0 17 6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        />
    </Svg>
)
export { MedicalIcon }
