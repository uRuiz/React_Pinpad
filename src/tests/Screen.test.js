import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { Screen } from '../components/Screen/Screen';

describe('Tests in <Screen />', () => {
  
  test('It should show <Screen /> properly', () => {
    const password = '2012'
    const wrapper = shallow(<Screen password={password}/>);

    expect(wrapper).toMatchSnapshot();
  });

  test('It should show the password send by props', () => {    
    const password = 'ERROR';
    const wrapper = shallow(<Screen password={password}/>);
    
    expect(wrapper).toMatchSnapshot();
  });

  test('It should show none message', () => {    
    const password = '';
    const wrapper = shallow(<Screen password={password}/>);
    const screenMessage = wrapper.find('input').text()

    expect(screenMessage).toBe(password);
  });
})
