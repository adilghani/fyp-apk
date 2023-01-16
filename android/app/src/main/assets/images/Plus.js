import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Plus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}>
    <Path
      d="M7.706 17.98a2.576 2.576 0 0 0 2.568 2.569 2.576 2.576 0 0 0 2.569-2.57v-5.136h5.137a2.576 2.576 0 0 0 2.569-2.569 2.576 2.576 0 0 0-2.57-2.568h-5.136V2.569A2.576 2.576 0 0 0 10.274 0a2.576 2.576 0 0 0-2.568 2.569v5.137H2.569A2.576 2.576 0 0 0 0 10.274a2.576 2.576 0 0 0 2.569 2.569h5.137v5.137Z"
      fill="#fff"
    />
  </Svg>
);

export default Plus;
