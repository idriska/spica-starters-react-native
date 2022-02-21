import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { showToastMessage } from '../../../../services/Helper';
import {SpicaAuthorization} from '../../../../spica-components';
import {AuthService} from '../../services/Auth';
import { AppointmentStackParam } from '../../interfaces/interfaces';

const Login = () => {
  const authService = new AuthService();
  const appNavigation = useNavigation<AppointmentStackParam>();

  const login = async (loginData: any) => {
    await authService
      .spicaLogin(loginData.email, loginData.password)
      .then(() => {
        appNavigation.navigate('AppointmentTabNavigator');
      })
      .catch(err => {
        showToastMessage(err.message);
      });
  };

  return (
    <SpicaAuthorization
      login={(data: any) => login(data)}
    />
  );
};

export default Login;
