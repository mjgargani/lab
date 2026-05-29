import { type CommonProps } from '../../../globals';
import styled from 'styled-components';

export const Container = styled.div<CommonProps>`
  position: fixed;
  top: 0;
  left: 0;

  max-height: min-content;
  max-width: min-content;

  a,
  a:hover {
    background-color: unset !important;
  }
  button {
    max-height: min-content !important;
    max-width: min-content !important;
  }
  a,
  button,
  h1,
  span {
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0 !important;
  }
  svg {
    margin: 5px !important;
  }

  ${(props) => props.styledCss}
`;
