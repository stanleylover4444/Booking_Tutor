import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { Colors } from '../../../styles/Colors'
import Spacer from '../../components/Spacer'
import { scaleModerate } from '../../../styles/scaleDimensions'
import { useSelector } from 'react-redux'
import { t } from 'i18next'

const ItemQuestion = ({ question, openModal }: any) => {
    const { data: authData } = useSelector((store: any) => store.auth)

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
                source={{ uri: question?.createdBy?.avatarUrl }}
                style={styles.avataUserComment}
            />

            <View style={{ flex: 1 }}>
                <View style={styles.itemComment}>
                    <Text style={{ ...DefaultStyles.textMedium16Black }}>
                        {question?.createdBy?.name || 'Anonymous'}
                    </Text>
                    <Text style={{ ...DefaultStyles.textRegular14Black }}>{question?.content}</Text>
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
                        {formatDate(question?.createdAt)}
                    </Text>
                    <Spacer width={20} />

                    {authData?.type === 'lawyer' ? (
                        question?.answer == null ? (
                            <TouchableOpacity onPress={() => openModal(question)}>
                                <Text
                                    style={{
                                        ...DefaultStyles.textBold14Black,
                                        color: Colors.gray69,
                                    }}
                                >
                                    {t('Trả lời')}
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => openModal(question)}>
                                <Text
                                    style={{
                                        ...DefaultStyles.textBold14Black,
                                        color: Colors.gray69,
                                    }}
                                >
                                    {t('Xem câu trả lời')}
                                </Text>
                            </TouchableOpacity>
                        )
                    ) : (
                        <TouchableOpacity onPress={() => openModal(question)}>
                            <Text
                                style={{ ...DefaultStyles.textBold14Black, color: Colors.gray69 }}
                            >
                                {question?.answer ? t('Xem câu trả lời') : ''}
                            </Text>
                        </TouchableOpacity>
                    )}
                    <Spacer width={10} />
                    <View style={{ flex: 1 }} />
                </View>

                <View style={{ marginStart: 10, marginTop: 5 }}>
                    {question?.answer == null ? (
                        <Text style={{ ...DefaultStyles.textRegular14Black }}>
                            {t('Chưa có người trả lời')}
                        </Text>
                    ) : (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FastImage
                                source={{ uri: question?.answeredBy?.avatarUrl }}
                                style={styles.avataUserComment}
                            />
                            <Spacer width={5} />
                            <Text style={{ ...DefaultStyles.textRegular14Black }}>
                                {question?.answeredBy?.fullName} {t('đã trả lời')}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default ItemQuestion

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
