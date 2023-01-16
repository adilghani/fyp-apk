import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Goultour1 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={327}
    height={209}
    fill="none"
    {...props}>
    <Path fill="url(#a)" d="M0 0h328.256v209H0z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={164.128}
        y1={0}
        x2={164.128}
        y2={209}
        gradientUnits="userSpaceOnUse">
        <Stop stopOpacity={0} />
        <Stop offset={1} stopColor="#006A6A" stopOpacity={0.9} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Goultour1;
