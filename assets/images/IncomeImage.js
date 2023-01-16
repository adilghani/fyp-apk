import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IncomeImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <Path
      d="M0 14a14 14 0 1 1 28 0 14 14 0 0 1-28 0Zm10.332-4.905a.875.875 0 1 0-1.237 1.237l7.168 7.168h-4.844a.875.875 0 0 0 0 1.75h6.956a.875.875 0 0 0 .875-.875v-6.956a.875.875 0 0 0-1.75 0v4.844l-7.168-7.168Z"
      fill="#006A6A"
    />
  </Svg>
);

export default IncomeImage;
