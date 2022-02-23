import styles from './styles';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, Image, View, ScrollView} from 'react-native';
import {Campaign_Product, Category} from '../../services/bucket';
import {getCapaignProducts, getCategories} from '../../services/DataService';
import {Searchbar} from 'react-native-paper';

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

const Home = () => {
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

  const renderCategories = () => {
    return categories.map((item, index) => (
      <View style={styles.categoryItem} key={`categori-${index}`}>
        <Image source={{uri: item.img}} style={styles.categoryImg} />
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    ));
  };

  const renderCampaignProducts = () => {
    return capaignProducts.map((item, index) => (
      <View style={styles.campaignItem} key={`campaign-${index}`}>
        <Image source={{uri: item.img}} style={styles.campaignImg} />
      </View>
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
