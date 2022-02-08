import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as COLORS from './../styles/colors';
import {SpicaInput, SpicaButton} from '../styles/styled-components';

const SpicaAuthorization = ({login, register}: any) => {
  const [activeIndex, setActiveIndex] = useState<string>('login');
  const [showPassword, setShowPassword] = useState(false);

  const [credentials, setCredentials] = useState({
    email: '',
    name: '',
    surname: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.segmentBox}>
        <TouchableOpacity
          onPress={() => setActiveIndex('login')}
          style={[
            activeIndex == 'login'
              ? styles.activeSegmentBtn
              : styles.deactiveSegmentBtn,
          ]}>
          <Text
            style={[
              styles.segmentText,
              activeIndex == 'login' && styles.activeSegmentText,
            ]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveIndex('register')}
          style={[
            activeIndex == 'register'
              ? styles.activeSegmentBtn
              : styles.deactiveSegmentBtn,
          ]}>
          <Text
            style={[
              styles.segmentText,
              activeIndex == 'register' && styles.activeSegmentText,
            ]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      {activeIndex === 'login' ? (
        <View style={styles.segmentSection}>
          <SpicaInput
            keyboardType="email-address"
            autoCapitalize="none"
            label="E-Mail"
            onChangeText={value =>
              setCredentials({...credentials, email: value})
            }
          />
          <SpicaInput
            label="Password"
            secureTextEntry={!showPassword}
            onChangeText={value =>
              setCredentials({...credentials, password: value})
            }
            right={
              <SpicaInput.Icon
                name={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
          <SpicaButton
            contentStyle={{height: 60}}
            icon="login"
            mode="contained"
            onPress={() => login(credentials)}>
            LOGIN
          </SpicaButton>
        </View>
      ) : (
        <View style={styles.segmentSection}>
          <SpicaInput
            label="Name"
            onChangeText={value =>
              setCredentials({...credentials, name: value})
            }
          />
          <SpicaInput
            label="Surname"
            onChangeText={value =>
              setCredentials({...credentials, surname: value})
            }
          />
          <SpicaInput
            label="E-Mail"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={value =>
              setCredentials({...credentials, email: value})
            }
          />
          <SpicaInput
            label="Password"
            secureTextEntry={!showPassword}
            onChangeText={value =>
              setCredentials({...credentials, password: value})
            }
            right={
              <SpicaInput.Icon
                name={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
          <SpicaButton
            contentStyle={{height: 60}}
            icon="login"
            mode="contained"
            onPress={() => register(credentials)}>
            REGISTER
          </SpicaButton>
        </View>
      )}
    </View>
  );
};

export default SpicaAuthorization;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.HELPER_GRAY,
    marginBottom: 3,
  },
  activeSegmentBtn: {
    flex: 1 / 2,
    alignItems: 'center',
    padding: 7,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.PRIMARY,
  },
  deactiveSegmentBtn: {
    flex: 1 / 2,
    alignItems: 'center',
    padding: 7,
  },
  segmentText: {
    fontSize: 20,
    color: COLORS.HELPER_GRAY,
  },
  activeSegmentText: {
    color: COLORS.BLACK,
  },
  segmentSection: {
    width: '100%',
    padding: 20,
  },

  passwordIcon: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    backgroundColor: 'red',
  },
});
