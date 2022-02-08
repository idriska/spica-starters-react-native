import {SET_BASKET, SET_BASKET_ITEM, CHANGE_BASKET_ITEM_COUNT} from './types';

export const setBasketAction = (basket: any) => {
  return {
    type: SET_BASKET,
    data: basket,
  };
};

export const setBasketItemAction = (basketItem: any) => {
  return {
    type: SET_BASKET_ITEM,
    data: basketItem,
  };
};

export const changeFoodCountAction = (data: any) => {
  return {
    type: CHANGE_BASKET_ITEM_COUNT,
    data: data,
  };
};
