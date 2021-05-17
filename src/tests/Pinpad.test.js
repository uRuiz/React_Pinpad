import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import Pinpad from '../Pinpad';

describe('Tests in <Pinpad />', () => {
  const wrapper = shallow(<Pinpad />);

  test('It should show Pinpad properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})