import React from 'react';
import { shallow } from 'enzyme';

import CartDropdown  from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDropdown {...mockProps}  />);
  });

  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when button is clicked', () => {
     // TODO: fix this test
    // wrapper.find('CartDropdownButton').simulate('click');
    // expect(mockHistory.push).toHaveBeenCalled();
    // expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it('should render an equal number of CartItem components as the cartItems prop', () => {
     // TODO: fix this test
    // expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it('should render EmptyMessageContainer if cartItems is empty', () => {
    // TODO: fix this test to work
    // const mockProps = {
    //   cartItems: [],
    //   history: mockHistory,
    //   dispatch: mockDispatch
    // };

    // const newWrapper = shallow(<CartDropdown {...mockProps} />);
    // expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
  });
});
