import * as React from 'react';
import Svg, {Mask, Rect, Path, Circle} from 'react-native-svg';

const Categories = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}>
    <Mask id="a" fill="#fff">
      <Rect x={7.407} width={5.926} height={5.926} rx={1} />
    </Mask>
    <Rect
      x={7.407}
      width={5.926}
      height={5.926}
      rx={1}
      stroke="#006A6A"
      strokeWidth={2.8}
      mask="url(#a)"
    />
    <Path
      d="M10.37 5.926v4.26m0 4.259v-4.26m0 0H3.963a1 1 0 0 0-1 1v3.26m7.407-4.26h6.408a1 1 0 0 1 1 1v3.26"
      stroke="#006A6A"
      strokeWidth={1.4}
    />
    <Circle
      cx={2.963}
      cy={17.037}
      r={2.263}
      stroke="#006A6A"
      strokeWidth={1.4}
    />
    <Circle
      cx={10.37}
      cy={17.037}
      r={2.263}
      stroke="#006A6A"
      strokeWidth={1.4}
    />
    <Circle
      cx={17.778}
      cy={17.037}
      r={2.263}
      stroke="#006A6A"
      strokeWidth={1.4}
    />
  </Svg>
);

export default Categories;
