import styled, { css } from "styled-components";

import { color, device, shadow } from "./utils.styled";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "1440px")};
  padding: 12px 24px;
  margin: auto;
`;

export const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  min-height: 30px;
  min-width: 105px;
  padding: 8px 14px 8px 14px;
  background: ${() => color()};
  color: ${() => color("tertiary", "main")};
  font-size: 14px;
  font-weight: 500;
  transition: ease-out 0.3s;
  width: ${({ $fullWidth }) => $fullWidth && "100%"};

  /* Elevation */
  ${({ $elevated = "xs" }) => {
    return css`
      box-shadow: ${() => shadow($elevated)};
    `;
  }}
  /* Sizes */
    ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          min-height: 40px;
          min-width: 109px;
        `;
      case "md":
        return css`
          min-width: 128px;
          min-height: 48px;
        `;
      default:
        break;
    }
  }}
    ${({ $variant }) => {
    switch ($variant) {
      case "no-filled":
        return css`
          background: ${() => color("tertiary", 100)};
          color: ${() => color("primary", 700)};

          &:hover,
          &:active,
          &:focus {
            border: 5px solid ${() => color("tertiary", 200)};
            box-shadow: ${() => shadow("xs")};
          }

          ${({ $disabled }) => {
            if ($disabled) {
              return css`
                background: ${() => color("tertiary", "main")};
                color: ${() => color("primary", 300)};
                cursor: initial;

                &:hover,
                &:active,
                &:focus {
                  border: none;
                  box-shadow: initial;
                }
              `;
            }

            return null;
          }}
        `;
      case "outlined":
        return css`
          background: none;
          color: ${() => color("primary", 700)};
          border: 1px solid ${() => color("primary", 900)};

          &:hover,
          &:active,
          &:focus {
            border: 1px solid ${() => color("primary", 900)};
            box-shadow: none;
          }
        `;
      default:
        return css`
          ${({ $disabled }) => {
            if ($disabled) {
              return css`
                background: ${() => color("primary", 50)};
                color: ${() => color("primary", 400)};
                cursor: initial;

                &:hover,
                &:active,
                &:focus {
                  border: none;
                  box-shadow: initial;
                }
              `;
            }
          }}
        `;
    }
  }};
`;

// Resizes based on device scrren size, very fluid

export const FluidTitle = styled.h1`
  color: ${() => (color ? color : color())};
  font-size: 4.8vw;
  font-weight: ${({ $weight }) => ($weight ? $weight : "700")};
  ${() => device.up("sm")} {
    font-size: ${(props) =>
      props.$size ? props.$size : props.as === "h2" ? "24px" : props.as === "h3" ? "20px" :  "32px"};
  }
`;
