import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CardPattern = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={208}
    height={116}
    fill="none"
    {...props}>
    <Path
      d="M74.985-2c-.189 12.452 20.751 24.938 49.75 15.57 41.24-13.324 57.437 12.258 65.247 29.222 2.122 4.608 20.41 31.385 65.135 15.013M1.318.369C15.664 20.5 24.09 52.025 71.752 59c32.28 4.724 65.605-19 92.147 33 16.078 31.5 48.625 23.303 84.634 16.5"
      stroke="#006A6A"
      strokeOpacity={0.14}
    />
    <Path
      d="M43.708 0c0 13.398 14.72 34.5 47.576 34.5 44.155 0 68.834-11.23 88.905 31.08 2.342 4.936 22.319 33.566 69.846 15.514"
      stroke="#006A6A"
      strokeOpacity={0.14}
    />
  </Svg>
);

export default CardPattern;
