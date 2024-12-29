// import { CameraRoll } from '@react-native-camera-roll/camera-roll'
// import RNFetchBlob from 'rn-fetch-blob'

// export const downloadImageUrl = async (url: string, callback?: (res: any, err: any) => void) => {
//     RNFetchBlob.config({
//         fileCache: true,
//         appendExt: 'png',
//     })
//         .fetch('GET', url)
//         .then((res) => {
//             CameraRoll.saveAsset(res?.data, { type: 'photo' })
//                 .then((res) => {
//                     console.log(res)
//                     callback && callback(res, null)
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                     callback && callback(null, err)
//                 })
//         })
//         .catch((error) => {
//             console.log(error)
//             callback && callback(null, error)
//         })
// }
