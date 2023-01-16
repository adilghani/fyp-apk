import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ExpanseOutline = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.352 25.15A14.438 14.438 0 1 0 28.733 8.207 14.438 14.438 0 0 0 5.353 25.15ZM30.403 6.996A16.5 16.5 0 1 1 3.683 26.36a16.5 16.5 0 0 1 26.72-19.364ZM10.593 20.08a1.031 1.031 0 0 0 1.21 1.67l9.674-7.01-.988 6.182a1.036 1.036 0 0 0 .479 1.042 1.03 1.03 0 0 0 1.56-.716l1.38-8.642a1.033 1.033 0 0 0-.857-1.182l-8.641-1.38a1.032 1.032 0 1 0-.326 2.04l6.183.985-9.675 7.011Z"
      fill="#006A6A"
    />
  </Svg>
);

export default ExpanseOutline;
