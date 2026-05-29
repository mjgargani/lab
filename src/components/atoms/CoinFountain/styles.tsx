import { type CoinFountainProps } from './types';
import styled, { keyframes } from 'styled-components';

const coinYmovement = (distance: number) => keyframes`
  from{
    bottom: 0;
  }
  to{
    bottom: ${distance}%;
  }
`;

const coinXmovement = (distance: number) => keyframes`
  from{
    left: 1%;
    transform: rotate(0);
    opacity: 1;
  }
  to{
    left: ${distance}%;
    transform: rotate(360deg);
    opacity: 0;
  }
`;

const coinOpacity = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const moneyBagShake = keyframes`
  from{
    transform: rotate(25deg);
  }
  to{
    transform: rotate(50deg);
  }
`;

export const Coin = styled.div<CoinFountainProps>`
  position: absolute;
  bottom: 2%;
  left: 1%;
  animation-delay: ${(props) => props.delay ?? 0}ms !important;
  animation: ${(props) => coinYmovement(props.distance?.[1] ?? 10)} 0.25s alternate ease infinite,
    ${(props) => coinXmovement(props.distance?.[0] ?? 10)} 1s ease infinite, ${coinOpacity} 1s ease infinite;
`;

export const MoneyBag = styled.div`
  position: absolute;
  bottom: -3%;
  left: -2%;
  font-size: 315%;
  animation: ${moneyBagShake} 0.2s alternate ease-in-out infinite;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0;
  height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
