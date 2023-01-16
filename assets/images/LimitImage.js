import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LimitImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}>
    <Path
      d="M32.1 16.5a15.6 15.6 0 1 1-31.2 0 15.6 15.6 0 0 1 31.2 0Zm-1.95 0a13.598 13.598 0 0 0-3.334-8.939L7.56 26.817A13.65 13.65 0 0 0 30.15 16.5ZM6.185 25.439 25.439 6.183A13.65 13.65 0 0 0 6.184 25.437v.002Z"
      fill="#006A6A"
    />
  </Svg>
);

export default LimitImage;
