import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { ic_chevron_left } from '../../assets'
import { scaleModerate } from '../../styles/scaleDimensions'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../styles/Colors'
import { DefaultStyles } from '../../styles/DefaultStyles'

interface IHeader {
  title?: string
  isBack?: boolean
  onPressBack?: () => void
  containerStyle?: ViewStyle
  rightIcon?: any
  onRightButtonPress?: () => void
  type?: 'full' | 'simple'
}

const HeaderV2 = (props: IHeader) => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    if (props?.onPressBack) {
      props.onPressBack()
    } else {
      navigation.canGoBack() && navigation.goBack()
    }
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      {/* Nút quay lại */}
      {props.isBack && (
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <FastImage source={ic_chevron_left} style={styles.iconBack} />
        </TouchableOpacity>
      )}

      {/* Tiêu đề */}
      <View
        style={[
          styles.titleContainer,
          props.type === 'full' && { flex: 1 },
          !props.isBack && props.rightIcon && { marginStart: scaleModerate(36) }, 
        ]}
      >
        <Text
          style={[
            styles.title,
            props.type === 'simple' && {
              textAlign: 'center',
              marginRight: scaleModerate(40),
            },
          ]}
        >
          {props.title}
        </Text>
      </View>

      {/* Icon phải */}
      {props.type === 'full' && props.rightIcon && (
        <TouchableOpacity onPress={props.onRightButtonPress} style={styles.rightButton}>
          <FastImage source={props.rightIcon} style={styles.iconRight} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default HeaderV2

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleModerate(20),
    height: scaleModerate(56),
    backgroundColor: Colors.whiteFF,
    borderBottomWidth: scaleModerate(1),
    borderColor: Colors.border01,
  },
  backButton: {
    padding: scaleModerate(10),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...DefaultStyles.textBold16Black,
    textAlign: 'center',
  },
  iconBack: {
    height: scaleModerate(24),
    width: scaleModerate(24),
  },
  rightButton: {
    padding: scaleModerate(10),
  },
  iconRight: {
    height: scaleModerate(24),
    width: scaleModerate(24),
  },
})
