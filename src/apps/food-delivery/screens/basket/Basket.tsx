import React, {useEffect, useState} from 'react';
import {ScrollView, View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import {FoodCard} from '../../components';
import {basketStore, userStore} from '../../redux/store';
import {Food, user} from '../../services/bucket';
import {changeFoodCountAction} from '../../redux/basket/actions';
import Modal from 'react-native-modal';
import {
  SpicaAddressModal,
  SpicaPaymentModal,
} from '../../../../spica-components';
import {updateUserAddresses} from '../../services/DataService';

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
    return basket.foods?.map((item: any, index: number) => (
      <FoodCard
        data={item}
        key={`order-${index}`}
        type="order"
        changeCount={(count: number) => {
          addToOrder(item, count);
        }}
      />
    ));
  };

  const addToOrder = (food: Food, count: number) => {
    const index = basketStore
      .getState()
      .foods.findIndex((f: any) => isSameFood(f, food));

    if (index != -1) {
      basketStore.dispatch(changeFoodCountAction({food, count, index}));
    }
  };

  const isSameFood = (food1: any, food2: any) => {
    return (
      food1._id == food2._id &&
      food1.ingredients.every((i: any) => food2.ingredients.includes(i)) &&
      food1.ingredients.length == food2.ingredients.length
    );
  };

  const handlePaymenetAction = (value: string) => {
    setShowPaymentModal(false);
    if (value === 'newAddress') {
      setShowAddressModal(true);
    }
  };

  const saveAddress = async (addressData: any) => {
    setShowAddressModal(false);
    await updateUserAddresses(addressData);
    setShowPaymentModal(true);
  };

  return (
    <View style={styles.container}>
      {basket.foods.length ? (
        <>
          <ScrollView style={styles.foodContainer}>{renderBasket()}</ScrollView>
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
          <Text style={styles.emptyText}>There is no food</Text>
        </View>
      )}

      <Modal
        isVisible={showPaymentModal}
        style={{justifyContent: 'flex-end', margin: 0}}
        swipeDirection="down"
        onSwipeComplete={() => setShowPaymentModal(false)}>
        <SpicaPaymentModal
          totalPrice={basket.price}
          addresses={userStore.getState()?.address}
          paymentMethods={[
            {title: 'Cash'},
            {title: 'Credit Card'},
            {title: 'Online'},
          ]}
          action={(value: string) => handlePaymenetAction(value)}
        />
      </Modal>

      <Modal
        isVisible={showAddressModal}
        style={{justifyContent: 'flex-end', margin: 0}}
        swipeDirection="down"
        onSwipeComplete={() => setShowAddressModal(false)}>
        <SpicaAddressModal
          save={(addressData: any) => saveAddress(addressData)}
        />
      </Modal>
    </View>
  );
};

export default Basket;
