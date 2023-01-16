import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={112}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.356.074C1.731.074 1.132.322.69.765a2.364 2.364 0 0 0 1.666 4.032 20.177 20.177 0 0 1 12.267 4.174 20.253 20.253 0 0 1 7.217 10.783 2.708 2.708 0 0 1-.27 5.252 2.693 2.693 0 0 1-2.958-1.558 2.71 2.71 0 0 1 .823-3.246 17.816 17.816 0 0 0-6.371-9.347A17.75 17.75 0 0 0 2.359 7.24c-.625 0-1.224.25-1.666.692a2.364 2.364 0 0 0 1.666 4.032c2.516.004 4.976.736 7.085 2.11a13.062 13.062 0 0 1 4.803 5.63 2.692 2.692 0 0 1 2.062 2.562 2.702 2.702 0 0 1-1.942 2.654 2.687 2.687 0 0 1-3.057-1.201 2.704 2.704 0 0 1 .375-3.27 10.422 10.422 0 0 0-3.83-4.261A10.39 10.39 0 0 0 2.356 14.6c-.625 0-1.224.25-1.666.692a2.364 2.364 0 0 0 1.666 4.032 5.682 5.682 0 0 1 4.025 1.67 5.707 5.707 0 0 1 1.667 4.034c0 .627.249 1.227.69 1.67a2.354 2.354 0 0 0 1.667.692h14.488a2.35 2.35 0 0 0 2.178-1.457c.118-.287.18-.595.179-.905a25.006 25.006 0 0 0-7.298-17.637A24.894 24.894 0 0 0 2.356.074ZM37.654 27.39h-3.831V15.2h-1.817v-3.128h1.817V7.164C33.823 2.388 35.679 0 39.39 0c.764 0 1.475.172 2.133.515v3.324c-.685-.343-1.29-.514-1.817-.514-.71 0-1.237.264-1.58.791-.316.502-.473 1.729-.473 3.681v4.275h3.87V15.2h-3.87V27.39ZM47.134 5.185c0 .607-.224 1.135-.671 1.583-.448.449-.974.673-1.58.673-.606 0-1.132-.224-1.58-.673-.447-.448-.671-.976-.671-1.583s.224-1.135.671-1.583c.448-.449.974-.673 1.58-.673.605 0 1.132.224 1.58.673.447.448.671.976.671 1.583Zm-.316 22.205h-3.83V11.755h3.83V27.39ZM53.77 13.18c1.079-1.293 2.672-1.939 4.778-1.939 3.58 0 5.371 2.203 5.371 6.61v9.539h-3.791v-8.272c0-3.299-1.014-4.948-3.041-4.948-2.212 0-3.318 1.768-3.318 5.304v7.916h-3.83V11.755h3.83v1.425ZM81.315 27.39h-3.752v-1.425c-1.106 1.293-2.751 1.94-4.937 1.94-2.185 0-3.936-.845-5.252-2.534-1.29-1.688-1.935-3.668-1.935-5.937 0-2.27.658-4.195 1.975-5.779 1.342-1.61 3.054-2.414 5.133-2.414 2.212 0 3.884.66 5.016 1.979v-1.465h3.752V27.39Zm-3.317-7.837c0-1.451-.409-2.639-1.225-3.562-.816-.95-1.87-1.425-3.16-1.425-1.263 0-2.303.462-3.12 1.385-.789.897-1.184 2.098-1.184 3.602s.408 2.718 1.224 3.641c.817.924 1.87 1.386 3.16 1.386s2.33-.449 3.12-1.346 1.184-2.124 1.184-3.681ZM87.791 13.18c1.106-1.293 2.752-1.939 4.937-1.939 2.053 0 3.752.818 5.094 2.454 1.37 1.636 2.054 3.562 2.054 5.779 0 2.401-.671 4.407-2.014 6.016-1.343 1.61-3.08 2.415-5.213 2.415-2.29 0-3.883-.66-4.779-1.98L87.791 34h-3.83V11.755h3.83v1.425Zm8.175 6.373c0-1.346-.381-2.507-1.145-3.483-.763-1.003-1.817-1.504-3.16-1.504-1.237 0-2.264.501-3.08 1.504-.816 1.003-1.224 2.164-1.224 3.483 0 1.293.434 2.454 1.303 3.483.869 1.03 1.87 1.544 3.002 1.544 1.342 0 2.395-.475 3.159-1.425.764-.95 1.145-2.15 1.145-3.602ZM109.709 15.001c-.842-.791-1.724-1.187-2.646-1.187-1.395 0-2.093.633-2.093 1.9 0 .712.632 1.293 1.896 1.741 2.317.845 3.752 1.623 4.305 2.336.553.686.829 1.543.829 2.572 0 1.689-.592 3.035-1.777 4.038-1.159 1.002-2.593 1.503-4.305 1.503-2.211 0-4.041-.87-5.489-2.612l1.698-2.177c1.316 1.32 2.527 1.98 3.633 1.98 1.606 0 2.409-.78 2.409-2.336 0-.792-.421-1.372-1.264-1.742a47.503 47.503 0 0 0-1.935-.87c-2.422-1.056-3.633-2.336-3.633-3.84s.448-2.718 1.343-3.641c.921-.95 2.119-1.425 3.594-1.425 2.106 0 3.778.54 5.015 1.623L109.709 15Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
