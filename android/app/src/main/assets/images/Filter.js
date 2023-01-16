import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Filter = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17.027}
    height={18.581}
    {...props}>
    <Path
      d="M10.063 18.581a.774.774 0 0 1-.465-.155l-3.1-2.326a.774.774 0 0 1-.31-.619v-4.348L.76 5.022A3.019 3.019 0 0 1 3.018 0h10.993a3.019 3.019 0 0 1 2.255 5.023l-5.429 6.11v6.674a.774.774 0 0 1-.774.774ZM7.74 15.1l1.548 1.161v-5.422a.774.774 0 0 1 .2-.514l5.627-6.331a1.471 1.471 0 0 0-1.1-2.446H3.018a1.471 1.471 0 0 0-1.1 2.445l5.628 6.331a.774.774 0 0 1 .2.514Z"
      fill="#b7b7b7"
    />
  </Svg>
);

export default Filter;
