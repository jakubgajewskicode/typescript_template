import { useState, useEffect } from 'react';

import WorkerPlacement from '../WorkerPlacement';
import ActiveBookingSlots from '../ActiveBookingSlots';
import Basket from '../Basket';

const HomePage = ({ slots, workers, availableWorkers }: any) => {
  const [activeWorker, setActiveWorker] = useState(true);
  const [itemID, setItemId] = useState(null);
  const [WorkerListActive, setWorkerListActive] = useState(Array);
  const [addToBasket, setaddToBasket] = useState(false);
  const [SendItemData, setSendItemData] = useState<any>([]);
  const [slotId, setSlotId] = useState(null);

  useEffect(() => {
    if (!activeWorker) {
      const workerListActive = availableWorkers['available-workers'].find(
        (test: any) => test.slot_id === itemID
      );
      const activeSlots = workerListActive['availableWorker_ids'];
      const workersList = workers.workers;

      const NameList = activeSlots.map((item: any) =>
        workersList.find((name: any) => name.id === item)
      );

      setWorkerListActive(NameList);

      const slotID = workerListActive.slot_id;

      setSlotId(slotID);
    }
  }, [activeWorker]);

  return (
    <>
      <h1>Hilton Booking system *****</h1>

      {activeWorker && slots && (
        <ActiveBookingSlots
          slots={slots.slots}
          setActiveWorker={setActiveWorker}
          setItemId={setItemId}
        />
      )}

      {!activeWorker && SendItemData && WorkerListActive && (
        <WorkerPlacement
          SendItemData={SendItemData}
          setSendItemData={setSendItemData}
          setaddToBasket={setaddToBasket}
          WorkerListActive={WorkerListActive}
          setActiveWorker={setActiveWorker}
          setItemId={setItemId}
        />
      )}

      {addToBasket && SendItemData && slotId && (
        <Basket
          setSendItemData={setSendItemData}
          slotId={slotId}
          data={SendItemData}
        />
      )}
    </>
  );
};
export default HomePage;
