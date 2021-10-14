const Basket = ({ data, slotId, setSendItemData }: any) => {
  return (
    <section>
      <h2>Your Basket</h2>

      {data.map((item: any) => (
        <section key={item.id}>
          <div>worker name: {item.name}</div>
          <div>worker rating: {item.rating}</div>
          {item.isNew && <li>New Employee</li>}
          <div>worker ID: {item.id}</div>
          <div>slot ID: {slotId}</div>
        </section>
      ))}
      <button onClick={() => setSendItemData([])}>Reset your order</button>
    </section>
  );
};

export default Basket;
