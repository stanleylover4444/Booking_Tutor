import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { Colors } from '../../../styles/Colors'
import Spacer from '../../components/Spacer'

import { ic_heart, ic_comment, ic_more, ic_liked } from '../../../assets'
import { scaleModerate, WIDTH_SCREEN } from '../../../styles/scaleDimensions'
import { useDispatch, useSelector } from 'react-redux'


const ItemPost = ({ post, onOpenSettingPost, onOpenCommentPost }: any) => {
    const dispatch = useDispatch()
    const { data: authData } = useSelector((store: any) => store.auth)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (post?.createdBy?.avatarUrl && post?.createdBy?.fullName) {
            setIsLoading(false)
        }
    }, [post?.createdBy])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`
        return `${date.toLocaleDateString('vi-VN', options)}  ${formattedTime}`
    }

    const getCreatorName = (createdBy: any) => {
        if (createdBy?.fullName) {
            return createdBy.fullName
        }
        if (createdBy?.name) {
            return createdBy.name
        }
        return 'Unknown'
    }

    const renderImagePost = (urlImage: string, infoImage?: { width: number; height: number }) => {
        if (!urlImage || !infoImage?.width || !infoImage?.height) {
            console.warn('Invalid or missing image data:', { urlImage, infoImage })
            return null
        }

        const calculatedHeight = (infoImage.height * WIDTH_SCREEN) / infoImage.width
        const roundedValue = Math.floor(calculatedHeight)

        return (
            <FastImage
                source={{ uri: urlImage }}
                style={{
                    width: '100%',
                    height: roundedValue,
                    borderRadius: 12,
                }}
                resizeMode="contain"
            />
        )
    }

    const handelLikePost = (post: any) => {
        const isLiked = post?.like?.userIds?.includes(authData?.user?.id)

        if (isLiked) {
            post.like.count -= 1
            post.like.userIds = post.like.userIds.filter((id: string) => id !== authData?.user?.id)
        } else {
            post.like.count += 1
            post.like.userIds.push(authData?.user?.id)
        }
        const likeData = {
            id: post?.likeId,
            count: post.like.count,
            userId: authData?.user?.id,
            userIds: post.like.userIds,
        }
        // if (isLiked) {
        //     dispatch(deleteLikeAction(likeData, (data: any, error: any) => {}))
        // } else {
        //     dispatch(updateLikeAction(likeData, (data: any, error: any) => {}))
        // }
    }

    return (
        <View
            style={{
                padding: scaleModerate(15),
                marginTop: scaleModerate(10),
                backgroundColor: Colors.whiteFF,
            }}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color={Colors.black01} />
            ) : (
                <>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <FastImage
                            source={{ uri: post?.createdBy?.avatarUrl }}
                            style={styles.avataUserPost}
                        />
                        <View style={{ marginLeft: scaleModerate(10), flex: 1 }}>
                            <Text style={{ ...DefaultStyles.textMedium16Black }}>
                                {getCreatorName(post?.createdBy)}
                            </Text>
                            <Text style={{ ...DefaultStyles.textRegular14Gray }}>
                                {formatDate(post?.createdAt)}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => onOpenSettingPost(post)}>
                            <FastImage style={{ height: 24, width: 24 }} source={ic_more} />
                        </TouchableOpacity>
                    </View>

                    <Text
                        style={{
                            marginTop: scaleModerate(10),
                            ...DefaultStyles.textRegular16Black,
                        }}
                    >
                        {post?.content}
                    </Text>

                    {post?.urlImage && renderImagePost(post.urlImage, post.infoImage)}

                    <Spacer height={15} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => handelLikePost(post)}>
                            <FastImage
                                style={styles.iconPost}
                                source={
                                    post?.like?.userIds?.includes(authData?.user?.id)
                                        ? ic_liked
                                        : ic_heart
                                }
                            />
                        </TouchableOpacity>
                        <Spacer width={5} />
                        <Text
                            style={{
                                ...DefaultStyles.textRegular16Black,
                            }}
                        >
                            {post?.like?.count}
                        </Text>

                        <Spacer width={10} />
                        <TouchableOpacity onPress={() => onOpenCommentPost(post)}>
                            <FastImage style={styles.iconPost} source={ic_comment} />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    )
}

export default ItemPost

const styles = {
    avataUserPost: {
        height: scaleModerate(36),
        width: scaleModerate(36),
        borderRadius: scaleModerate(20),
    },
    iconPost: {
        height: scaleModerate(24),
        width: scaleModerate(24),
    },
}
