import { useState, useEffect } from 'react';
import { ModalProvider, Modal } from '../Modal';

import WorkerPlacement from '../WorkerPlacement';
import ActiveBookingSlots from '../ActiveBookingSlots';
import Basket from '../Basket';

import { Header, SvgIcon } from './ui';

const HomePage = ({ slots, workers, availableWorkers }: any) => {
  const [activeWorker, setActiveWorker] = useState(true);
  const [itemID, setItemId] = useState<any>([null]);
  const [WorkerListActive, setWorkerListActive] = useState(Array);
  const [SendItemData, setSendItemData] = useState<any>([]);
  const [slotId, setSlotId] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [SendSlotID, setSendSlotData] = useState<any>([]);
  const [Slots, setAddSlotToArray] = useState<any>([]);

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
        <Header>
          <h1>Hilton Booking system *****</h1>
          <div onClick={() => setIsModalOpen(true)}>
            <SvgIcon>
              <svg
                width="60"
                height="60"
                viewBox="0 0 40 1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path d="M1.227 6l1.855 9h10.836l1.855-9H1.227zM8.5 5V0"></path>
                </g>
              </svg>
            </SvgIcon>
          </div>
        </Header>

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
            Slots={Slots}
            setAddSlotToArray={setAddSlotToArray}
          />
        )}

        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <Basket
              setSendItemData={setSendItemData}
              data={SendItemData}
              Slots={Slots}
              setAddSlotToArray={setAddSlotToArray}
            />
          </Modal>
        )}
      </ModalProvider>
    </>
  );
};
export default HomePage;
