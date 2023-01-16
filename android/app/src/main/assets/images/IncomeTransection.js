import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IncomeTransection = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.697 5.941a9.85 9.85 0 1 1-15.953 11.56 9.85 9.85 0 0 1 15.953-11.56ZM2.606 18.327a11.257 11.257 0 1 0 18.23-13.21 11.257 11.257 0 0 0-18.23 13.21ZM15.296 8.26a.704.704 0 0 1 .826 1.14l-6.6 4.783 4.218.673a.703.703 0 1 1-.222 1.391l-5.896-.941a.702.702 0 0 1-.584-.807l.94-5.895a.704.704 0 0 1 1.392.222l-.674 4.218 6.6-4.784Z"
      fill="#004343"
    />
  </Svg>
);

export default IncomeTransection;
