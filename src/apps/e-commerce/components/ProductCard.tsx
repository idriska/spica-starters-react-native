import React, {FC} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import {Product} from '../services/bucket';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as COLORS from '../../../styles/colors';

interface IProps {
  data: Product;
}
const ProductCard: FC<IProps> = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: data.cover_image}} style={styles.img} />
      <View style={styles.top}>
        <Text numberOfLines={1} style={styles.title}>
          {data.title}
        </Text>
        <Ionicons name="heart" size={22} />
      </View>
      <View style={styles.middle}>
        <Text numberOfLines={1}>{data.discounted_price}$</Text>
        <Text numberOfLines={1} style={styles.normPrice}>
          {data.normal_price}$
        </Text>
      </View>
      {data.is_free_delivery ? (
        <Text>Free delivery</Text>
      ) : (
        <Text>Paid delivery</Text>
      )}
    </TouchableOpacity>
  );
};

export default ProductCard;

const {width: vpWidth, height: vpHeight} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: vpWidth * 0.5 - 15,
    height: vpWidth * 0.7,
    padding: 8,
    borderWidth: 1,
    borderColor: COLORS.HELPER_GRAY,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: '65%',
    borderRadius: 10
  },
  title: {
    width: vpWidth * 0.5 - 65,
    fontSize: 16,
  },
  top: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  middle: {
    flexDirection: 'row',
  },
  normPrice: {
    marginLeft: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
