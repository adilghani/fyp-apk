import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const ProfileDark = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17.989}
    height={23.985}
    {...props}>
    <G data-name="user (1)" fill="#b7b7b7">
      <Path
        data-name="Path 12"
        d="M8.998 11.993a6 6 0 1 0-6-5.993 6 6 0 0 0 6 6Zm0-9.993a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z"
      />
      <Path
        data-name="Path 13"
        d="M8.994 13.991A9 9 0 0 0 0 22.985a1 1 0 1 0 2 0 7 7 0 0 1 13.991 0 1 1 0 0 0 2 0 9 9 0 0 0-8.997-8.994Z"
      />
    </G>
  </Svg>
);

export default ProfileDark;
