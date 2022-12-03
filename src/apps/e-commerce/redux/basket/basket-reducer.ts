import {
  CHANGE_BASKET_ITEM_COUNT,
  SET_BASKET,
  SET_BASKET_ITEM,
  CLEAR_BASKET,
} from './types';

export function basketReducer(state: any = {products: []}, action: any) {
  if (action.type === SET_BASKET) {
    state = action.data;
    return state;
  } else if (action.type === SET_BASKET_ITEM) {
    state.products.push(action.data);
    state = updateOrderPrice(state);
    return state;
  } else if (action.type === CHANGE_BASKET_ITEM_COUNT) {
    if (action.data.count > 0) {
      state.products[action.data.index].count = action.data.count;
    } else {
      state.products.splice(action.data.index, 1);
    }

    state = updateOrderPrice(state);
    return state;
  } else if (action.type === CLEAR_BASKET) {
    state.products = [];
    state = updateOrderPrice(state);
    return state;
  }

  return state;
}

const updateOrderPrice = (order: any) => {
  order.price = order.products.reduce(
    (acc: any, curr: any) => acc + curr.price * curr.count,
    0,
  );
  return order;
};
