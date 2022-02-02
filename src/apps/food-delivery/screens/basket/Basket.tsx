import React, {useEffect, useState} from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {FoodCard} from '../../components';
import {basketStore} from '../../redux/store';

const Basket = () => {
  const [basket, setBasket] = useState<any>(basketStore.getState());

  useEffect(() => {
    const basketSub = basketStore.subscribe(() => {
      setBasket(basketStore.getState());
    });
    return () => {
      basketSub();
    };
  }, [basket]);

  const renderBasket = () => {
    return basket.foods?.map((item: any, index: number) => (
      <FoodCard
        data={item}
        key={`order-${index}`}
        type="order"
        changeCount={() => {}}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.foodContainer}>{renderBasket()}</ScrollView>
      <View style={styles.bottomTools}>
        <View>
          <Text>Total</Text>
          <Text style={styles.totalAmount}>{basket.price} USD</Text>
        </View>
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.btnText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Basket;
