// import { api } from './api'

// export const UploadPhoto = async (image: any, callback?: any) => {
//     try {
//         const headers = {
//             'Content-Type': 'multipart/form-data',
//         }

//         const formData = new FormData()
//         formData.append('file', {
//             uri: image?.path,
//             type: image?.mime,
//             name: image?.filename || 'image.jpg',
//             mediaType: "test",
//         })
//         const response = await api.post('/api/containers/imgs/upload', formData, { headers })
//         if (
//             response?.status === 200 &&
//             response?.data?.result?.files?.file &&
//             response?.data?.result?.files?.file?.length > 0
//         ) {

//             console.log("responseresponseresponse" , response)
//             const file = response?.data?.result?.files?.file[0]
//             const uploadedFile = {
//                 ...file,
//                 url: `${process.env.BASE_API_URL}/api/containers/imgs/download/${file?.name}`,
//             }
//             callback && callback(uploadedFile, null)
//             return uploadedFile
//         } else {
//             callback && callback(null, 'error')
//         }
//         return null
//     } catch (e) {
//         callback && callback(null, 'error')
//         console.log(e)
//     }
// }
