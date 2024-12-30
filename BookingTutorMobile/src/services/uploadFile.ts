// import { api } from './api'

// export const UploadFile = async (file: any, callback?: any) => {
//     try {
//         const headers = {
//             'Content-Type': 'multipart/form-data',
//         }

//         const formData = new FormData()
//         formData.append('file', {
//             uri: file?.uri,
//             type: file?.type,
//             name: file?.name || 'file', 
//             mediaType: "test", 
//         })

//         const response = await api.post('/api/containers/files/upload', formData, { headers })

//         if (
//             response?.status === 200 &&
//             response?.data?.result?.files?.file &&
//             response?.data?.result?.files?.file?.length > 0
//         ) {
//             console.log("File upload response:", response)

//             const uploadedFile = response?.data?.result?.files?.file[0]
//             const fileUrl = `${process.env.BASE_API_URL}/api/containers/files/download/${uploadedFile?.name}`

//             const fileData = {
//                 ...uploadedFile,
//                 url: fileUrl,
//             }

//             callback && callback(fileData, null) // Success callback
//             return fileData
//         } else {
//             callback && callback(null, 'File upload failed') // Failure callback
//         }
//         return null
//     } catch (e) {
//         callback && callback(null, 'error') // Failure callback
//         console.log('File upload error:', e)
//     }
// }
