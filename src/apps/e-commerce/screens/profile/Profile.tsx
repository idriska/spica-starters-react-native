import React, {useEffect, useState} from 'react';
import styles from './style';
import {SafeAreaView, View} from 'react-native';
import {
  SpicaAuthorization,
  SpicaProfileItemsList,
  SpicaProfilePicture,
  SpicaUploadImage,
} from '../../../../spica-components';
import Modal from 'react-native-modal';
import {getBufWithMeta, upload} from '../../../../services/ImageUpload';
import {AuthService} from '../../services/Auth';
import {showToastMessage} from '../../../../services/Helper';
import {useNavigation} from '@react-navigation/native';
import {userStore} from '../../redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParam} from '../../../../interfaces/interfaces';
import {updateUser} from '../../services/DataService';

const unseperatedItems = [
  {
    key: 'my_orders',
    value: 'My Orders',
    navigator: 'MyOrders',
  },
];

const Profile = () => {
  // const appNavigation = useNavigation<FoodDeliveryTabParams>();
  // const profileNavigation = useNavigation<FoodDeliveryProfileStackParam>();
  // const mainNavigation =
  //   useNavigation<NativeStackNavigationProp<MainStackParam>>();

  // const [seperatedItems, setSeperatedItems] = useState([
  //   {
  //     key: 'Email',
  //     value: '',
  //   },
  //   {
  //     key: 'Name',
  //     value: '',
  //   },
  //   {
  //     key: 'Surname',
  //     value: '',
  //   },
  // ]);
  // const [isModalVisible, setModalVisible] = useState(false);
  // const [user, setUser] = useState<any>(userStore.getState());
  // const authService = new AuthService();

  // useEffect(() => {
  //   let userData = userStore.getState();
  //   if (userData) {
  //     setUser(userData);
  //     prepareSeperateItems(userData);
  //   }

  //   const userSub = userStore.subscribe(() => {
  //     let userState: any = userStore.getState();
  //     setUser({...userState});
  //   });
  //   return () => {
  //     userSub();
  //   };
  // }, []);

  // const prepareSeperateItems = (userData: any) => {
  //   seperatedItems.forEach(
  //     (item: any) =>
  //       (item.value = userData[item.key.toLowerCase()]
  //         ? userData[item.key.toLowerCase()]
  //         : ''),
  //   );
  //   setSeperatedItems([...seperatedItems]);
  // };

  // const login = async (loginData: any) => {
  //   await authService
  //     .spicaLogin(loginData.email, loginData.password)
  //     .then(() => {
  //       appNavigation.navigate('Home');
  //     })
  //     .catch(err => {
  //       showToastMessage(err.message);
  //     });
  // };

  // const register = async (registerData: any) => {
  //   await authService
  //     .spicaRegister(registerData)
  //     .then((res: any) => {
  //       showToastMessage(res['message']);
  //       login({
  //         email: registerData.email,
  //         password: registerData.password,
  //       });
  //     })
  //     .catch(error => {
  //       showToastMessage(error.response.data.message);
  //     });
  // };

  // const logout = () => {
  //   authService.logout();
  //   mainNavigation.navigate('App');
  // };

  // const changeImage = async (image: any) => {
  //   const bufWithMeta = await getBufWithMeta(image);

  //   let newImage: any = '';
  //   let imageId;

  //   if (!user['profile_picture']) {
  //     newImage = await upload(bufWithMeta).catch(err => {
  //       console.log(err);
  //     });
  //   } else {
  //     let splitArr = user.profile_picture.split('/');
  //     imageId = splitArr[splitArr.length - 1].split('?')[0];

  //     newImage = await upload(bufWithMeta, imageId).catch(err => {
  //       console.log(err);
  //     });
  //   }

  //   if (newImage) {
  //     user['profile_picture'] =
  //       newImage.url + `&timestamp=${new Date().getTime()}`;
  //     updateUser(user);
  //   }
  // };

  return (
    <SafeAreaView>
      {/* {user ? (
        <View style={styles.profileContainer}>
          <SpicaProfilePicture
            thumbnail={user.profile_picture}
            imagePicker={() => {
              setModalVisible(true);
            }}
          />
          <SpicaProfileItemsList
            seperatedItems={seperatedItems}
            unseperatedItems={unseperatedItems}
            logout={() => logout()}
            navigateTo={(value: string) => {
              profileNavigation.navigate(value);
            }}
          />
        </View>
      ) : (
        <SpicaAuthorization
          login={(data: any) => {
            login(data);
          }}
          register={(data: any) => {
            register(data);
          }}
        />
      )}

      <Modal
        isVisible={isModalVisible}
        style={{justifyContent: 'flex-end', margin: 0}}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}>
        <SpicaUploadImage
          completed={(data: any) => {
            if (data) {
              changeImage(data);
            }
            setModalVisible(false);
          }}
        />
      </Modal> */}
    </SafeAreaView>
  );
};

export default Profile;
