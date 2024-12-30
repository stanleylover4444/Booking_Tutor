// import { StyleSheet } from 'react-native'
// import React from 'react'
// import WebView from 'react-native-webview'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { DefaultStyles } from '../../styles/DefaultStyles'
// import Header from '../components/Header'
// import { useRoute } from '@react-navigation/native'

// const WebDataView = () => {
//     const route = useRoute<any>()
//     const params = route?.params
//     return (
//         <SafeAreaView style={DefaultStyles.container}>
//             <Header title={params?.title} isBack />
//             <WebView
//                 startInLoadingState={true}
//                 source={
//                     Boolean(params?.file)
//                         ? params?.file
//                         : Boolean(params?.url)
//                         ? { html: params?.url }
//                         : Boolean(params?.uri)
//                         ? { uri: params?.uri }
//                         : { html: '' }
//                 }
//             />
//         </SafeAreaView>
//     )
// }

// export default WebDataView

// const styles = StyleSheet.create({})
