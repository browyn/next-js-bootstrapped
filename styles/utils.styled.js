import styled from "styled-components";

import { theme } from "./global/Theme";

export const color = (group = "primary", shade = "main") => {
  const { colors } = theme;
  if (group in colors && shade in colors[group]) {
    return colors[group][shade];
  }

  return null;
};

export const blur = (grade) => {};

export const shadow = (grade = "xs") => {
  const { shadow } = theme;
  if (grade in shadow) {
    return shadow[grade];
  }

  return null;
};

export const device = {
  up: (screen = "xs") => {
    const { breakpoints } = theme;
    if (screen in breakpoints) {
      return `@media (min-width: ${breakpoints[screen]}px)`;
    }

    return null;
  },
  down: (screen = "xs") => {
    const { breakpoints } = theme;
    if (screen in breakpoints) {
      return `@media (max-width: ${breakpoints[screen] + 1}px)`;
    }

    return null;
  },
};

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid inherit;
  border-radius: 50%;
  border-top: 3px solid ${({ $color }) => (!$color ? "inherit" : color())};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
