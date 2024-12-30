import React from 'react'
import { scaleModerate } from '../../../styles/scaleDimensions'
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { useTranslation } from 'react-i18next'
import { Colors } from '../../../styles/Colors'
import FastImage from 'react-native-fast-image'

const ItemQuickAccess = ({ itemQuickAccess }: any) => {
    const { t, i18n } = useTranslation()
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => Linking.openURL(itemQuickAccess.url)}
            >
                <View>
                    <FastImage
                        resizeMode="contain"
                        source={{ uri: itemQuickAccess.imageUrl }}
                        style={styles.image}
                    />
                </View>

                <View style={{ paddingHorizontal: scaleModerate(10), alignItems: 'center' }}>
                    <Text style={styles.text}>{itemQuickAccess.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        borderRadius: scaleModerate(20),
        marginHorizontal: scaleModerate(10),
        margin: scaleModerate(5),
    },
    image: {
        width: scaleModerate(32),
        height: scaleModerate(32),
    },
    text: {
        ...DefaultStyles.textRegular12Gray,
        color: Colors.black01,
        fontStyle: 'italic',
    },
    buttonBook: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scaleModerate(4),
        paddingHorizontal: scaleModerate(10),
        borderRadius: scaleModerate(8),
        backgroundColor: Colors.gray44,
    },
})

export default ItemQuickAccess
