import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { Colors } from '../../../styles/Colors'
import Spacer from '../../components/Spacer'

import { ic_more } from '../../../assets'
import { scaleModerate } from '../../../styles/scaleDimensions'
import { useDispatch, useSelector } from 'react-redux'
import { t } from 'i18next'
import GenericModal from '../../components/Modal'
import HeaderV2 from '../../components/HeaderV2'

const ItemAnswer = ({ answer }: any) => {
    const dispatch = useDispatch()
    const { data: authData } = useSelector((store: any) => store.auth)

    const [isLoading, setIsLoading] = useState(true)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`
        return `${date.toLocaleDateString('vi-VN', options)} ${t('at')} ${formattedTime}`
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                marginVertical: scaleModerate(10),
                paddingHorizontal: scaleModerate(15),
            }}
        >
            <FastImage
                source={{ uri: answer?.createBy?.avatarUrl }}
                style={styles.avataUserComment}
            />

            <View style={{ flex: 1 }}>
                <View style={styles.itemComment}>
                    <Text style={{ ...DefaultStyles.textMedium16Black }}>
                        {answer?.createBy?.fullName || 'Anonymous'}
                    </Text>
                    <Text style={{ ...DefaultStyles.textRegular14Black }}>{answer?.content}</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: scaleModerate(5),
                    }}
                >
                    <Spacer width={10} />

                    <Text style={{ ...DefaultStyles.textRegular14Gray }}>
                        {formatDate(answer?.createdAt)}
                    </Text>

                    <Text style={{ ...DefaultStyles.textRegular14Gray }}>ánkjasnsjkadsa</Text>
                    <Spacer width={20} />
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, color: 'gray' }}>{t('like')}</Text>
                    </TouchableOpacity>
                    <Spacer width={10} />
                    <View style={{ flex: 1 }} />

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    ></View>
                </View>
            </View>
        </View>
    )
}

export default ItemAnswer
const styles = StyleSheet.create({
    itemComment: {
        marginLeft: scaleModerate(10),
        backgroundColor: Colors.grayF5F,
        borderRadius: 8,
        width: '90%',
        paddingVertical: scaleModerate(5),
        paddingHorizontal: scaleModerate(10),
    },
    avataUserComment: {
        height: scaleModerate(26),
        width: scaleModerate(26),
        borderRadius: scaleModerate(15),
    },
})
