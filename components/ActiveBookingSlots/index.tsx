import { Grid } from '../../utils/grid';
import { Image } from '../../utils/image';
import { ItemContainer } from '../../utils/imageContainer';

import { H2, P } from '../../utils/Typography';

const ActiveBookingSlots = ({ slots, setActiveWorker, setItemId }: any) => {
  return (
    <Grid>
      {slots.map((item: any) => (
        <ItemContainer
          tabIndex={0}
          key={item.id}
          onClick={() => {
            setActiveWorker(false);
            setItemId(item.id);
          }}
        >
          <Image src="https://picsum.photos/200" alt={item.id} />
          <H2>{item.localisedTime}</H2>
          <P>{item.price}</P>
        </ItemContainer>
      ))}
    </Grid>
  );
};

export default ActiveBookingSlots;
