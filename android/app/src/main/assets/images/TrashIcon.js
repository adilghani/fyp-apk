import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TrashIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={25}
    fill="none"
    {...props}>
    <Path
      d="M10.001 0a4.036 4.036 0 0 1 4.033 3.881l.003.155h5.088a.878.878 0 0 1 .09 1.75l-.09.004h-.765l-1.195 15.841a2.983 2.983 0 0 1-2.975 2.758H5.813a2.983 2.983 0 0 1-2.975-2.758L1.642 5.791H.877a.877.877 0 0 1-.873-.788L0 4.913c0-.454.345-.828.787-.872l.09-.005h5.089A4.036 4.036 0 0 1 10 0Zm6.6 5.79H3.402L4.589 21.5a1.228 1.228 0 0 0 1.224 1.135h8.377a1.228 1.228 0 0 0 1.225-1.136L16.6 5.79Zm-4.319 3.685c.454 0 .829.345.873.787l.005.09v7.72a.878.878 0 0 1-1.75.09l-.005-.09v-7.72c0-.484.393-.877.877-.877Zm-4.562 0c.454 0 .829.345.874.787l.004.09v7.72a.877.877 0 0 1-1.75.09l-.005-.09v-7.72c0-.484.393-.877.877-.877Zm2.281-7.72a2.281 2.281 0 0 0-2.277 2.152l-.004.129h4.562a2.28 2.28 0 0 0-2.28-2.281Z"
      fill="#fff"
    />
  </Svg>
);

export default TrashIcon;
