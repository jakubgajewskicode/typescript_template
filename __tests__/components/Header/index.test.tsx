import { shallow } from 'enzyme';

import Header from '../../../components/Header';
import { H1 } from '../../../components/Header/ui';

describe('Header renders', () => {
  test('renders', () => {
    const header = shallow(<Header />);
    const H1Wrapper = header.find(H1);

    expect(header).toMatchSnapshot();
    expect(H1Wrapper).toHaveLength(1);
    expect(H1Wrapper.text()).toEqual('Property search tool');
  });
});
