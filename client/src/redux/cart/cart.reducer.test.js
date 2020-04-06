import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
} from './cart.types';

import cartReducer from './cart.reducer';

const initialState = {
  hidden: true,
  cartItems: [],
};

describe('cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle hidden with toggleHidden action', () => {
    expect(cartReducer(initialState, { type: TOGGLE_CART_HIDDEN }).hidden).toBe(
      false
    );
  });

  it('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: ADD_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(4);
  });

  it('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: REMOVE_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it('should remove item from cart if clearItemFromCart action fired with payload of existing item', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CLEAR_ITEM_FROM_CART,
        payload: mockItem,
      }).cartItems.includes((item) => item.id === 1)
    ).toBe(false);
  });

  it('should clear cart if clearCart action fired', () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CLEAR_CART,
      }).cartItems.length
    ).toBe(0);
  });
});
