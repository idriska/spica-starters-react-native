import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Product} from '../../services/bucket';
import {getProduct} from '../../services/DataService';
import styles from './styles';
import RenderHtml from 'react-native-render-html';

const {width: vpWidth, height: vpHeight} = Dimensions.get('window');

const ProductDetails = ({route}: any) => {
  const [product, setProduct] = useState<Product>({});
  const [selectedAttributes, setSelectedAttributes] = useState<any>({});
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    getProduct(route.params.id).then(res => {
      setProduct(res);
      setInitialAttributes(res);
    });
  }, []);

  const setInitialAttributes = (prod: Product) => {
    let obj = {};
    prod.attributes?.map((item: any, index) => {
      obj = {...obj, ...{[item.name]: item.value[0]}};
    });
    setSelectedAttributes({...obj});
  };

  const selectAttribute = (key: string, value: string) => {
    setSelectedAttributes({...selectedAttributes, [key]: value});
  };

  const renderAttributes = () => {
    return product.attributes?.map((attribute: any, index) => (
      <View key={attribute._id} style={styles.attributeBox}>
        <Text>{attribute.name}:</Text>
        <ScrollView horizontal={true} style={styles.attributeScrollView}>
          {attribute.value.map((value: any, index: number) => (
            <TouchableOpacity
              key={`attribute-${index}`}
              onPress={() => selectAttribute(attribute.name, value)}>
              {attribute.name.toLowerCase() === 'color' ? (
                <View
                  style={[
                    styles.attributeItem,
                    styles.color,
                    {backgroundColor: value.toLowerCase()},
                    value === selectedAttributes[attribute.name] &&
                      styles.activeColor,
                  ]}></View>
              ) : (
                <Text
                  style={[
                    styles.attributeItem,
                    value === selectedAttributes[attribute.name] &&
                      styles.activeAttribute,
                  ]}>
                  {value}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    ));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={{uri: product.cover_image}} style={styles.img} />
      <View style={[styles.metadata, showDetails && styles.detailsContent]}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.subTitle}>{product.sub_title}</Text>
        {renderAttributes()}
        <TouchableOpacity onPress={() => setShowDetails(!showDetails)} style={styles.detailsBtn}>
          <Text>{showDetails ? 'Hide Details' : 'Show Details'}</Text>
        </TouchableOpacity>
        {product.description && showDetails && (
          <RenderHtml
            contentWidth={vpWidth}
            source={{html: product.description as string}}
          />
        )}
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.normalPrice}>{product.normal_price}$</Text>
          <Text style={styles.discountedPrice}>
            {product.discounted_price}$
          </Text>
        </View>
        <TouchableOpacity style={styles.addToBasket}>
          <Text>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
