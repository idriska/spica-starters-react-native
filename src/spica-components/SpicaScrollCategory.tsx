import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';
import * as COLORS from '../styles/colors';

const SpicaScrollCategory = ({categories, clicked}: any) => {
  const [active, setActive] = useState('all');

  const changedActive = (value: string) => {
    setActive(value);
    clicked(value);
  };

  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={[styles.button, active === 'all' && styles.activeButton]}
        onPress={() => changedActive('all')}>
        <Text style={styles.buttonText}>All</Text>
      </TouchableOpacity>
      {categories.map((item: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, active === item._id && styles.activeButton]}
          onPress={() => changedActive(item._id)}>
          <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SpicaScrollCategory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    maxHeight: 80,
  },
  button: {
    alignSelf: 'flex-start',
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: COLORS.HELPER_GRAY,
  },
  activeButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  buttonText: {
    color: COLORS.WHITE,
  },
});
