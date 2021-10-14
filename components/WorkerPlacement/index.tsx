const WorkerPlacement = ({
  SendItemData,
  setSendItemData,
  setaddToBasket,
  WorkerListActive,
  setActiveWorker,
  setItemId,
}: any) => {
  return (
    <>
      <>
        <button
          onClick={() => {
            setActiveWorker(true);
            setItemId(null);
          }}
        >
          Go back
        </button>
        <div>
          Available Workers
          <ul>
            {WorkerListActive.map((nameList: any) => {
              return (
                <div key={nameList.id}>
                  <li>{nameList.name}</li>
                  Rating:<li>{nameList.rating}</li>
                  {nameList.isNew && <li>New Employee</li>}
                  <button
                    onClick={() => {
                      setaddToBasket(true);
                      setSendItemData([...SendItemData, nameList]);
                    }}
                  >
                    Add to the basket
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    </>
  );
};

export default WorkerPlacement;
