import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ExpanseTran = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.744 17.288A9.848 9.848 0 1 0 19.692 5.731 9.848 9.848 0 0 0 3.744 17.288ZM20.83 4.905A11.255 11.255 0 1 1 2.605 18.113 11.255 11.255 0 0 1 20.83 4.905ZM7.318 13.829a.704.704 0 0 0 .826 1.14l6.599-4.783-.674 4.217a.703.703 0 1 0 1.39.222l.942-5.894a.704.704 0 0 0-.585-.807l-5.894-.94a.704.704 0 1 0-.222 1.39l4.217.673-6.599 4.782Z"
      fill="#006A6A"
    />
  </Svg>
);

export default ExpanseTran;
