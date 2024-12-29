import {
    ScrollView,
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal'
import { scaleModerate } from '../../styles/scaleDimensions'
import { Colors } from '../../styles/Colors'
import FastImage from 'react-native-fast-image'
import { ic_close } from '../../assets'
import Spacer from './Spacer'
import { DefaultStyles } from '../../styles/DefaultStyles'
import Input from './Input'
import { removeAccent } from '../../utils/dataUtils'

interface IPicker {
    isVisible?: boolean
    title?: string
    data?: Array<{ key: string; name: string; value?: string; origin?: any }>
    onSelect?: any
    onClose?: any
    hasSearch?: boolean
    containerStyle?: ViewStyle
}

const Picker = (props: IPicker) => {
    const [filterData, setFilterData] = useState(props?.data)

    useEffect(() => {
        setFilterData(props?.data)
    }, [props?.data])

    const searchText = (text: any) => {
        if (text) {
            const result =
                props?.data?.filter((item) =>
                    removeAccent(item.name).trim().includes(removeAccent(text).trim())
                ) || []
            setFilterData(result)
        } else {
            setFilterData(props?.data)
        }
    }

    return (
        <Modal
            isVisible={props?.isVisible}
            style={styles.modal}
            onBackdropPress={() => props?.onClose()}
        >
            <View style={[styles.container, props?.containerStyle]}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Text style={DefaultStyles.textBold18Black}>{props.title}</Text>
                    <TouchableOpacity onPress={() => props?.onClose()}>
                        <FastImage
                            source={ic_close}
                            style={{ height: scaleModerate(24), width: scaleModerate(24) }}
                        />
                    </TouchableOpacity>
                </View>
                {props?.hasSearch && (
                    <>
                        <Spacer height={10} />
                        <Input type="search" onChangeText={searchText} />
                    </>
                )}
                <Spacer height={16} />
                <View style={{ borderTopWidth: 1, borderColor: Colors.gray72 }}></View>
                <Spacer height={8} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {filterData?.map((item, index) => (
                        <View key={`_${index}`}>
                            <Spacer height={8} />
                            <TouchableOpacity
                                style={styles.itemWrap}
                                onPress={() => {
                                    props?.onSelect(item)
                                    props?.onClose()
                                }}
                            >
                                <Text style={DefaultStyles.textRegular13Black} numberOfLines={1}>
                                    {item?.name}
                                </Text>
                                <Text style={DefaultStyles.textMedium13Black} numberOfLines={1}>
                                    {item?.value}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </Modal>
    )
}

export default Picker

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container: {
        backgroundColor: Colors.whiteFF,
        paddingTop: scaleModerate(24),
        paddingHorizontal: scaleModerate(24),
        paddingBottom: scaleModerate(40),
        borderTopRightRadius: scaleModerate(24),
        borderTopLeftRadius: scaleModerate(24),
        maxHeight: '90%',
    },
    itemWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.black1B,
        borderWidth: 1,
        borderRadius: scaleModerate(10),
        padding: scaleModerate(12),
    },
})
