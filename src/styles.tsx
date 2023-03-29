import { device } from './utils/devices';
import styled from 'styled-components';

type ContainerBaseProps = {
  isLoading?: boolean;
};

export const ContainerBase = styled.div<ContainerBaseProps>`
  position: absolute;
  padding: 0;
  ${(props) => props.isLoading && 'cursor: wait;'}

  height: 100%;
  width: 80%;
  margin: 0 10%;
  @media ${device.tablet} {
    width: 70%;
    margin: 0 15%;
  }
`;

export const ContainerTop = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  height: 5%;
  @media ${device.tablet} {
    height: 10%;
  }
`;

export const ContainerPage = styled.div`
  overflow-y: auto;
  position: relative;
  width: 100%;

  height: 68%;
  @media ${device.tablet} {
    height: 65%;
  }
`;

export const ContainerNavigation = styled.div`
  overflow-y: auto;
  position: relative;
  width: 100%;

  height: 22%;
  @media ${device.tablet} {
    height: 15%;
  }
`;

export const ContainerFooter = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  height: 5%;
  @media ${device.tablet} {
    height: 10%;
  }
`;
