import styles from './style';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Campaign_Product, Category} from '../../services/bucket';
import {getCapaignProducts, getCategories} from '../../services/DataService';
import {Searchbar} from 'react-native-paper';
import {CampaignProducItem, CategoryItem} from '../../components';
import {ECommerceStackParam} from '../../interfaces/interfaces';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const categories = [
  {
    name: 'Accessory',
    img: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c9a70ba24b002d19b839?alt=media&timestamp=1645611136667',
  },
  {
    name: 'Accessory',
    img: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c9a70ba24b002d19b839?alt=media&timestamp=1645611136667',
  },
  {
    name: 'Accessory',
    img: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c9a70ba24b002d19b839?alt=media&timestamp=1645611136667',
  },
  {
    name: 'Accessory',
    img: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c9a70ba24b002d19b839?alt=media&timestamp=1645611136667',
  },
  {
    name: 'Accessory',
    img: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c9a70ba24b002d19b839?alt=media&timestamp=1645611136667',
  },
  {
    name: 'Accessory',
    img: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c9a70ba24b002d19b839?alt=media&timestamp=1645611136667',
  },
];

const Home = ({navigation}: any) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [capaignProducts, setCapaignProducts] = useState<Campaign_Product[]>(
    [],
  );
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
    getCategories().then(res => {
      setCategories(res);
    });
    getCapaignProducts().then(res => {
      setCapaignProducts(res);
    });
  }, []);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const toProducts = (type: string, id: string) => {
    navigation.navigate('Products', {type: type, id: id});
  };

  const renderCategories = () => {
    return categories.map((item, index) => (
      <CategoryItem
        key={`category-${index}`}
        data={item}
        onClick={id => toProducts('category', id)}
      />
    ));
  };

  const renderCampaignProducts = () => {
    return capaignProducts.map((item, index) => (
      <CampaignProducItem
        key={`capmaign-${index}`}
        data={item}
        onClick={id => toProducts('campaign', id)}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView style={{height: 120}} horizontal={true}>
        {renderCategories()}
      </ScrollView>
      <ScrollView>{renderCampaignProducts()}</ScrollView>
    </SafeAreaView>
  );
};

export default Home;
