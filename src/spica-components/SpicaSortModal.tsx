import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import * as COLORS from '../styles/colors';

interface IProps {
  data: {title: string; key: string}[];
  onClick: (value: string) => void;
}

const SpicaSortModal: FC<IProps> = ({data, onClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.swipeLine}></View>
      {data.map(item => (
        <TouchableOpacity
          key={item.key}
          style={styles.modalTouchable}
          onPress={() => onClick(item.key)}>
          <Text style={styles.contentTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SpicaSortModal;

const styles = StyleSheet.create({
  container: {
    height: 280,
    paddingTop: 15,
    backgroundColor: COLORS.WHITE,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 20,
  },
  swipeLine: {
    alignSelf: 'center',
    width: 80,
    height: 2,
    borderRadius: 100,
    backgroundColor: COLORS.HELPER_GRAY,
    marginBottom: 15,
  },
  modalTouchable: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.HELPER_GRAY,
  },
  contentTitle: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
});
