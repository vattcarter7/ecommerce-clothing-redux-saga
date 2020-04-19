import React from 'react';
import { shallow } from 'enzyme';

import CheckoutItem from './checkout-item.component';

describe('CheckoutItem component', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2,
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
     // TODO: fix this test
    // expect(wrapper).toMatchSnapshot();
  });

  it('should call clearItem when remove button is clicked', () => {
     // TODO: fix this test
    // wrapper.find('RemoveButtonContainer').simulate('click');
    // expect(mockClearItem).toHaveBeenCalled();
  });

  it('should call addItem when left arrow is clicked', () => {
     // TODO: fix this test
    // wrapper.find('QuantityContainer').childAt(0).simulate('click');

    // expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('should call addItem when right arrow is clicked', () => {
     // TODO: fix this test
    // wrapper.find('QuantityContainer').childAt(2).simulate('click');

    // expect(mockAddItem).toHaveBeenCalled();
  });
});
