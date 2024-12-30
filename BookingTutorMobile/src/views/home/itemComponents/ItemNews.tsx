// import React from 'react'
// import { scaleModerate } from '../../../styles/scaleDimensions'
// import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
// import { DefaultStyles } from '../../../styles/DefaultStyles'
// import { useTranslation } from 'react-i18next'
// import { Colors } from '../../../styles/Colors'
// import FastImage from 'react-native-fast-image'
// import { useNavigation } from '@react-navigation/native'

// const ItemNews = ({ itemNews }: any) => {
//     const { t, i18n } = useTranslation()
//     const videoId = itemNews.url.split('v=')[1]?.substring(0, 11)
//     const navigation = useNavigation()
//     const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
//     return (
//         <TouchableOpacity
//             style={styles.itemContainer}
//             onPress={() => navigation.navigate(...(['WatchVideoNewsView', { videoId }] as never))}
//         >
//             <View>
//                 <FastImage source={{ uri: thumbnailUrl }} style={styles.image} resizeMode="cover" />
//             </View>
//             <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
//                 {itemNews.name}
//             </Text>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     itemContainer: {
//         marginHorizontal: scaleModerate(10),
//         backgroundColor: '#fff',
//         margin: scaleModerate(10),
//         width: scaleModerate(144),
//     },
//     image: {
//         width: scaleModerate(144),
//         height: scaleModerate(105),
//         borderRadius: 8,
//     },
//     text: {
//         ...DefaultStyles.textRegular14White,
//         paddingVertical: 10,
//         color: Colors.gray44,
//     },
// })

// export default ItemNews
