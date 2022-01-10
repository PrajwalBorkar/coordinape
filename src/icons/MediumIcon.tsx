/* eslint-disable react/display-name */
import * as React from 'react';

import { styled, SvgIconConfig } from 'stitches.config';

import { IconProps } from 'types';

export const MediumIcon = styled(
  React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
    return (
      <svg viewBox="0 0 36 36" {...props} ref={forwardedRef}>
        <path d="M19.9374 17.988C19.9374 23.1072 15.8128 27.257 10.7252 27.257C5.63757 27.257 1.5127 23.1072 1.5127 17.988C1.5127 12.8689 5.63726 8.71875 10.7252 8.71875C15.8132 8.71875 19.9374 12.8689 19.9374 17.988Z" />
        <path d="M30.0397 18.0076C30.0397 22.8261 27.9774 26.7339 25.4334 26.7339C22.8894 26.7339 20.8271 22.8261 20.8271 18.0076C20.8271 13.189 22.8891 9.28125 25.4331 9.28125C27.9771 9.28125 30.0393 13.1878 30.0393 18.0076" />
        <path d="M34.1987 18.0127C34.1987 22.329 33.4735 25.8301 32.5787 25.8301C31.6839 25.8301 30.959 22.3299 30.959 18.0127C30.959 13.6955 31.6842 10.1953 32.5787 10.1953C33.4732 10.1953 34.1987 13.6952 34.1987 18.0127Z" />
      </svg>
    );
  }),
  SvgIconConfig
);

export default MediumIcon;
