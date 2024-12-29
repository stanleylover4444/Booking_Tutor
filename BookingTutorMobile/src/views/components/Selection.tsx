import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {ic_chevron_down} from '../../assets';
import {DefaultStyles} from '../../styles/DefaultStyles';
import {scaleModerate} from '../../styles/scaleDimensions';
import {Colors} from '../../styles/Colors';
import Picker from './Picker';

interface ISelection {
  title: string;
  onSelect?: any;
  data?: Array<{key: string; name: string; value?: string; origin?: any}>;
  containerStyle?: ViewStyle;
  hasSearch?: boolean;
  pickerStyle?: ViewStyle;
  keyValue?: string | null | undefined;
  error?: boolean;
}
const Selection = (props: ISelection) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    if (props?.keyValue && props?.data && props?.data?.length > 0) {
      if (selectedItem?.key !== props?.keyValue) {
        const foundItem = props?.data?.find(
          item => item.key === props?.keyValue,
        );
        setSelectedItem(foundItem);
      }
    } else {
      setSelectedItem(null);
    }
  }, [props?.keyValue, props?.data]);

  return (
    <View style={[props?.containerStyle]}>
      {props?.title && (
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>{props?.title}</Text>
        </View>
      )}
      <Pressable
        onPress={() => {
          setShowPicker(true);
        }}
        style={[styles.wrap, props?.error ? {borderColor: Colors.redFD} : {}]}>
        <Text style={styles.text}>{selectedItem?.name || ''}</Text>
        <FastImage source={ic_chevron_down} style={styles.icon} />
      </Pressable>
      <Picker
        isVisible={showPicker}
        title={props?.title}
        data={props?.data}
        onSelect={(item: any) => {
          setSelectedItem(item);
          setShowPicker(false);
          props?.onSelect && props?.onSelect(item);
        }}
        onClose={() => {
          setShowPicker(false);
        }}
        hasSearch={props?.hasSearch}
        containerStyle={props?.pickerStyle}
      />
    </View>
  );
};

export default Selection;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    borderWidth: scaleModerate(1),
    height: scaleModerate(40),
    borderRadius: scaleModerate(8),
    borderColor: Colors.whiteE6,
    backgroundColor: Colors.whiteFF,
    alignItems: 'center',
  },
  icon: {
    width: scaleModerate(20),
    height: scaleModerate(20),
    marginRight: scaleModerate(14),
  },
  wrapTitle: {
    marginBottom: scaleModerate(-10),
    marginLeft: scaleModerate(16),
    zIndex: 2,
    alignItems: 'flex-start',
  },
  title: {
    ...DefaultStyles.textRegular14Black,
    backgroundColor: Colors.whiteFF,
  },
  text: {
    flex: 1,
    marginLeft: scaleModerate(16),
    marginTop: scaleModerate(5),
    ...DefaultStyles.textRegular14Black,
  },
});
