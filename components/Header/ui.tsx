import styled from 'styled-components';

import { device } from '../../utils/media';

export const StyledHeader = styled.header`
  background-color: #ebebeb;
  height: 15vh;
  position: relative;
`;

export const H1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 35px;
  }
`;

export const LogoWrapper = styled.div`
  width: 10%;
  height: 100%;
  position: relative;

  svg {
    position: absolute;
    top: -10%;
    left: 10%;
    width: 70px;
    height: 100px;
  }

  @media ${device.tablet} {
    width: 5%;
    svg {
      width: 120px;
      top: 40%;
    }
  }
`;
