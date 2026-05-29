import { type CommonProps } from "../../../globals";
import { device } from "@/shared/utils/devices";
import styled from "styled-components";

export const Container = styled.div<CommonProps>`
  position: fixed;
  top: 0.5vh;
  right: 0;
  width: max-content;

  * {
    all: unset !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  li {
    display: inline !important;
    list-style: none !important;
    margin-right: 0.5vw !important;
    cursor: pointer !important;
  }

  transform: scale(0.5) translate(49%, -45%);
  @media ${device.mobileL} {
    transform: scale(0.75) translate(17%, -20%);
  }
  @media ${device.tablet} {
    transform: unset;
  }
  @media ${device.laptopL} {
    transform: scale(1.125) translate(-2%, 6%);
  }
  @media ${device.desktop} {
    transform: scale(1.25) translate(-5%, -10%);
  }
  @media ${device.desktopL} {
    transform: scale(1.5) translate(-10%, -15%);
  }

  ${(props) => props.styledCss}
`;
