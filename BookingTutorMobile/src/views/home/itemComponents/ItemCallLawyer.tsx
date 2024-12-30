// import React from 'react'
// import { scaleModerate, WIDTH_SCREEN } from '../../../styles/scaleDimensions'
// import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
// import { useTranslation } from 'react-i18next'
// import { Colors } from '../../../styles/Colors'
// import Spacer from '../../components/Spacer'
// import FastImage from 'react-native-fast-image'
// import Button from '../../components/Button'
// import { DefaultStyles } from '../../../styles/DefaultStyles'
// import { useNavigation } from '@react-navigation/native'
// import { img_default_avatar } from '../../../assets'
// import { useSelector } from 'react-redux'
// import { USER_TYPE } from '../../../constants/Constants'

// const ItemCallLawyer = ({
//     itemLawyer,
//     containerStyle = {},
// }: {
//     itemLawyer: any
//     containerStyle?: ViewStyle
// }) => {
//     const { t } = useTranslation()
//     const navigation = useNavigation()
//     const { data: authData } = useSelector((store: any) => store.auth)

//     const { data: setting } = useSelector((store: any) => store.setting)

//     const dataSelect = setting?.setting?.expertise

//     const handlePressDetailLawyer = () => {
//         navigation.navigate(...(['DetailLawyerView', { itemLawyer }] as never))
//     }

//     const handlePressBookingLawyer = () => {
//         navigation.navigate(...(['BookingView', { itemLawyer }] as never))
//     }

//     const IMAGE_WIDTH_RATIO = 0.4
//     const IMAGE_ASPECT_RATIO = 215 / 130
//     const imageWidth = WIDTH_SCREEN * IMAGE_WIDTH_RATIO
//     const imageHeight = imageWidth * IMAGE_ASPECT_RATIO
//     return (
//         <TouchableOpacity
//             style={{
//                 alignItems: 'center',
//                 width: imageWidth,
//                 marginVertical: 10,
//                 marginHorizontal: 5,
//             }}
//             onPress={handlePressDetailLawyer}
//         >
//             <FastImage
//                 source={itemLawyer?.avatarUrl ? { uri: itemLawyer?.avatarUrl } : img_default_avatar}
//                 style={styles.image}
//             />

//             <Text
//                 style={[styles.text, { fontWeight: 'bold' }]}
//                 numberOfLines={1}
//                 ellipsizeMode="tail"
//             >
//                 {itemLawyer.fullName}
//             </Text>
//             <Text style={[styles.text, { textTransform: 'lowercase' }]}>
//                 {itemLawyer?.experienceYear ? itemLawyer?.experienceYear : 'x'} {t('year')}{' '}
//                 {t('experience')}
//             </Text>
//             <Text style={DefaultStyles.textRegular14Black}>{itemLawyer?.expertise}</Text>
//             <Spacer height={5} />
//             <Button
//                 type="small"
//                 isColor
//                 onPress={handlePressBookingLawyer}
//                 title={t('callNow')}
//                 containerStyle={{ alignSelf: 'center' }}
//                 disable={!authData || authData?.type === USER_TYPE.lawyer}
//             />
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     itemContainer: {},
//     image: {
//         width: scaleModerate(100),
//         height: scaleModerate(100),
//         borderRadius: scaleModerate(50),
//         alignSelf: 'center',
//     },
//     text: {
//         ...DefaultStyles.textRegular14Gray,
//         color: Colors.black01,
//     },
// })

// export default ItemCallLawyer
