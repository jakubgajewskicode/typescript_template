import { BookingSlotWrapper, ItemContainer, Item, Image } from './ui';

import { H2, P } from '../../utils/Typography';
const ActiveBookingSlots = ({ slots, setActiveWorker, setItemId }: any) => {
  return (
    <BookingSlotWrapper>
      {slots.map((item: any) => (
        <ItemContainer
          key={item.id}
          onClick={() => {
            setActiveWorker(false);
            setItemId(item.id);
          }}
        >
          <Item>
            <Image src="https://picsum.photos/200" alt={item.id} />
          </Item>
          <Item>
            <H2>{item.localisedTime}</H2>
          </Item>
          <Item>
            <P>{item.price}</P>
          </Item>
        </ItemContainer>
      ))}
    </BookingSlotWrapper>
  );
};

export default ActiveBookingSlots;
