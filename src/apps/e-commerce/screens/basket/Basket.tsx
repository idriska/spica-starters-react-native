import React, {useEffect, useState} from 'react';
import styles from './style';
import {ScrollView, TouchableOpacity, Text, Image, View} from 'react-native';
import {basketStore} from '../../redux/store';

const Basket = () => {
  const [basket, setBasket] = useState<any>(basketStore.getState());
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  useEffect(() => {
    const basketSub = basketStore.subscribe(() => {
      setBasket(JSON.parse(JSON.stringify(basketStore.getState())));
    });
    return () => {
      basketSub();
    };
  }, [basket]);

  const renderBasket = () => {
    return basket.products?.map((item: any, index: number) => (
      //   <FoodCard
      //     data={item}
      //     key={`order-${index}`}
      //     type="order"
      //     changeCount={(count: number) => {
      //       addToOrder(item, count);
      //     }}
      //   />
      <></>
    ));
  };

  return (
    <View style={styles.container}>
      {basket.products.length ? (
        <>
          {/* <ScrollView style={styles.foodContainer}>{renderBasket()}</ScrollView> */}
          <View style={styles.bottomTools}>
            <View>
              <Text>Total</Text>
              <Text style={styles.totalAmount}>{basket.price} USD</Text>
            </View>
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => setShowPaymentModal(true)}>
              <Text style={styles.btnText}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Image
            style={styles.emptyImage}
            source={{
              uri: 'https://cdn.dribbble.com/users/1168645/screenshots/3152485/media/9beceb082a92006c310a72aa8e2fdfaa.png?compress=1&resize=400x300',
            }}
          />
          <Text style={styles.emptyText}>Basket is empty</Text>
        </View>
      )}
    </View>
  );
};

export default Basket;
