import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IncomeOutline = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.733 8.57A14.438 14.438 0 1 1 5.351 25.516 14.438 14.438 0 0 1 28.733 8.57ZM3.683 26.726A16.5 16.5 0 1 0 30.402 7.36a16.5 16.5 0 0 0-26.72 19.365Zm18.6-14.753a1.031 1.031 0 1 1 1.21 1.67l-9.675 7.01 6.183.986a1.033 1.033 0 0 1-.325 2.04l-8.641-1.38a1.03 1.03 0 0 1-.857-1.182l1.38-8.641a1.033 1.033 0 0 1 2.039.325l-.989 6.183 9.675-7.011Z"
      fill="#006A6A"
    />
  </Svg>
);

export default IncomeOutline;
