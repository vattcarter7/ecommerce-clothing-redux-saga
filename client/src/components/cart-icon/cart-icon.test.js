import React from 'react';
import { shallow } from 'enzyme';
import CartIcon from './cart-icon.component';

describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCartHidden;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };

     // TODO: fix the wrapper
    //wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it('should render CartIcon component', () => {
    // TODO: fix this test to work
    // expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCartHidden when icon is clicked', () => {
     // TODO: fix this test
    // wrapper.find('CartContainer').simulate('click');
    // expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it('should render the itemCount as the text', () => {
     // TODO: fix this test
    // const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
    // expect(itemCount).toBe(0);
  });
});
