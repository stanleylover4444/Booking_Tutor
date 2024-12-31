import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DefaultStyles } from '../../styles/DefaultStyles'
import HeaderV2 from '../components/HeaderV2'
import { ic_bell, ic_image, ic_close } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../styles/Colors'
import { scaleModerate, WIDTH_SCREEN } from '../../styles/scaleDimensions'
// import { GiftedAvatar } from 'react-native-gifted-chat'
import FastImage from 'react-native-fast-image'
import PhotoOptionsPicker from '../components/PhotoOptionsPicker'
import GenericModal from '../components/Modal'
import ItemPost from './itemPost/ItemPost'
import GlobalModalController from '../components/GlobalModal/GlobalModalController'
import PostSettingsModal from './components/PostSettingsModal'
import LikedListModal from './components/LikedListModal'
import CommentModal from './components/CommentModal'
// import {
//     createPostAction,
//     deletePostAction,
//     getCommentAction,
//     getLikeAction,
//     getPostAction,
// } from '../../store/actions/postAction'
// import { UploadPhoto } from '../../services/uploadServices'
import EmptyView from '../components/EmptyView'
import ReportPostModal from './components/ReportPostModal'
import { FullWindowOverlay } from 'react-native-screens'


const ForumView = () => {

    const navigation = useNavigation()

    const dispatch = useDispatch()

    // const { data: authData } = useSelector((store: any) => store?.auth)

    // const { data: postData } = useSelector((store: any) => store?.post)

    const [showPickImageOption, setPickImageOption] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const [postContent, setPostContent] = useState<string | null>('')

    const [selectedImage, setSelectedImage] = useState<any | null>(null)

    const [selectedPost, setSelectedPost] = useState<any>(null)

    const [settingPostVisible, setSettingPostVisible] = useState(false)

    const [listLikedPostVisible, setListLikedPostVisible] = useState(false)

    const [reportPostVisible, setReportPostVisible] = useState(false)

    const [commentPostVisible, setCommentPostVisible] = useState(false)

    const [uploadPostVisible, setUploadPostVisible] = useState(false)

    const [currentPage, setCurrentPage] = useState(0)

    // const blockIds = authData?.user?.listBlock || []

    // const user = authData?.user

    const handleOpenNotification = () => {
        navigation.navigate('NotificationForumView' as never)
    }

    const handleCloseListLikedPost = () => {
        setListLikedPostVisible(false)
        setCommentPostVisible(true)
    }

    const handleOpenListLikedPost = (post: any) => {
        setSelectedPost(post)
        setListLikedPostVisible(true)
        setCommentPostVisible(false)
        // dispatch(
        //     getLikeAction(
        //         {
        //             where: {
        //                 postId: post?.id,
        //             },
        //         },
        //         (data: any, error: any) => {
        //             if (error) {
        //                 console.error('Error fetching like:', error)
        //             } else {
        //                 console.log('Fetched like:', data)
        //             }
        //         }
        //     )
        // )
    }

    const handleOpenCommentPost = (post: any) => {
        setSelectedPost(post)
        setCommentPostVisible(true)
        console.log(' post?.id', post?.id)
        // dispatch(
            // getCommentAction(
            //     {
            //         where: {
            //             postId: post?.id,
            //         },
            //     },
            //     (data: any, error: any) => {
            //         if (error) {
            //             console.error('Error fetching comments:', error)
            //         } else {
            //             console.log('Fetched comments:', data)
            //         }
            //     }
            // )
        // )
    }

    const handleCloseReportPostVisible = () => {
        setReportPostVisible(false)
    }

    const handleOpenReportPostVisible = () => {
        setReportPostVisible(true)
    }

    const handleOpenSettingPost = (post: any) => {
        setSelectedPost(post)
        setSettingPostVisible(true)
    }

    const handleCloseSettingPost = () => {
        setSelectedPost(null)
        setSettingPostVisible(false)
    }

    const handleCloseCommentPost = () => {
        setSelectedPost(null)
        setCommentPostVisible(false)
    }

    const handleOpenUploadPost = () => {
        setUploadPostVisible(true)
    }

    useEffect(() => {
        refreshData()
    }, [])

    const refreshData = () => {
        // dispatch(
        //     getPostAction(
        //         {
        //             case: 'refresh',
        //             page: 0,
        //             pageSize: 20,
        //             where: {
        //                 createdById: { nin: blockIds },
        //             },
        //         },
        //         (data: any, error: any) => {
        //             setCurrentPage(1)
        //         }
        //     )
        // )
    }

    // const loadMoreData = () => {
    //     if (!isLoading && postData.length > 9) {
    //         setIsLoading(true)
    //         // dispatch(
    //         //     getPostAction(
    //         //         {
    //         //             case: 'loadMore',
    //         //             page: currentPage + 1,
    //         //             pageSize: 10,
    //         //             where: {
    //         //                 createdById: { nin: blockIds },
    //         //             },
    //         //         },
    //         //         (data: any, error: any) => {
    //         //             if (data) {
    //         //                 setCurrentPage((prevPage) => prevPage + 1)
    //         //             }
    //         //             setIsLoading(false)
    //         //         }
    //         //     )
    //         // )
    //     }
    // }

    const handleDeletePost = () => {
        GlobalModalController.showModal({
            type: 'yesNo',
            title: 'Bạn muốn xóa bài viết ?',
            icon: 'warning',
        })
        GlobalModalController.onActionChange((isOk: boolean) => {
            if (isOk) {
                // dispatch(
                //     deletePostAction(selectedPost, (data, error) => {
                //         if (error) {
                //             console.error('Xóa thất bại:', error)
                //         } else {
                //             refreshData()
                //             setSettingPostVisible(false)
                //         }
                //     })
                // )
            }
        })
    }

    const handleReportPost = () => {}

    const handleBlockUserPost = (createdById: string) => {
        if (!selectedPost) return

        const updateData: any = {
            listBlock: [createdById],
        }

        // dispatch(updateUserAction({ id: user?.id, updateData: updateData }))
    }

    const handleCloseUploadPost = () => {
        if (selectedImage || postContent) {
            GlobalModalController.showModal({
                type: 'yesNo',
                title: 'Bạn muốn giữ bài viết ?',
                description: 'Bài viết này sẽ bị hủy bỏ nếu không giữ',
                icon: 'warning',
            })
            GlobalModalController.onActionChange((isOk: boolean) => {
                if (isOk) {
                    setUploadPostVisible(false)
                } else {
                    setPostContent('')
                    setSelectedImage('')
                    setUploadPostVisible(false)
                }
            })
        } else {
            setUploadPostVisible(false)
        }
    }

    const handleChoseImage = (image: { path: string; height: number; width: number }) => {
        setSelectedImage(image)
        setPickImageOption(false)
        setUploadPostVisible(true)
    }

    const handleUploadPost = async () => {
        setIsLoading(true)
        let uploadedImage = null
        try {
            if (selectedImage) {
                // uploadedImage = await UploadPhoto(selectedImage)
            }
            console.log('selectedImage', selectedImage)
            const newsData = {
                title: 'Post',
                category: 'newPost',
                content: postContent,
                // createdById: authData?.user?.id,
                infoImage: selectedImage,
                // urlImage: uploadedImage?.url || null,
            }
            // dispatch(
            //     createPostAction(newsData, (data: any, error: any) => {
            //         if (error) {
            //             console.error('Tạo bản tin thất bại:', error)
            //         } else {
            //             setPostContent('')
            //             setSelectedImage('')
            //             refreshData()
            //         }
            //         setIsLoading(false)
            //     })
            // )
            setUploadPostVisible(false)
        } catch (error) {
            setIsLoading(false)
        }
    }

    const renderImage = () => {
        if (!selectedImage) return <></>
        const calculatedHeight = (selectedImage.height * WIDTH_SCREEN) / selectedImage.width!
        const roundedValue = Math.floor(calculatedHeight)

        return (
            <View>
                <FastImage
                    source={{ uri: selectedImage.path }}
                    style={{
                        width: '100%',
                        height: roundedValue,
                        borderRadius: 12,
                    }}
                    resizeMode="contain"
                />

                <TouchableOpacity
                    style={styles.deleteImageUploadPost}
                    onPress={() => setSelectedImage('')}
                >
                    <FastImage style={styles.closeIcon} source={ic_close} />
                </TouchableOpacity>
            </View>
        )
    }

    const renderHeaderUpload: any = () => {
        // return authData?.type === 'lawyer' ? (
            <View style={styles.containerCreatePost}>
                {/* <GiftedAvatar
                    user={
                        {
                            // avatar: authData?.user?.avatarUrl,
                        } as any
                    }
                    avatarStyle={styles.avataUser}
                /> */}

                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginStart: scaleModerate(20),
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={handleOpenUploadPost}
                >
                    <TouchableOpacity style={{ flex: 1 }} onPress={handleOpenUploadPost}>
                        <Text style={{ ...DefaultStyles.textRegular16Black }}>
                          'whatThinking'
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setPickImageOption(true)
                        }}
                        style={{ alignSelf: 'flex-end' }}
                    >
                        <FastImage
                            style={{ height: 24, width: 24, marginBottom: scaleModerate(12) }}
                            source={ic_image}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        // ) : (
        //     ''
        // )
    }

    return (
        <SafeAreaView
            style={[DefaultStyles.container, { backgroundColor: Colors.border01 }]}
            edges={['top']}
        >
            <HeaderV2
                title="Diễn đàn"
                rightIcon={ic_bell}
                onRightButtonPress={handleOpenNotification}
                type="full"
            />
            {/* {authData ? ( */}
                <FlatList
                    // data={postData}
                    data={""}
                    ListHeaderComponent={renderHeaderUpload()}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => (
                        <ItemPost
                            post={item}
                            onOpenSettingPost={() => handleOpenSettingPost(item)}
                            onOpenCommentPost={handleOpenCommentPost}
                        />
                    )}
                    showsVerticalScrollIndicator={true}
                    refreshing={false}
                    onRefresh={refreshData}
                    // onEndReached={loadMoreData}
                    onEndReachedThreshold={0.5}
                />
            {/* ) : (
                <EmptyView />
            )} */}

            {/* <PhotoOptionsPicker
                isVisible={showPickImageOption}
                onSelectPhoto={(image) => handleChoseImage(image)}
                onClose={() => {
                    setPickImageOption(false)
                }}
            />

            <PostSettingsModal
                visible={settingPostVisible}
                onClose={handleCloseSettingPost}
                post={selectedPost}
                onDeletePost={handleDeletePost}
                onBlockUserPost={handleBlockUserPost}
                onOpenReportPostModal={handleOpenReportPostVisible}
            />

            <CommentModal
                visible={commentPostVisible}
                post={selectedPost}
                onClose={handleCloseCommentPost}
                selectedPost={selectedPost}
                onViewLikes={handleOpenListLikedPost}
            />

            <LikedListModal
                visible={listLikedPostVisible}
                onClose={handleCloseListLikedPost}
                post={selectedPost}
            /> */}

            <GenericModal visible={uploadPostVisible} onClose={handleCloseUploadPost} height={0.9}>
                <View style={{ flex: 1 }}>
                    <View style={styles.headerUpload}>
                        <TouchableOpacity onPress={handleCloseUploadPost}>
                            <FastImage style={{ height: 24, width: 24 }} source={ic_close} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                ...DefaultStyles.textBold16Black,
                                marginStart: scaleModerate(47),
                            }}
                        >
                            {'createPost'}
                        </Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.primary500,
                                borderRadius: scaleModerate(5),
                                marginRight: scaleModerate(5),
                                paddingHorizontal: scaleModerate(6),
                            }}
                            onPress={handleUploadPost}
                        >
                            <Text
                                style={{
                                    ...DefaultStyles.textRegular14White,
                                    padding: 5,
                                    alignSelf: 'center',
                                }}
                            >
                                {'post'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lineHeader}></View>

                    <ScrollView style={{ flex: 1, width: '100%', paddingHorizontal: 15 }}>
                        <TextInput
                            style={{
                                ...DefaultStyles.textRegular16Black,
                                paddingVertical: 10,
                                textAlignVertical: 'top',
                            }}
                            placeholder={'whatThinking'}
                            placeholderTextColor={Colors.black01}
                            multiline={true}
                            value={postContent || ''}
                            onChangeText={(text) => setPostContent(text)}
                        />

                        {renderImage()}
                    </ScrollView>
                </View>
                {/* <TouchableOpacity
                    onPress={() => {
                        setPickImageOption(true)
                    }}
                    style={styles.buttonSelectedImage}
                >
                    <Text style={styles.textButtonChoseImage}>{t('Chọn ảnh')}</Text>
                </TouchableOpacity> */}
            </GenericModal>

            <ReportPostModal visible={reportPostVisible} onClose={handleCloseReportPostVisible} />
        </SafeAreaView>
    )
}

