import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {MainStackParam} from '../interfaces/interfaces';

const SpicaProjectsList = ({clicked}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParam>>();

  const projects = [
    {
      projectId: 'FoodDelivery',
      name: 'Food Delivery',
      icon: 'fast-food-outline',
      navigate: 'FoodDelivery',
    },
    {
      projectId: 'Fitness',
      name: 'Fitness Application',
      icon: 'ios-barbell',
      navigate: 'FitnessApp',
    },
    {
      projectId: 'ECommerce',
      name: 'E-Commerce Application',
      icon: 'cart-outline',
      navigate: 'ECommerce',
    },
  ];

  const renderProjects = () => {
    return projects.map((item, index) => (
      <TouchableOpacity
        style={styles.projectItem}
        key={index}
        onPress={() => {
          goToProject(item.projectId, item.navigate);
          clicked();
        }}>
        <Ionicons name={item.icon} size={32} />
        <Text style={styles.projectItemText}>{item.name}</Text>
      </TouchableOpacity>
    ));
  };

  const goToProject = async (projectId: string, navigator: string) => {
    await AsyncStorage.setItem('ActiveProject', projectId);
    navigation.navigate(navigator);
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.subTitle}>
        You can access all projects with the below credentials
      </Text>

      <View style={styles.credentials}>
        <Text>Username: admin@gmail.com</Text>
        <Text>Password: admin</Text>
      </View>

      {renderProjects()}
    </ScrollView>
  );
};

export default SpicaProjectsList;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  credentials: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderStyle: 'dashed',
  },
  projectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cecece',
    marginTop: 15,
    paddingBottom: 5,
  },
  projectItemText: {
    marginLeft: 15,
  },
});
