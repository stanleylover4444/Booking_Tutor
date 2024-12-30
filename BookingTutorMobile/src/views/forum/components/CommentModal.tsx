import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import GenericModal from '../../components/Modal'
import FastImage from 'react-native-fast-image'
import Spacer from '../../components/Spacer'
import CommentItem from '../itemPost/itemComment'
import { ic_close, ic_heart, ic_liked,  ic_uploadConmment } from '../../../assets'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { scaleModerate } from '../../../styles/scaleDimensions'
import { Colors } from '../../../styles/Colors'
import { useDispatch, useSelector } from 'react-redux'
// import { createCommentAction } from '../../../store/actions/postAction'

interface CommentModalProps {
    visible: boolean
    onClose: () => void
    post: any
    selectedPost: any
    onViewLikes: (post: any) => void
}

const CommentModal: React.FC<CommentModalProps> = ({
    visible,
    onClose,
    post,
    selectedPost,
    onViewLikes,
}) => {
    const dispatch = useDispatch()
    const { dataComments: comments } = useSelector((store: any) => store?.post)
    const [commentText, setCommentText] = useState('')
    const { data: authData } = useSelector((store: any) => store.auth)

    const handleSendComment = () => {
        if (!commentText.trim()) {
            return
        }
        const newComment = {
            content: commentText.trim(),
            createdAt: new Date().toISOString(),
            authorId: authData?.user?.id,
            postId: post?.id,
        }
        console.log('newComment', newComment)
        // dispatch(createCommentAction(newComment))
        setCommentText('')
    }

    return (
        <GenericModal visible={visible} onClose={onClose} height={0.9}>
            <View style={{ flex: 1, width: '100%' }}>
                <Spacer height={10} />
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: scaleModerate(15),
                        alignItems: 'center',
                        marginTop: scaleModerate(10),
                    }}
                >
                    <TouchableOpacity onPress={onClose}>
                        <FastImage
                            style={{ height: scaleModerate(24), width: scaleModerate(24) }}
                            source={ic_close}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, marginEnd: scaleModerate(24), alignItems: 'center' }}>
                        <Text style={{ ...DefaultStyles.textBold16Black }}>Comment</Text>
                    </View>
                </View>

                <View
                    style={{
                        marginTop: scaleModerate(15),
                        borderBottomWidth: 1,
                        borderColor: Colors.border01,
                    }}
                />
                <Spacer height={10} />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: scaleModerate(15),
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FastImage
                            style={{ height: scaleModerate(24), width: scaleModerate(24) }}
                            source={
                                post?.like?.userIds?.includes(authData?.user?.id)
                                    ? ic_liked
                                    : ic_heart
                            }
                        />

                        <Spacer width={1} />
                        <Text style={DefaultStyles.textRegular14Black}>{post?.like?.count}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onViewLikes(selectedPost)}>
                        <Text>viewLikes</Text>
                    </TouchableOpacity>
                </View>
                <Spacer height={10} />
                <ScrollView
                    style={{ flex: 1, marginHorizontal: scaleModerate(15) }}
                    showsVerticalScrollIndicator={false}
                    >
                {comments?.length > 0 ? (
                    comments.map((comment: any) => (
                        <CommentItem key={comment.id} comment={comment} />
                    ))
                ) : (
                    <Text style={{ textAlign: 'center', color: 'gray' }}>noComment</Text>
                )}
                </ScrollView>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={65}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: scaleModerate(10),
                        paddingHorizontal: scaleModerate(10),
                        backgroundColor: '#F6F7FB',
                        marginBottom: scaleModerate(20),
                    }}
                >
                    <TouchableOpacity>
                        <FastImage
                            style={{
                                height: scaleModerate(24),
                                width: scaleModerate(24),
                                marginRight: scaleModerate(10),
                            }}
                            // source={ic_sticker}
                        />
                    </TouchableOpacity>

                    <TextInput
                        placeholder="comment"
                        placeholderTextColor="gray"
                        style={styles.textInputComment}
                        value={commentText}
                        onChangeText={setCommentText}
                    />
                    <Spacer width={10} />
                    <TouchableOpacity onPress={handleSendComment}>
                        <FastImage
                            style={{
                                height: scaleModerate(24),
                                width: scaleModerate(24),
                                marginRight: scaleModerate(10),
                            }}
                            source={ic_uploadConmment}
                        />
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </View>
        </GenericModal>
    )
}

export default CommentModal

const styles = {
    textInputComment: {
        flex: 1,
        height: scaleModerate(40),
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: scaleModerate(20),
        paddingHorizontal: scaleModerate(15),
    },
}
