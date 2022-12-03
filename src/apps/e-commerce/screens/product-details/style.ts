import {Dimensions, StyleSheet} from 'react-native';
import * as COLORS from '../../../../styles/colors';

const {width: vpWidth, height: vpHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  img: {
    width: vpWidth * 0.8,
    height: vpWidth * 0.8,
    borderRadius: 500,
    alignSelf: 'center',
    marginVertical: 15,
  },
  metadata: {
    height: vpHeight - vpWidth * 0.8 - 90,
    backgroundColor: COLORS.HELPER_LIGHT_ORANGE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  detailsContent: {
    flex: 1,
    width: '100%',
    top: 10,
    position: 'absolute',
    height: vpHeight,
  },
  detailsBtn: {
    backgroundColor: COLORS.HELPER_ORANGE,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginTop: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
  },
  subTitle: {
    marginBottom: 10,
  },
  attributeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  attributeScrollView: {
    marginLeft: 7,
  },
  color: {
    width: 15,
    height: 15,
    borderRadius: 100,
  },
  activeColor: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.HELPER_GRAY,
  },
  attributeItem: {
    marginHorizontal: 7,
    padding: 5,
    borderRadius: 5,
  },
  activeAttribute: {
    backgroundColor: COLORS.HELPER_GRAY,
  },
  bottom: {
    width: '100%',
    height: 65,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.HELPER_GRAY,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  normalPrice: {
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.SUCCESS,
  },
  addToBasket: {
    backgroundColor: COLORS.SUCCESS,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});

export default styles;
