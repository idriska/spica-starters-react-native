import {CHANGE_BASKET_AMOUNT, SET_BASKET, SET_BASKET_ITEM} from './types';

export function basketReducer(state: any = {foods: []}, action: any) {
  if (action.type === SET_BASKET) {
    state = action.data;
    return state;
  } else if (action.type === SET_BASKET_ITEM) {
    state.foods.push(action.data);
    state = updateOrderPrice(state);
    return state;
  } else if (action.type === CHANGE_BASKET_AMOUNT) {
    state.foods[action.data.index].count += action.data.count;
    state = updateOrderPrice(state);
    return state;
  }

  return state;
}

const updateOrderPrice = (order: any) => {
  order.price = order.foods.reduce(
    (acc: any, curr: any) => acc + curr.price * curr.count,
    0,
  );
  return order;
};
