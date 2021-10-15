import styled from 'styled-components';

import { device } from './media';

export const ItemContainer = styled.div`
  grid-column: span 8;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.7s ease;
  padding: 20px;

  @media ${device.mobileL} {
    grid-column: span 5;
  }

  @media ${device.tablet} {
    grid-column: span 4;
  }

  :hover {
    opacity: 0.5;
  }
`;
