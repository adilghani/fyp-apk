import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ExpanseImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <Path
      d="M28 14a14 14 0 1 1-28 0 14 14 0 0 1 28 0Zm-10.332 4.905a.874.874 0 1 0 1.237-1.237L11.737 10.5h4.844a.875.875 0 0 0 0-1.75H9.625a.875.875 0 0 0-.875.875v6.956a.875.875 0 1 0 1.75 0v-4.844l7.168 7.168Z"
      fill="#006A6A"
    />
  </Svg>
);

export default ExpanseImage;
