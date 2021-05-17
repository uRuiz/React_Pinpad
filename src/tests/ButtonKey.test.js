import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { ButtonKey } from '../components/ButtonKey/ButtonKey';

describe('Tests in <Button />', () => {

  const value = "1";
  const wrapper = shallow(<ButtonKey value={value}/>);

  test('It should show <ButtonKey /> properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should show the value and disables props', () => {    
    const disabled = true;
    const wrapper = shallow(
      <ButtonKey 
        value={value}
        disabled={disabled}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  test('It should show the value of the button', () => {
    const valueButton = wrapper.find('button').text()

    expect(valueButton).toBe(value);
  });
})
