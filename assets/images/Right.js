import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Right = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={19}
    fill="none"
    {...props}>
    <Path
      d="M9.777.224a.783.783 0 0 1 0 1.093L1.805 9.5l7.972 8.181a.783.783 0 0 1-.244 1.26.744.744 0 0 1-.822-.166L.232 10.07a.819.819 0 0 1 0-1.142L8.711.225a.744.744 0 0 1 1.066 0V.224Z"
      fill="#000"
    />
  </Svg>
);

export default Right;
