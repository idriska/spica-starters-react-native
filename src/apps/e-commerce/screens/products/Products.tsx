import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ProductCard} from '../../components';
import {Product} from '../../services/bucket';
import {getCapaignProduct, getProducts} from '../../services/DataService';

const Products = ({route, navigation}: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (route.params.type === 'campaign') {
      getCapaignProduct(route.params.id)
        .then(res => {
          setProducts(res.products as Product[]);
        })
        .catch(err => console.log('ERROR', err));
    } else {
      getProducts().then(res => {
        setProducts(res as Product[]);
      });
    }
  }, []);

  const toProductDetails = (id: string) => {
    navigation.navigate('ProductDetails', {id: id});
  };

  return (
    <SafeAreaView>
      <FlatList
        style={{padding: 10}}
        columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 10}}
        refreshing={true}
        data={products}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ProductCard data={item} onClick={() => toProductDetails(item._id as string)} />
        )}></FlatList>
    </SafeAreaView>
  );
};

export default Products;
