import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import * as COLORS from '../../../../styles/colors';

const {width: vpWidth, height: vpHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    borderRadius: 50,
    alignSelf: 'center',
    width: vpWidth - 30,
    marginVertical: 12
  },
  categoryItem: {
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  categoryImg: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.HELPER_GRAY,
    borderRadius: 100,
  },
  categoryName: {
    textAlign: 'center',
    marginTop: 5,
  },
  campaignItem: {
    marginTop: 5,
  },
  campaignImg: {
    width: '100%',
    height: 170,
  },
});

export default styles;
