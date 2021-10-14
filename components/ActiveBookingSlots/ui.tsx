import styled from 'styled-components';

import { device } from '../../utils/media';

const BookingSlotWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
`;

const ItemContainer = styled.div`
  grid-column: span 8;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.7s ease;

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

const Item = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

export { BookingSlotWrapper, ItemContainer, Item, Image };
