import React, {useEffect, useState} from 'react';
import styles from './style';
import {SafeAreaView, Text, View} from 'react-native';
import {
  SpicaAuthorization,
  SpicaProfileItemsList,
  SpicaProfilePicture,
  SpicaUploadImage,
} from '../../../../spica-components';
import Modal from 'react-native-modal';
import {upload} from '../../../../services/ImageUpload';
import {AuthService} from '../../services/Auth';
import {showToastMessage} from '../../../../services/Helper';
import {useNavigation} from '@react-navigation/native';
import {FoodDeliveryTabParams} from '../../interfaces/interfaces';
import {userStore} from '../../redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParam} from '../../../../interfaces/interfaces';

const unseperatedItems = [
  {
    key: 'my_orders',
    value: 'My Orders',
  },
];

const changeImage = async (image: any) => {
  // uri: image.path,
  // type: image.mime,
  // console.log(image);
  // setLoadingImage(true);
  // const uploadedFile = event.target.files[0];
  const newImage: any = await upload(image).catch(err => {
    console.log(newImage);
  });
  console.log('newImage', newImage);
  // changed({ ...user, thumbnail: newImage[0].url });
  // setLoadingImage(false);
};

const Profile = () => {
  const appNavigation = useNavigation<FoodDeliveryTabParams>();
  const mainNavigation =
    useNavigation<NativeStackNavigationProp<MainStackParam>>();

  const [seperatedItems, setSeperatedItems] = useState([
    {
      key: 'Email',
      value: '',
    },
    {
      key: 'Name',
      value: '',
    },
    {
      key: 'Surname',
      value: '',
    },
  ]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState<any>(userStore.getState());
  const authService = new AuthService();

  useEffect(() => {
    const userSub = userStore.subscribe(() => {
      let userState: any = userStore.getState();
      setUser(JSON.parse(JSON.stringify(userState)));
      if (userState) {
        seperatedItems.forEach(
          item => (item.value = userState[item.key] ? userState[item.key] : ''),
        );
        setSeperatedItems(seperatedItems);
      }
    });
    return () => {
      userSub();
    };
  }, [user]);

  const login = async (loginData: any) => {
    await authService
      .spicaLogin(loginData.email, loginData.password)
      .then(() => {
        appNavigation.navigate('Home');
      })
      .catch(err => {
        showToastMessage(err.message);
      });
  };

  const register = async (registerData: any) => {
    await authService
      .spicaRegister(registerData)
      .then((res: any) => {
        showToastMessage(res['message']);
        login({
          email: registerData.email,
          password: registerData.password,
        });
      })
      .catch(error => {
        showToastMessage(error.response.data.message);
      });
  };

  const logout = () => {
    authService.logout();
    mainNavigation.navigate('App');
  };

  return (
    <SafeAreaView>
      {user ? (
        <View style={styles.profileContainer}>
          <SpicaProfilePicture
            imagePicker={() => {
              setModalVisible(true);
            }}
          />
          <SpicaProfileItemsList
            seperatedItems={seperatedItems}
            unseperatedItems={unseperatedItems}
            logout={() => logout()}
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
            setModalVisible(false);
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;
