import { shallow } from 'enzyme';

import Basket from '../../../components/Basket';

const data = {
  slots: [],
  setSendItemData: false,
  setItemId: 3,
  SlotsArray: [],
  setAddSlotToArray: false,
};

describe('Basket renders', () => {
  test('renders', () => {
    const basket = shallow(
      <Basket
        data={data.slots}
        setSendItemData={data.setSendItemData}
        setItemId={data.setItemId}
        SlotsArray={data.SlotsArray}
        setAddSlotToArray={data.setAddSlotToArray}
      />
    );
    const H2 = basket.find('h2');

    expect(basket).toMatchSnapshot();
    expect(H2).toHaveLength(1);
    expect(H2.text()).toEqual('Your Basket');
  });
});
