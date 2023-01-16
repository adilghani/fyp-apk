import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const PersonalPattern = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}>
    <G opacity={0.2} stroke="#fff" strokeWidth={2.3}>
      <Path d="M-138.915 46.943c-8.191 14.245-13.553 30.311-15.636 46.85-1.288 10.232-.836 21.966 6.265 29.025 5.321 5.291 13.166 6.607 20.455 6.323 7.289-.284 14.537-1.909 21.818-1.455 7.281.454 14.991 3.503 18.685 10.174 3.496 6.313 2.626 14.178 2.197 21.485-.427 7.308.087 15.604 5.286 20.419 7.364 6.819 19.362 2.606 28.043 7.373 8.233 4.522 11.576 16.058 20.06 20.025 7.09 3.317 15.252.235 22.423-2.879a2346.344 2346.344 0 0 0 22.382-9.859" />
      <Path d="M-130.249 37.963c-8.031 13.885-13.29 29.545-15.332 45.666-1.264 9.974-.82 21.412 6.143 28.293 5.218 5.157 12.91 6.44 20.057 6.163 7.147-.277 14.255-1.862 21.395-1.419 7.14.443 14.7 3.416 18.323 9.918 3.428 6.154 2.574 13.819 2.154 20.943-.42 7.123.084 15.209 5.183 19.903 7.221 6.647 18.986 2.539 27.498 7.186 8.073 4.408 11.352 15.653 19.67 19.52 6.953 3.232 14.956.229 21.989-2.807 7.33-3.164 14.646-6.368 21.946-9.61" />
      <Path d="M-122.399 28.166c-7.874 13.598-13.028 28.933-15.029 44.72-1.239 9.767-.804 20.968 6.021 27.706 5.115 5.05 12.655 6.307 19.661 6.035 7.006-.271 13.972-1.822 20.97-1.389 7 .434 14.41 3.344 17.96 9.712 3.36 6.026 2.523 13.533 2.112 20.509-.412 6.975.083 14.894 5.081 19.49 7.078 6.51 18.61 2.487 26.953 7.039 7.913 4.316 11.127 15.327 19.28 19.114 6.816 3.166 14.66.224 21.554-2.748 7.185-3.1 14.356-6.236 21.512-9.411" />
      <Path d="M-113.812 18.37c-7.675 13.237-12.698 28.167-14.649 43.536-1.208 9.508-.784 20.413 5.869 26.973 4.986 4.917 12.335 6.14 19.164 5.876 6.829-.265 13.62-1.775 20.441-1.352 6.822.422 14.045 3.255 17.506 9.454 3.276 5.868 2.46 13.175 2.059 19.966-.401 6.792.08 14.5 4.952 18.975 6.9 6.337 18.14 2.422 26.273 6.852 7.714 4.202 10.845 14.922 18.793 18.61 6.643 3.081 14.29.217 21.01-2.676a2174.747 2174.747 0 0 0 20.968-9.163" />
      <Path d="M-105.224 8.572c-7.476 12.95-12.37 27.555-14.271 42.59-1.176 9.302-.763 19.97 5.717 26.388 4.857 4.81 12.016 6.006 18.668 5.747 6.652-.258 13.267-1.736 19.912-1.323 6.645.414 13.682 3.185 17.053 9.25 3.19 5.74 2.396 12.888 2.005 19.532s.079 14.185 4.824 18.563c6.72 6.198 17.67 2.368 25.592 6.702 7.514 4.111 10.564 14.598 18.307 18.205 6.47 3.015 13.92.213 20.464-2.618a2114.82 2114.82 0 0 0 20.426-8.963" />
      <Path d="M-97.375-.408c-7.317 12.662-12.106 26.943-13.967 41.644-1.151 9.095-.747 19.525 5.595 25.8 4.754 4.703 11.76 5.873 18.27 5.62 6.512-.253 12.986-1.697 19.49-1.293 6.503.404 13.39 3.114 16.69 9.044 3.122 5.611 2.344 12.602 1.962 19.098-.383 6.496.076 13.869 4.721 18.15 6.577 6.061 17.294 2.316 25.048 6.554 7.353 4.019 10.34 14.273 17.917 17.8 6.333 2.947 13.623.208 20.03-2.56 6.677-2.886 13.34-5.807 19.99-8.764" />
      <Path d="M-88.788-9.389c-7.118 12.303-11.777 26.178-13.587 40.461-1.119 8.837-.727 18.97 5.444 25.068 4.624 4.569 11.44 5.706 17.773 5.46 6.334-.246 12.632-1.649 18.96-1.256 6.326.392 13.026 3.025 16.235 8.786 3.038 5.453 2.282 12.244 1.91 18.556-.373 6.311.074 13.475 4.593 17.634 6.398 5.889 16.823 2.25 24.366 6.368 7.154 3.905 10.06 13.868 17.43 17.294 6.162 2.864 13.254.203 19.486-2.486a2062.68 2062.68 0 0 0 19.448-8.515" />
      <Path d="M-80.2-19.186C-87.12-7.17-91.65 6.38-93.409 20.33c-1.089 8.63-.707 18.527 5.29 24.48 4.496 4.463 11.122 5.574 17.278 5.333 6.157-.239 12.279-1.61 18.43-1.226 6.15.383 12.662 2.954 15.782 8.581 2.953 5.325 2.218 11.957 1.856 18.121-.361 6.164.073 13.16 4.465 17.222 6.22 5.751 16.354 2.197 23.686 6.219 6.954 3.813 9.778 13.543 16.943 16.89 5.99 2.797 12.884.198 18.942-2.429 6.314-2.738 12.615-5.51 18.904-8.316" />
      <Path d="M-71.535-28.166c-6.76 11.655-11.185 24.8-12.904 38.331-1.063 8.372-.69 17.973 5.17 23.749 4.392 4.328 10.865 5.405 16.88 5.172 6.016-.232 11.997-1.562 18.005-1.19 6.01.372 12.372 2.866 15.42 8.325 2.886 5.165 2.167 11.6 1.814 17.578-.354 5.98.071 12.767 4.362 16.706 6.077 5.58 15.978 2.132 23.141 6.033 6.795 3.7 9.554 13.138 16.554 16.384 5.852 2.713 12.587.192 18.506-2.356a1937.385 1937.385 0 0 0 18.47-8.066" />
      <Path d="M-63.686-37.963c-6.6 11.367-10.922 24.188-12.6 37.385-1.038 8.165-.674 17.529 5.048 23.162 4.289 4.221 10.61 5.272 16.483 5.046 5.874-.228 11.715-1.524 17.582-1.162 5.867.363 12.08 2.796 15.057 8.119 2.817 5.038 2.115 11.313 1.77 17.144-.345 5.832.07 12.452 4.26 16.294 5.934 5.442 15.602 2.08 22.597 5.884 6.635 3.608 9.328 12.813 16.165 15.98 5.713 2.646 12.29.187 18.07-2.298C46.77 85 52.78 82.378 58.78 79.724" />
      <Path d="M-55.177-47.76c-6.362 11.08-10.527 23.576-12.145 36.439-1 7.958-.65 17.085 4.866 22.575 4.133 4.115 10.226 5.139 15.887 4.918 5.661-.222 11.291-1.486 16.947-1.132 5.655.354 11.644 2.725 14.512 7.913 2.716 4.91 2.04 11.027 1.707 16.711-.333 5.684.067 12.136 4.106 15.881 5.72 5.304 15.038 2.027 21.78 5.735 6.395 3.517 8.991 12.489 15.58 15.575 5.507 2.58 11.847.182 17.417-2.24 5.806-2.525 11.6-5.08 17.383-7.668" />
      <Path d="M-46.511-56.74c-6.203 10.72-10.264 22.81-11.842 35.255-.975 7.7-.632 16.53 4.745 21.843 4.03 3.98 9.97 4.972 15.49 4.758 5.52-.215 11.009-1.437 16.523-1.095 5.513.342 11.352 2.636 14.15 7.656 2.647 4.751 1.988 10.669 1.663 16.168-.324 5.5.066 11.742 4.004 15.366 5.576 5.13 14.662 1.96 21.235 5.548 6.235 3.403 8.766 12.084 15.19 15.07 5.37 2.495 11.551.176 16.982-2.167 5.661-2.444 11.31-4.916 16.95-7.42" />
      <Path d="M-38.661-66.537C-44.705-56.105-48.662-44.34-50.2-32.228c-.951 7.493-.617 16.086 4.622 21.256 3.927 3.875 9.715 4.839 15.093 4.63 5.379-.208 10.726-1.398 16.1-1.066C-9.013-7.074-3.325-4.842-.599.043c2.58 4.624 1.938 10.383 1.622 15.735-.316 5.351.063 11.426 3.9 14.953 5.434 4.993 14.286 1.908 20.691 5.4 6.075 3.31 8.542 11.758 14.801 14.664 5.233 2.428 11.254.172 16.546-2.109a1714.867 1714.867 0 0 0 16.515-7.22" />
      <Path d="M-30.074-75.518c-5.845 10.073-9.672 21.432-11.158 33.126-.92 7.235-.597 15.532 4.47 20.524 3.798 3.74 9.395 4.671 14.597 4.47 5.2-.201 10.373-1.35 15.569-1.029 5.196.322 10.697 2.477 13.334 7.194C9.232-6.769 8.61-1.208 8.305 3.959 8 9.126 8.367 14.99 12.077 18.396c5.255 4.822 13.816 1.843 20.01 5.213 5.876 3.198 8.261 11.354 14.315 14.16 5.06 2.344 10.884.165 16.002-2.036 5.334-2.296 10.658-4.62 15.971-6.972" />
    </G>
  </Svg>
);

export default PersonalPattern;
