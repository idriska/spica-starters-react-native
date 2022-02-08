import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParam} from './interfaces/interfaces';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
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

  const goToProject = async (projectId: string, navigator: string) => {
    await AsyncStorage.setItem('ActiveProject', projectId);
    navigation.navigate(navigator);
  };

  const renderProjects = () => {
    return projects.map((item, index) => (
      <TouchableOpacity
        style={styles.projectItem}
        key={index}
        onPress={() => {
          goToProject(item.projectId, item.navigate);
        }}>
        <Ionicons name={item.icon} size={32} />
        <Text style={styles.projectItemText}>{item.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        style={styles.container}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>Spica Engine Starters Kits</Text>
        <Text style={styles.subTitle}>
          You can access all projects with the below credentials
        </Text>

        <View style={styles.credentials}>
          <Text>Username: admin@gmail.com</Text>
          <Text>Password: admin</Text>
        </View>

        {renderProjects()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20,
  },
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

export default App;
