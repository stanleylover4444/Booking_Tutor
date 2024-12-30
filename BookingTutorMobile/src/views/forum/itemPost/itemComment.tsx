import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import Spacer from '../../components/Spacer'
import { ic_heart } from '../../../assets'
import { scaleModerate } from '../../../styles/scaleDimensions'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { Colors } from '../../../styles/Colors'

type CommentItemProps = {
    comment: any
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
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
    return (
        <View
            style={{
                flexDirection: 'row',
                marginVertical: scaleModerate(10),
                paddingHorizontal: scaleModerate(15),
            }}
        >
            <FastImage
                source={{ uri: comment?.author?.avatarUrl }}
                style={styles.avataUserComment}
            />

            <View style={{ flex: 1 }}>
                <View style={styles.itemComment}>
                    <Text style={{ ...DefaultStyles.textMedium16Black }}>
                        {comment?.author?.fullName || 'Anonymous'}
                    </Text>
                    <Text style={{ ...DefaultStyles.textRegular14Black }}>{comment.content}</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: scaleModerate(5),
                    }}
                >
                    <Spacer width={10} />

                    <Text style={{ ...DefaultStyles.textRegular14Gray }}>
                        {formatDate(comment.createdAt)}
                    </Text>
                    <Spacer width={20} />
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, color: 'gray' }}>like</Text>
                    </TouchableOpacity>
                    <Spacer width={10} />
                    <View style={{ flex: 1 }} />

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <FastImage
                            style={{ height: scaleModerate(16), width: scaleModerate(16) }}
                            source={ic_heart}
                        />
                        <Text style={{ marginLeft: scaleModerate(5), fontSize: 12, color: 'gray' }}>
                            {comment.likes}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CommentItem
const styles = StyleSheet.create({
    itemComment: {
        marginLeft: scaleModerate(10),
        backgroundColor: Colors.grayF5F,
        borderRadius: 8,
        width: '90%',
        paddingVertical: scaleModerate(5),
        paddingHorizontal: scaleModerate(10),
    },
    avataUserComment: {
        height: scaleModerate(26),
        width: scaleModerate(26),
        borderRadius: scaleModerate(15),
    },
})
