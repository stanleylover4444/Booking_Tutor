import React from 'react'
import { scaleModerate } from '../../../styles/scaleDimensions'
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Colors } from '../../../styles/Colors'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { useNavigation } from '@react-navigation/native'
import Spacer from '../../components/Spacer'

const ItemFeeLawyer = ({
    itemLawyer,
    containerStyle = {},
}: {
    itemLawyer: any
    containerStyle?: ViewStyle
}) => {
    const { t, i18n } = useTranslation()
    const navigation = useNavigation()

    const getPriceRange = (priceData: any, key: string) => {
        const { fromValue, toValue } = priceData?.[key] || {}

        if (fromValue && toValue && toValue !== 0) {
            return `${fromValue.toLocaleString()} - ${toValue.toLocaleString()} VND`
        } else if (fromValue && toValue === 0) {
            return `Từ ${fromValue.toLocaleString()} VND`
        }

        return ''
    }

    const handlePressDetailLawyer = () => {
        navigation.navigate(...(['DetailLawyerView', { itemLawyer }] as never))
    }

    return (
        <View style={[{ flex: 1 }, containerStyle]}>
            <Spacer height={10} />
            <TouchableOpacity style={styles.itemContainer} onPress={handlePressDetailLawyer}>
                <View style={{ paddingVertical: scaleModerate(5), alignItems: 'center' }}>
                    <Text
                        style={[styles.text, { fontWeight: 'bold' }]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {itemLawyer.fullName}
                    </Text>
                    <Spacer height={10} />
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.border01,
                            flexDirection: 'row',
                            borderRadius: 8,
                        }}
                    >
                        <View
                            style={{
                                borderRightWidth: 1,
                                borderColor: Colors.border01,
                                width: '50%',
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: Colors.whiteAE,
                                    borderBottomWidth: 1,
                                    borderTopLeftRadius: 8,
                                    borderColor: Colors.border01,
                                }}
                            >
                                <Text
                                    style={[
                                        DefaultStyles.textBold14Black,
                                        { padding: scaleModerate(10) },
                                    ]}
                                >
                                    {t('typesAttorney')}
                                </Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: Colors.border01 }}>
                                <Text style={styles.textSub}>{t('onlineConsultation')}</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: Colors.border01 }}>
                                <Text style={styles.textSub}>{t('directConsultation')}</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: Colors.border01 }}>
                                <Text style={styles.textSub}>{t('contractDrafting')}</Text>
                            </View>
                            <Text style={styles.textSub}>{t('legalRepresentationInCourt')}</Text>
                        </View>

                        <View style={{ width: '50%' }}>
                            <View
                                style={[
                                    {
                                        backgroundColor: Colors.whiteAE,
                                        alignItems: 'center',
                                        borderBottomWidth: 1,
                                        borderTopRightRadius: 8,
                                        borderColor: Colors.border01,
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        DefaultStyles.textBold14Black,
                                        { padding: scaleModerate(10) },
                                    ]}
                                >
                                    {t('priceEstimated')}
                                </Text>
                            </View>
                            <View>
                                <View
                                    style={{ borderBottomWidth: 1, borderColor: Colors.border01 }}
                                >
                                    <Text style={styles.textSub}>
                                        {getPriceRange(itemLawyer?.priceData, 'onlineAdvise') ||
                                            'Trống'}
                                    </Text>
                                </View>
                                <View
                                    style={{ borderBottomWidth: 1, borderColor: Colors.border01 }}
                                >
                                    <Text style={styles.textSub}>
                                        {getPriceRange(itemLawyer?.priceData, 'officeAdvise') ||
                                            'Trống'}
                                    </Text>
                                </View>

                                <View
                                    style={{ borderBottomWidth: 1, borderColor: Colors.border01 }}
                                >
                                    <Text style={styles.textSub}>
                                        {getPriceRange(itemLawyer?.priceData, 'makeContract') ||
                                            'Trống'}
                                    </Text>
                                </View>

                                <Text style={styles.textSub}>
                                    {getPriceRange(itemLawyer?.priceData, 'courtPresent') ||
                                        'Trống'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: scaleModerate(20),
    },
    image: {
        width: scaleModerate(100),
        height: scaleModerate(100),
        borderRadius: scaleModerate(50),
    },
    text: {
        ...DefaultStyles.textRegular14Gray,
        fontSize: 24,
        color: Colors.black01,
        alignSelf: 'flex-start',
    },
    textSub: {
        ...DefaultStyles.textRegular14Black,
        marginStart: 10,
        paddingVertical: scaleModerate(10),
    },
})

export default ItemFeeLawyer
