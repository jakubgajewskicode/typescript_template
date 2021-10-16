import { useState, useEffect } from 'react';

import { Grid } from '../../utils/grid';
import { Image } from '../../utils/image';
import { H2, P } from '../../utils/Typography';
import { ItemContainer } from '../../utils/imageContainer';
import { Button } from '../../utils/button';

import { SectionSubHeader, ThanksMsg, StyledP } from './ui';

const WorkerPlacement = ({
  SendItemData,
  setSendItemData,
  WorkerListActive,
  setActiveWorker,
  slotId,
  SlotsArray,
  setAddSlotToArray,
}: any) => {
  const [thanks, setThanks] = useState(false);

  useEffect(() => {
    if (thanks === true) {
      setTimeout(() => {
        setThanks(false);
      }, 2000);
    }
  }, [thanks]);

  return (
    <>
      <SectionSubHeader>
        <h1>Available Workers</h1>
        <Button
          onClick={() => {
            setActiveWorker(true);
          }}
        >
          Go back
        </Button>
      </SectionSubHeader>

      {thanks ? (
        <ThanksMsg>
          <StyledP>Thank you, your item is added to your basket 🏅</StyledP>
        </ThanksMsg>
      ) : (
        <Grid>
          {WorkerListActive.map((nameList: any) => {
            return (
              <ItemContainer
                tabIndex={0}
                onClick={() => {
                  setSendItemData([...SendItemData, nameList]);
                  setAddSlotToArray([...SlotsArray, slotId]);
                  setThanks(true);
                }}
                key={nameList.id}
              >
                <Image src="https://picsum.photos/200" alt={nameList.name} />
                <H2>{nameList.name}</H2>
                Rating:<P>{nameList.rating}</P>
                {nameList.isNew && <P>New Employee</P>}
              </ItemContainer>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default WorkerPlacement;
