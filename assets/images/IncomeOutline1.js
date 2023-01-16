import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IncomeOutline1 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.086 4.431a7.363 7.363 0 1 1-11.924 8.641 7.363 7.363 0 0 1 11.924-8.64ZM2.31 13.69a8.415 8.415 0 1 0 13.628-9.876A8.415 8.415 0 0 0 2.31 13.69Zm9.486-7.524a.526.526 0 0 1 .618.851L7.48 10.593l3.153.503a.527.527 0 0 1-.166 1.04l-4.407-.704a.529.529 0 0 1-.437-.603l.703-4.407a.527.527 0 0 1 1.04.166l-.504 3.153 4.934-3.575Z"
      fill="#006A6A"
    />
  </Svg>
);

export default IncomeOutline1;
