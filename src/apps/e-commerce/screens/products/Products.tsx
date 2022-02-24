import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {ProductCard} from '../../components';
import {Product} from '../../services/bucket';
import {getCapaignProduct, getProducts} from '../../services/DataService';
import Modal from 'react-native-modal';
import {SpicaSortModal} from '../../../../spica-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const sortItems = [
  {title: 'Highest Price', key: 'highest_price'},
  {title: 'Lowest Price', key: 'lower_price'},
  {title: 'Latest Products', key: 'latest_products'},
  {title: 'Oldest Products', key: 'oldest_products'},
];

const Products = ({route, navigation}: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showSortModal, setShowSortModal] = useState(true);
  const [sortQuery, setSortQuery] = useState({});

  useEffect(() => {
    if (route.params.type === 'campaign') {
      getCapaignProduct(route.params.id)
        .then(res => {
          setProducts(res.products as Product[]);
        })
        .catch(err => console.log('ERROR', err));
    } else {
      getProducts({categories: route.params.id}, sortQuery).then(res => {
        setProducts(res as Product[]);
      });
    }
  }, [sortQuery]);

  const toProductDetails = (id: string) => {
    navigation.navigate('ProductDetails', {id: id});
  };

  const handleSort = (key: string) => {
    if (key == 'highest_price') {
      setSortQuery({normal_price: -1});
    } else if (key == 'lower_price') {
      setSortQuery({normal_price: 1});
    } else if (key == 'latest_products') {
      setSortQuery({created_at: -1});
    } else if (key == 'oldest_products') {
      setSortQuery({created_at: 1});
    } else {
      setSortQuery({});
    }
    setShowSortModal(false)
  };

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <TouchableOpacity style={styles.topBtn} onPress={() => setShowSortModal(true)}>
          <MaterialCommunityIcons size={26} name="sort" />
          <Text style={styles.topTex}>SORT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBtn}>
          <MaterialCommunityIcons size={26} name="filter" />
          <Text style={styles.topTex}>FILTER</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{padding: 10}}
        columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 10}}
        refreshing={true}
        data={products}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ProductCard
            data={item}
            onClick={() => toProductDetails(item._id as string)}
          />
        )}></FlatList>
      <Modal
        isVisible={showSortModal}
        style={{justifyContent: 'flex-end', margin: 0}}
        swipeDirection="down"
        onSwipeComplete={() => setShowSortModal(false)}>
        <SpicaSortModal data={sortItems} onClick={key => handleSort(key)} />
      </Modal>
    </SafeAreaView>
  );
};

export default Products;
