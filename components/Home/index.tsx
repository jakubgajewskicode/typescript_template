import { useState, useEffect } from 'react';
import { ModalProvider, Modal } from '../Modal';

import Header from '../Header';
import ActiveBookingSlots from '../ActiveBookingSlots';
import WorkerPlacement from '../WorkerPlacement';
import Basket from '../Basket';

import { IProps } from '../../types/home';

const HomePage = ({ slots, workers, availableWorkers }: IProps) => {
  const [activeWorker, setActiveWorker] = useState<Boolean>(true);
  const [itemID, setItemId] = useState<Number[]>([]);
  const [WorkerListActive, setWorkerListActive] = useState(Array);
  const [SendItemData, setSendItemData] = useState<any>([]);
  const [slotId, setSlotId] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [SendSlotID, setSendSlotData] = useState<any>([]);
  const [SlotsArray, setAddSlotToArray] = useState<any>([]);

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
      <ModalProvider>
        <Header setIsModalOpen={setIsModalOpen} />

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
            WorkerListActive={WorkerListActive}
            setActiveWorker={setActiveWorker}
            itemID={itemID}
            setItemId={setItemId}
            SendSlotID={SendSlotID}
            setSendSlotData={setSendSlotData}
            slotId={slotId}
            SlotsArray={SlotsArray}
            setAddSlotToArray={setAddSlotToArray}
          />
        )}

        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <Basket
              setSendItemData={setSendItemData}
              data={SendItemData}
              SlotsArray={SlotsArray}
              setAddSlotToArray={setAddSlotToArray}
            />
          </Modal>
        )}
      </ModalProvider>
    </>
  );
};
export default HomePage;
