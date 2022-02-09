import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import * as COLORS from '../styles/colors';
import {SpicaInput, SpicaButton} from '../styles/styled-components';

const SpicaAddressModal = ({save}: any) => {
  const [addressData, setAddressData] = useState({
    title: '',
    phone: '',
    country: '',
    province: '',
    district: '',
    full_address: '',
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.swipeLine}></View>
      <SpicaInput
        label="Address Title"
        onChangeText={(value: string) =>
          setAddressData({...addressData, title: value})
        }
      />
      <SpicaInput
        label="Country"
        onChangeText={(value: string) =>
          setAddressData({...addressData, country: value})
        }
      />
      <SpicaInput
        label="Province"
        onChangeText={(value: string) =>
          setAddressData({...addressData, province: value})
        }
      />
      <SpicaInput
        label="District"
        onChangeText={(value: string) =>
          setAddressData({...addressData, district: value})
        }
      />
      <SpicaInput
        label="Full Address"
        multiline={true}
        numberOfLines={4}
        onChangeText={(value: string) =>
          setAddressData({...addressData, full_address: value})
        }
      />
      <SpicaInput
        label="Phone"
        keyboardType="phone-pad"
        onChangeText={(value: string) =>
          setAddressData({...addressData, phone: value})
        }
      />
      <SpicaButton
        contentStyle={{height: 60}}
        mode="contained"
        onPress={() => save(addressData)}>
        SAVE ADDRESS
      </SpicaButton>
    </KeyboardAvoidingView>
  );
};

export default SpicaAddressModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 580,
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
});
