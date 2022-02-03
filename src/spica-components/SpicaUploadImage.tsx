import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as COLORS from '../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const defaultImage =
  'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61b70351fcfbb9002efed548?alt=media&timestamp=1639383890618';

const SpicaUploadImage = ({}: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{uri: defaultImage}} />
    </View>
  );
};

export default SpicaUploadImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
});
