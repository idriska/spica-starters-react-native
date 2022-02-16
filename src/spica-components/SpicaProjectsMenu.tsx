import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, Animated, Easing, Dimensions} from 'react-native';
import * as COLORS from '../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SpicaProjectsList} from '.';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const SpicaProjectsMenu = ({}: any) => {
  const [menuYpos, setMenuYpos] = useState(270);
  const [backdropYpos, setBackdropYpos] = useState(viewportHeight);

  const menuPosAnim = useRef(new Animated.Value(menuYpos)).current;
  const backdropPosAnim = useRef(new Animated.Value(backdropYpos)).current;

  const menuAnimation = () => {
    let newMenuPos = menuYpos === 270 ? 0 : 270;
    let newBackdropPos = menuYpos === 0 ? viewportHeight : 0;
    setMenuYpos(newMenuPos);

    Animated.timing(menuPosAnim, {
      toValue: newMenuPos,
      duration: 700,
      useNativeDriver: true,
    } as any).start();

    Animated.timing(backdropPosAnim, {
      toValue: newBackdropPos,
      duration: 700,
      easing:
        newBackdropPos === 0
          ? Easing.bezier(0.3, 0.88, 0.46, 0.99)
          : Easing.bezier(0.71, 0.32, 0.92, 0.62),
      useNativeDriver: true,
    } as any).start();
  };

  return (
    <>
      <Animated.View
        style={[
          styles.backdrop,
          {transform: [{translateX: backdropPosAnim}]},
        ]}></Animated.View>
      <Animated.View
        style={[styles.content, {transform: [{translateX: menuPosAnim}]}]}>
        <View style={styles.innerContent}>
          <SpicaProjectsList clicked={() => {menuAnimation()}}/>
          <MaterialCommunityIcons
            name="chevron-right"
            style={styles.showBtn}
            onPress={() => menuAnimation()}
          />
        </View>
      </Animated.View>
    </>
  );
};

export default SpicaProjectsMenu;

const styles = StyleSheet.create({
  backdrop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  innerContent: {
    alignSelf: 'flex-end',
    width: 270,
    padding: 20,
    height: '70%',
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
  },
  showBtn: {
    fontSize: 30,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    top: '50%',
    left: -20,
    height: 60,
    width: 30,
    textAlignVertical: 'center',
    borderRadius: 10,
    transform: [{translateY: -30}],
  },
});
