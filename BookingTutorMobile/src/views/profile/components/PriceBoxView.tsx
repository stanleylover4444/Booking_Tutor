import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { scaleModerate } from '../../../styles/scaleDimensions'
import { Colors } from '../../../styles/Colors'
import Spacer from '../../components/Spacer'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { numberWithCommas, numberWithoutCommas } from '../../../utils/dataUtils'

interface IPriceBoxView {
    data?: any
}
const PriceBoxView = forwardRef((props: IPriceBoxView, ref: any) => {
    const initData = props?.data
    const [form, setForm] = useState<any>({
        onlineAdvise: {
            fromValue: initData?.onlineAdvise?.fromValue || '',
            toValue: initData?.onlineAdvise?.toValue || '',
        },
        officeAdvise: {
            fromValue: initData?.officeAdvise?.fromValue || '',
            toValue: initData?.officeAdvise?.toValue || '',
        },
        makeContract: {
            fromValue: initData?.makeContract?.fromValue || '',
            toValue: initData?.makeContract?.toValue || '',
        },
        courtPresent: {
            fromValue: initData?.courtPresent?.fromValue || '',
            toValue: initData?.courtPresent?.toValue || '',
        },
    })
    const DATA = [
        { name: 'Tư vấn trực tuyến', key: 'onlineAdvise' },
        { name: 'Tư vấn tại văn phòng', key: 'officeAdvise' },
        { name: 'Soạn thảo hợp đồng', key: 'makeContract' },
        { name: 'Đại diện pháp lý tại tòa', key: 'courtPresent' },
    ]

    useImperativeHandle(ref, () => ({
        getData: () => {
            const formData = { ...form }
            console.log('formData', formData)
            Object.keys(formData).forEach((key) => {
                formData[key] = {
                    fromValue: numberWithoutCommas(formData[key]?.fromValue),
                    toValue: numberWithoutCommas(formData[key]?.toValue),
                }
            })
            return formData
        },
    }))

    return (
        <View style={styles.container}>
            <Text style={DefaultStyles.textBold14Black}>Giá tư vấn</Text>
            {DATA.map((item, index) => (
                <View key={`_${index}`} style={styles.rowWrap}>
                    <View style={styles.wrapText}>
                        <Text numberOfLines={2} style={styles.text}>
                            {item?.name}
                        </Text>
                    </View>
                    <TextInput
                        placeholder={'Từ...'}
                        style={styles.input}
                        keyboardType="number-pad"
                        value={numberWithCommas(form[item.key]?.fromValue, true)}
                        onChangeText={(text) => {
                            setForm({ ...form, [item.key]: { ...form[item.key], fromValue: text } })
                        }}
                    />
                    <Spacer width={5} />
                    <TextInput
                        placeholder={'Tới...'}
                        style={styles.input}
                        keyboardType="number-pad"
                        value={numberWithCommas(form[item.key]?.toValue, true)}
                        onChangeText={(text) => {
                            setForm({ ...form, [item.key]: { ...form[item.key], toValue: text } })
                        }}
                    />
                </View>
            ))}
        </View>
    )
})

export default PriceBoxView

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: scaleModerate(1),
        borderColor: Colors.border01,
        padding: scaleModerate(10),
        borderRadius: scaleModerate(5),
    },
    input: {
        height: scaleModerate(50),
        width: scaleModerate(100),
        borderBottomWidth: scaleModerate(1),
        borderColor: Colors.border01,
        color : Colors.black1B
    },
    rowWrap: {
        flexDirection: 'row',
        marginBottom: scaleModerate(5),
    },
    wrapText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        ...DefaultStyles.textRegular13Black,
    },
})
