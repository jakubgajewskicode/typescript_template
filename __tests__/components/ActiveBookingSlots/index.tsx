import { shallow } from 'enzyme';

import ActiveBookingSlots from '../../../components/ActiveBookingSlots';

const data = {
  slots: [],
  setActiveWorker: false,
  setItemId: 3,
};

describe('Page renders', () => {
  test('renders', () => {
    const activeBookingSlots = shallow(
      <ActiveBookingSlots
        slots={data.slots}
        setActiveWorker={data.setActiveWorker}
        setItemId={data.setItemId}
      />
    );
    expect(activeBookingSlots).toMatchSnapshot();
  });
});
