import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CuttImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={19}
    fill="none"
    {...props}>
    <Path
      d="M22 .387H7c-.69 0-1.235.35-1.595.88L0 9.382l5.405 8.115c.36.53.905.89 1.595.89h15a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Zm-3 12.585-1.415 1.415L14 10.802l-3.585 3.585L9 12.972l3.585-3.585L9 5.802l1.415-1.415L14 7.972l3.585-3.585L19 5.802l-3.585 3.585L19 12.972Z"
      fill="#fff"
    />
  </Svg>
);

export default CuttImage;
