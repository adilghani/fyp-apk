import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const EditIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      d="m17.143 4.116 2.741 2.74-2.741-2.74Zm1.763-2.414-7.412 7.412c-.383.382-.644.87-.75 1.4l-.685 3.427 3.427-.686a2.737 2.737 0 0 0 1.4-.75l7.412-7.41a2.398 2.398 0 1 0-3.392-3.393v0Z"
      stroke="#000"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EditIcon;
