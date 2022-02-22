import * as Identity from '@spica-devkit/identity';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';
import {initialize, user} from './bucket';
import {setUserAction} from '../redux/user/actions';
import {userStore} from '../redux/store';
import axios from 'axios';

const apiUrl = 'https://spica-starters-7229b.hq.spicaengine.com/api';
const apikey = 'axfb9k1akx06fe2u';

export class AuthService {
  constructor() {
    initialize({apikey: apikey});
    Identity.initialize({
      publicUrl: apiUrl,
      apikey: apikey,
    });
  }

  async spicaLogin(identifier: string, password: string) {
    return Identity.login(identifier, password).then(async token => {
      const activeProject = await AsyncStorage.getItem('ActiveProject');
      await AsyncStorage.setItem(`${activeProject}_SpicaToken`, token);
      return this.getUser();
    });
  }

  async spicaRegister(userData: any) {
    return axios.post(`${apiUrl}/fn-execute/register`, {
      user_data: userData,
      project: 'FOOD_DELIVERY',
    })
  }

  async getUser() {
    const token: any = await this.getActiveToken();
    if (token) {
      user
        .getAll({
          queryParams: {filter: {identity_id: token?._id}},
        })
        .then(res => {
          if (res) {
            userStore.dispatch(setUserAction(res[0]));
          }
        });
    }
  }

  async logout() {
    const activeProject = await AsyncStorage.getItem('ActiveProject');
    await AsyncStorage.removeItem(`${activeProject}_SpicaToken`);
    userStore.dispatch(setUserAction(undefined));
  }

  async getActiveToken() {
    const activeProject = await AsyncStorage.getItem('ActiveProject');
    const tokenKey = await AsyncStorage.getItem(`${activeProject}_SpicaToken`);

    return this.tokenDecode(tokenKey || '');
  }

  tokenDecode(token: string) {
    if (token) return jwt_decode(token);
    return false;
  }
}
