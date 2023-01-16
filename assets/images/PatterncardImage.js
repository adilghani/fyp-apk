import * as React from 'react';
import Svg, {Mask, Rect, G, Path} from 'react-native-svg';

const PatternCardImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={225}
    height={193}
    fill="none"
    {...props}>
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={225}
      height={193}>
      <Rect width={225} height={193} rx={11} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#a)" stroke="#006A6A" strokeOpacity={0.14}>
      <Path d="M91.985-2c-.189 12.452 20.751 24.938 49.75 15.57 41.24-13.324 57.437 12.258 65.247 29.222 2.122 4.608 20.41 31.385 65.135 15.013M18.318.369C32.664 20.5 41.09 52.025 88.752 59c32.28 4.724 65.605-19 92.147 33 16.078 31.5 48.625 23.303 84.634 16.5" />
      <Path d="M60.708 0c0 13.398 14.72 34.5 47.575 34.5 44.156 0 68.835-11.23 88.906 31.08 2.342 4.936 22.319 33.566 69.846 15.514" />
    </G>
  </Svg>
);

export default PatternCardImage;
