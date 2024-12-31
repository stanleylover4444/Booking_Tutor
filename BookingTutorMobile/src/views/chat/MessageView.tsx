import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DefaultStyles} from '../../styles/DefaultStyles';
import HeaderV2 from '../components/HeaderV2';
import {scaleModerate} from '../../styles/scaleDimensions';

const MessageView = () => {
  return (
    <SafeAreaView style={DefaultStyles.container}>
      <HeaderV2 title="Tin nhắn" type="simple" />
      <View style={DefaultStyles.wrapBody}></View>
    </SafeAreaView>
  );
};

export default MessageView;

const styles = StyleSheet.create({});
