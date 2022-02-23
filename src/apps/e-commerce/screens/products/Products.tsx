import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ProductCard} from '../../components';
import {Product} from '../../services/bucket';
import {getCapaignProduct, getProducts} from '../../services/DataService';

const Products = ({route}: any) => {
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

  return (
    <SafeAreaView>
      <FlatList
        style={{padding: 10}}
        columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 10}}
        refreshing={true}
        data={products}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ProductCard data={item} />}></FlatList>
    </SafeAreaView>
  );
};

export default Products;
