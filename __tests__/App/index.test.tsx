import React from 'react';

import { shallow } from 'enzyme';

import App from '../../pages/index';

it('renders Page without crashing', () => {
  shallow(<App />);
});
