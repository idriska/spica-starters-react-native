import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Campaign_Product} from '../services/bucket';

interface IProps {
  data: Campaign_Product;
  onClick: (id: string) => void;
}

const CampaignProducItem: FC<IProps> = ({data, onClick}) => {
  return (
    <TouchableOpacity
      style={styles.campaignItem}
      onPress={() => onClick(data._id as string)}>
      <Image source={{uri: data.img}} style={styles.campaignImg} />
    </TouchableOpacity>
  );
};

export default CampaignProducItem;

const styles = StyleSheet.create({
  campaignItem: {
    marginTop: 5,
  },
  campaignImg: {
    width: '100%',
    height: 170,
  },
});
