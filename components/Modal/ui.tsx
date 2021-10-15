import styled, { keyframes } from 'styled-components';

import { device } from '../../utils/media';

const fadeIn = keyframes`from { opacity: 0; }`;

export const Container = styled.div`
  position: relative;
  z-index: 0;
`;
export const Overlay = styled.div`
  animation: ${fadeIn} 200ms ease-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 50vh;
  outline: 0;
  z-index: 1000;
  box-shadow: 6.4px 12.8px 12.8px hsl(0deg 0% 0% / 0.3);

  @media ${device.tablet} {
    width: 60vw;
  }
`;
export const Dialog = styled.div`
  background: #dbdbdb;
  margin: 0;
  padding-bottom: 30px;
  position: relative;
  overflow: auto;
  height: 50vh;
`;
export const Close = styled.a`
  cursor: pointer;
  z-index: 2;
  position: absolute;
  top: 32px;
  right: 32px;
`;
