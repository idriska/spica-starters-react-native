import {category, food, initialize, order} from './bucket';
import {setFoodsAction, setBasketAction} from '../redux/actions';
import {foodStore, basketStore} from '../redux/store';

export const getFoods = (catId: any = undefined) => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });

  food
    .getAll({
      queryParams: {
        relation: true,
        filter: {categories: catId},
        sort: {_id: -1},
      },
    })
    .then(foods => {
      foodStore.dispatch(setFoodsAction(foods));
    });
};

export const getCategories = async () => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  return category.getAll();
};

export const getBasket = async () => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  order.getAll({
    queryParams: {
      // filter: {user: },
    },
  })
  .then(orders => {
    basketStore.dispatch(setBasketAction(orders));
  });
};
