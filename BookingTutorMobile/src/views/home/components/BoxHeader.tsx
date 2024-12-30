// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { scaleModerate } from '../../../styles/scaleDimensions'
// import { DefaultStyles } from '../../../styles/DefaultStyles'
// import { useTranslation } from 'react-i18next'

// interface IHeaderItem {
//     title: string
//     onPressViewAll: any
// }
// const BoxHeader = (props: IHeaderItem) => {
//     const { t } = useTranslation()
//     return (
//         <View style={{ flexDirection: 'row', marginBottom: scaleModerate(16) }}>
//             <Text style={{ ...DefaultStyles.textMedium16Black, flex: 1 }}>{props?.title}</Text>
//             <Text
//                 onPress={() => {
//                     props?.onPressViewAll && props?.onPressViewAll()
//                 }}
//                 style={DefaultStyles.textRegular13Gray}
//             >
//                 {t('viewAll')}
//             </Text>
//         </View>
//     )
// }

// export default BoxHeader

// const styles = StyleSheet.create({})
