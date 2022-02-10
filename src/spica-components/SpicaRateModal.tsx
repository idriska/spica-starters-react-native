import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as COLORS from '../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SpicaButton} from '../styles/styled-components';

const SpicaRateModal = ({title, action}: any) => {
  const [rating, setRating] = useState<number>(3);
  const [comment, setComment] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.swipeLine}></View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((item: number, index: number) => (
          <MaterialCommunityIcons
            key={`star-${index}`}
            name="star"
            style={styles.star}
          />
        ))}
      </View>
      <TextInput
        style={styles.comment}
        placeholder="Enter your comment"
        multiline={true}
        numberOfLines={6}
        onChangeText={(value: string) => setComment(value)}
      />
      <SpicaButton
        contentStyle={{height: 50}}
        style={styles.applyBtn}
        mode="contained"
        onPress={() => action()}>
        APPLY
      </SpicaButton>
    </View>
  );
};

export default SpicaRateModal;

const styles = StyleSheet.create({
  container: {
    height: 340,
    paddingTop: 15,
    backgroundColor: COLORS.WHITE,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swipeLine: {
    alignSelf: 'center',
    width: 80,
    height: 2,
    borderRadius: 100,
    backgroundColor: COLORS.HELPER_GRAY,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  applyBtn: {
    alignSelf: 'center',
    width: 170,
    borderRadius: 30,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 32,
    color: 'rgb(255, 196, 0)',
    marginHorizontal: 7,
  },
  comment: {
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: 'top',
  },
});
