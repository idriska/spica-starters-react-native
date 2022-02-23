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
  }
});

export default styles;
