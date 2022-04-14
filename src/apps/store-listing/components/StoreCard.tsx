import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

interface StoreCardProps {
  store: any;
  pressed: () => void;
}

const StoreCard: FC<StoreCardProps> = ({store, pressed}) => {
  return (
    <Pressable
      onPress={() => {
        pressed();
      }}
      style={styles.mainContent}>
      <Image style={styles.image} source={{uri: store.images[0]}} />

      <View style={styles.text}>
        <View style={styles.storeTextHead}>
          <Text style={{marginBottom: 5}}>
            <IonicIcons name="ios-location" size={16} />
            {store.country}
          </Text>
          <Text>{store.phone}</Text>
        </View>
        <View>
          <Text style={styles.storeTextTitle}>{store.name}</Text>
          <Text style={{marginTop: 5}}>{store.description}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  mainContent: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 220,
  },
  text: {
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#dcdcdc',
  },
  storeTextHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storeTextTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
});