export default ForumView

const styles = StyleSheet.create({
    buttonSelectedImage: {
        borderWidth: 1,
        borderColor: Colors.black01,
        borderRadius: 8,
        marginHorizontal: scaleModerate(20),
        marginBottom: scaleModerate(30),
    },
    deleteImageUploadPost: {
        position: 'absolute',
        top: '5%',
        right: scaleModerate(5),
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 15,
    },

    headerUpload: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: scaleModerate(18),
        marginHorizontal: scaleModerate(10),
        alignItems: 'center',
    },

    avataUserPost: {
        height: 36,
        width: 36,
        borderWidth: 1,
        borderRadius: 20,
    },
    avataUser: {
        height: scaleModerate(48),
        width: scaleModerate(48),
        borderRadius: scaleModerate(35),
        borderWidth: 1,
    },
    containerCreatePost: {
        paddingVertical: scaleModerate(15),
        flexDirection: 'row',
        backgroundColor: Colors.whiteFF,
        paddingHorizontal: scaleModerate(10),
    },
    textButtonChoseImage: {
        ...DefaultStyles.textBold16Black,
        paddingVertical: scaleModerate(10),
        color: Colors.black01,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    lineHeader: {
        marginTop: scaleModerate(15),
        borderBottomWidth: 1,
        borderColor: Colors.border01,
    },

    closeIcon: {
        height: 24,
        width: 24,
    },
})
