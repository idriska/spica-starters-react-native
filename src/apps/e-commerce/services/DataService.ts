
// import {setFoodsAction} from '../redux/food/actions';
// import {clearBasketAction, setBasketAction} from '../redux/basket/actions';
import {
  updateUserAction,
  updateUserAddressesAction,
} from '../redux/user/actions';
import { campaign_product, category, initialize } from './bucket';

// export const getFoods = (catId: any = undefined) => {
//   initialize({
//     apikey: 'axfb9k1akx06fe2u',
//   });

//   food
//     .getAll({
//       queryParams: {
//         relation: true,
//         filter: {categories: catId},
//         sort: {_id: -1},
//       },
//     })
//     .then(foods => {
//       foodStore.dispatch(setFoodsAction(foods));
//     });
// };

export const getCategories = async () => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  return category.getAll();
};

export const getCapaignProducts = async () => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  return campaign_product.getAll();
};
// export const getBasket = async () => {
//   initialize({
//     apikey: 'axfb9k1akx06fe2u',
//   });
//   order
//     .getAll({
//       queryParams: {
//         // filter: {user: },
//       },
//     })
//     .then(orders => {
//       basketStore.dispatch(setBasketAction(orders));
//     });
// };

// export const updateUserAddresses = async (addressData: any) => {
//   let addressArr = userStore.getState()?.address || [];
//   addressArr.push(addressData);
//   await user.patch({
//     address: addressArr,
//     _id: userStore.getState()._id as string,
//   });
//   userStore.dispatch(updateUserAddressesAction(addressArr));
// };

// export const insertOrder = async (orderData: any) => {
//   console.log(orderData);
//   await order.insert(orderData).then(_ => {
//     basketStore.dispatch(clearBasketAction());
//   });
// };

// export const updateUser = async (userData: any) => {
//   await user.patch({
//     _id: userData._id,
//     ...userData,
//   });
//   userStore.dispatch(updateUserAction(userData));
// };
