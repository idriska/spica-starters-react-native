import { SET_FOODS, SET_BASKET, SET_BASKET_ITEM, CHANGE_BASKET_AMOUNT } from "./types";

export const setFoodsAction = (foods: any) => {
  return {
    type: SET_FOODS,
    data: foods,
  };
};

// BASKET ACTIONS
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
    type: CHANGE_BASKET_AMOUNT,
    data: data,
  };
};