import { shallow } from 'enzyme';

import Header from '../../../components/Header';

const data = {
  setIsModalOpen: false,
};

describe('Basket renders', () => {
  test('renders', () => {
    const header = shallow(<Header setIsModalOpen={data.setIsModalOpen} />);
    const H1 = header.find('h1');

    expect(header).toMatchSnapshot();
    expect(H1).toHaveLength(1);
    expect(H1.text()).toEqual('Hilton Booking system *****');
  });
});
