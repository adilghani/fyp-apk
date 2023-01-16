import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const StaticsIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}>
    <Path
      d="M20.583 3.25H5.417A2.173 2.173 0 0 0 3.25 5.417v15.166c0 1.192.975 2.167 2.167 2.167h15.166a2.173 2.173 0 0 0 2.167-2.167V5.417a2.173 2.173 0 0 0-2.167-2.167Zm0 17.333H5.417V5.417h15.166v15.166Z"
      fill="#F8F9D3"
    />
    <Path
      d="M9.75 13H7.583v5.417H9.75V13ZM18.417 7.583H16.25v10.834h2.167V7.583ZM14.083 15.167h-2.166v3.25h2.166v-3.25ZM14.083 10.833h-2.166V13h2.166v-2.167Z"
      fill="#F8F9D3"
    />
  </Svg>
);

export default StaticsIcon;
