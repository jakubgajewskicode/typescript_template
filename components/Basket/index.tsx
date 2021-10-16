import {
  StyledSection,
  ButtonWrapper,
  Div,
  Title,
  Flex,
  SlotsWrapper,
  WorkerDetails,
} from './ui';
import { Button } from '../../utils/button';

const Basket = ({
  data,
  setSendItemData,
  SlotsArray,
  setAddSlotToArray,
}: any) => {
  return (
    <>
      <section>
        <Title>
          <h2>Your Basket</h2>
        </Title>
        {data.length >= 1 ? (
          <>
            <Flex>
              <WorkerDetails>
                {data.map((item: any) => (
                  <StyledSection key={item.id}>
                    <div>{item.name}</div>
                    <div>worker rating: {item.rating}</div>
                    {item.isNew && <div>New Employee</div>}
                    <div>worker ID: {item.id}</div>
                  </StyledSection>
                ))}
              </WorkerDetails>

              <SlotsWrapper>
                {SlotsArray.map((slot: any) => (
                  <p key={slot}> Slot id: {slot}</p>
                ))}
              </SlotsWrapper>
            </Flex>

            <ButtonWrapper>
              <Button
                onClick={() => {
                  setSendItemData([]);
                  setAddSlotToArray([]);
                }}
              >
                Reset your order
              </Button>
            </ButtonWrapper>
          </>
        ) : (
          <Div>Nothing to show, add product to the basket</Div>
        )}
      </section>
    </>
  );
};

export default Basket;
