import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import GenericModal from '../../components/Modal'
import Spacer from '../../components/Spacer'
import FastImage from 'react-native-fast-image'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { ic_block, ic_edit, ic_report, ic_trashbin } from '../../../assets'
import { useSelector } from 'react-redux'
import { scaleModerate } from '../../../styles/scaleDimensions'


interface PostSettingsModalProps {
    visible: boolean
    onClose: () => void
    post: any
    onDeletePost: () => void
    onBlockUserPost: (createdById: string) => void
    onOpenReportPostModal: () => void
}

const PostSettingsModal: React.FC<PostSettingsModalProps> = ({
    visible,
    onClose,
    post,
    onDeletePost,
    onBlockUserPost,
    onOpenReportPostModal,
}) => {
    const { data: authData } = useSelector((store: any) => store.auth)
    return (
        <GenericModal visible={visible} onClose={onClose}  height={0.2}>
            <View style={{ flex: 1, width: '100%', paddingHorizontal: scaleModerate(10) }}>
                <Spacer height={20} />
                {authData?.user?.id === post?.createdById ? (
                    <View>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={onDeletePost}
                        >
                            <FastImage style={styles.icon} source={ic_trashbin} />
                            <Spacer width={10} />
                            <View>
                                <Text style={{ ...DefaultStyles.textBold14Black }}>
                                deletePost
                                </Text>
                                <Text style={styles.subTitleTouchableSettingPost}>
                                postWillDelete
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <Spacer height={10} />

                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={onDeletePost}
                        >
                            <FastImage style={styles.icon} source={ic_edit} />
                            <Spacer width={10} />
                            <View>
                                <Text style={{ ...DefaultStyles.textBold14Black }}>
                              editPost
                                </Text>
                                <Text style={styles.subTitleTouchableSettingPost}>
                                  willEditPost
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={onOpenReportPostModal}
                        >
                            <FastImage style={styles.icon} source={ic_report} />
                            <Spacer width={10} />
                            <View>
                                <Text style={{ ...DefaultStyles.textBold14Black }}>
                                report
                                </Text>
                                <Text style={styles.subTitleTouchableSettingPost}>
                                  postWillReport
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <Spacer height={10} />
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => onBlockUserPost(post?.createdById)}
                        >
                            <FastImage style={styles.icon} source={ic_block} />
                            <Spacer width={10} />
                            <View>
                                <Text style={{ ...DefaultStyles.textBold14Black }}>
                                 blockUser
                                </Text>
                                <Text style={styles.subTitleTouchableSettingPost}>
                                 userPostWillHidden
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </GenericModal>
    )
}

export default PostSettingsModal

const styles = {
    touchableSettingPost: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: scaleModerate(24),
        height: scaleModerate(24),
    },
    titleTouchableSettingPost: {
        ...DefaultStyles.textBold16Black,
    },
    subTitleTouchableSettingPost: {
        ...DefaultStyles.textRegular12Gray,
    },
}
