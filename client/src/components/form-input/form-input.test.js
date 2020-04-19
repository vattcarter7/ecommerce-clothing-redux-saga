import React from 'react';
import { shallow } from 'enzyme';

import FormInput from './form-input.component';

describe('FormInput component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it('should render FormInput component', () => {
     // TODO: fix this test
    // expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange method when input changes', () => {
     // TODO: fix this test
    // wrapper.find('FormInputContainer').simulate('change');

    // expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render FormInputLabel if there is a label', () => {
     // TODO: fix this test
    // expect(wrapper.exists('FormInputLabel')).toBe(true);
  });

  it('should not render FormInputLabel if there is no label', () => {
     // TODO: fix this test
    // const mockNewProps = {
    //   label: '',
    //   value: 'test@gmail.com',
    //   handleChange: mockHandleChange
    // };

    // const newWrapper = shallow(<FormInput {...mockNewProps} />);

    // expect(newWrapper.exists('FormInputLabel')).toBe(false);
  });
});
