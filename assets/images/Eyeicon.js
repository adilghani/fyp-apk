import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Eyeicon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}>
    <Path fill="#F8F9D3" d="M-1-4h24v24H-1z" />
  </Svg>
);

export default Eyeicon;
