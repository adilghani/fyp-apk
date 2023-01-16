import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24.032}
    height={24.032}
    {...props}>
    <Path
      d="m23.739 22.325-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 1 0 1.414-1.414Zm-13.707-4.293a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
      fill="#b7b7b7"
    />
  </Svg>
);

export default SearchIcon;
