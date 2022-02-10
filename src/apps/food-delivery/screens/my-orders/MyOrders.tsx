import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {SpicaButton} from '../../../../styles/styled-components';
import {userStore} from '../../redux/store';
import {order} from '../../services/bucket';
import styles from './style';
import * as COLORS from '../../../../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Moment from 'moment';
import Modal from 'react-native-modal';
import {SpicaRateModal} from '../../../../spica-components';

const MyOrders = () => {
  const [orders, setOrders] = useState<any>([]);
  const [showRateModal, setShowRateModal] = useState(true);

  useEffect(() => {
    getMyOrders().then(orders => {
      orders.forEach((el: any) => {
        let maxDate = new Date();
        maxDate.setDate(maxDate.getDate() - 2);
        if (new Date(el.created_at) > maxDate) {
          el['can_rate'] = true;
        }
      });
      setOrders(orders);
    });
  }, []);

  const getMyOrders = async () => {
    let user = userStore.getState();
    return order.getAll({
      queryParams: {
        filter: {user: user._id},
        relation: true,
        sort: {_id: -1},
      },
    });
  };

  const rate = (orderId: string) => {};

  return (
    <ScrollView style={styles.ordersContainer}>
      {orders?.map((order: any, index: number) => (
        <View style={styles.orderCard} key={`orderCard-${index}`}>
          <Text style={styles.header}>Status: {order.status}</Text>
          <View style={styles.content}>
            <View style={styles.foodsContainer}>
              {order.foods.map((food: any, foodIndex: number) => (
                <Text key={`food-${foodIndex}`} style={styles.foodName}>
                  {food.count + ' ' + food.name}
                </Text>
              ))}
            </View>
            <Text>Total: {order.price}$</Text>
            <Text>
              Date: {Moment(order.created_at).format('d MMM YYYY HH:MM')}{' '}
            </Text>
            {!order['can_rate'] && !order.rating && (
              <Text style={{color: COLORS.HELPER_RED}}>
                You cannot rate because more than 2 days have passed since your
                order.
              </Text>
            )}
            {order['can_rate'] && !order.rating && (
              <SpicaButton
                contentStyle={{height: 40}}
                style={styles.rateBtn}
                mode="contained"
                onPress={() => rate(order._id)}>
                Rate
              </SpicaButton>
            )}
            {order.rating && (
              <Text>
                Rated:{' '}
                <MaterialCommunityIcons
                  name="star"
                  size={16}
                  color="rgb(255, 196, 0)"
                />
                {order.rating?.rating}
              </Text>
            )}
          </View>
        </View>
      ))}
      <Modal
        isVisible={showRateModal}
        style={{justifyContent: 'flex-end', margin: 0}}
        swipeDirection="down"
        onSwipeComplete={() => setShowRateModal(false)}>
        <SpicaRateModal title="Rate Food" action={() => {}}/>
      </Modal>
    </ScrollView>
  );
};

export default MyOrders;
