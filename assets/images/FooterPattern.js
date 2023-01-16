import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FooterPattern = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={180}
    height={72}
    fill="none"
    {...props}>
    <Path
      d="M47.378 1c-.14 7.48 15.156 14.98 36.34 9.352 30.125-8.005 41.956 7.363 47.66 17.553 1.549 2.768 14.906 18.854 47.578 9.017M-6.435 2.423c10.48 12.094 16.636 31.032 51.451 35.222 23.58 2.838 47.922-11.414 67.31 19.824 11.745 18.923 35.52 14 61.823 9.912"
      stroke="#F8F9D3"
      strokeOpacity={0.15}
    />
    <Path
      d="M24.53 2.202c0 8.048 10.752 20.725 34.753 20.725 32.254 0 50.282-6.746 64.943 18.671 1.711 2.965 16.303 20.164 51.021 9.32"
      stroke="#F8F9D3"
      strokeOpacity={0.15}
    />
  </Svg>
);

export default FooterPattern;
