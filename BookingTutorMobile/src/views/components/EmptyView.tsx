import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {scaleModerate} from '../../styles/scaleDimensions';
import {ic_empty} from '../../assets';
import {DefaultStyles} from '../../styles/DefaultStyles';
import {Colors} from '../../styles/Colors';

const EmptyView = ({top = 30}: {top?: number}) => {
  return (
    <View style={{alignItems: 'center', marginTop: scaleModerate(top)}}>
      <FastImage source={ic_empty} style={styles.image} />
      <Text style={[DefaultStyles.textRegular14Gray]}>Không có dữ liệu</Text>
    </View>
  );
};

export default EmptyView;

const styles = StyleSheet.create({
  image: {
    width: scaleModerate(50),
    height: scaleModerate(50),
    alignSelf: 'center',
    marginBottom: scaleModerate(3),
  },
});
