import React from 'react';
import styles from './style';

import {SafeAreaView, Text, View} from 'react-native';
import {
  SpicaProfileItemsList,
  SpicaProfilePicture,
} from '../../../../spica-components';

const seperatedItems = [
  {
    key: 'email',
    value: 'test@ads.asd',
    seperate: true,
  },
  {
    key: 'name',
    value: 'asd',
    seperate: true,
  },
  {
    key: 'surname',
    value: 'asdasd',
    seperate: true,
  },
];

const unseperatedItems = [
  {
    key: 'my_orders',
    value: 'My Orders',
    seperate: true,
  },
];

const Profile = () => {
  return (
    <SafeAreaView style={styles.saveArea}>
      <SpicaProfilePicture />
      <SpicaProfileItemsList
        seperatedItems={seperatedItems}
        unseperatedItems={unseperatedItems}
        logout={() => {}}
      />
    </SafeAreaView>
  );
};

export default Profile;
