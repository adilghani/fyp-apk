import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PathIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={9}
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.405.26a.874.874 0 0 0-1.245 0L4.632 5.933l-2.46-2.547a.874.874 0 0 0-1.245 0 .908.908 0 0 0 0 1.274l3.097 3.184a.874.874 0 0 0 1.245 0l6.165-6.31a.937.937 0 0 0-.03-1.274Z"
      fill="#004343"
    />
  </Svg>
);

export default PathIcon;
