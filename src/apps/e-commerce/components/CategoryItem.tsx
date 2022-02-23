import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Category} from '../services/bucket';
import * as COLORS from '../../../styles/colors';

interface IProps {
  data: Category;
  onClick: (id: string) => void;
}

const CategoryItem: FC<IProps> = ({data, onClick}) => {
  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => onClick(data._id as string)}>
      <Image source={{uri: data.img}} style={styles.categoryImg} />
      <Text style={styles.categoryName}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
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
});
