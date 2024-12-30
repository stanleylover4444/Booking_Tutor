import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'
import { ic_close } from '../../../assets'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import GenericModal from '../../components/Modal'
import Spacer from '../../components/Spacer'
import { Colors } from '../../../styles/Colors'
import { scaleModerate } from '../../../styles/scaleDimensions'
import ItemLike from '../itemPost/itemLike'
import { useDispatch, useSelector } from 'react-redux'

interface LikedListModalProps {
    visible: boolean
    post: any
    onClose: () => void
}
const LikedListModal: React.FC<LikedListModalProps> = ({ visible, onClose, post }) => {
    const { dataLikes: likes } = useSelector((store: any) => store?.post)
    const { data: userData } = useSelector((store: any) => store.user)
    const userIds = likes?.flatMap((like: any) => like.userIds) || []

    const users = userIds
        .map((id: string) => {
            const user = userData?.staff?.find((u: any) => u.id === id)
            return user
                ? {
                      id: user.id,
                      fullName: user.fullName,
                      avatarUrl: user.avatarUrl,
                  }
                : null
        })
        .filter(Boolean)

    return (
        <GenericModal visible={visible} onClose={onClose} height={0.9}>
            <View style={{ flex: 1, width: '100%' }}>
                <Spacer height={10} />
                <View style={{ flexDirection: 'row', marginHorizontal:    scaleModerate(15), alignItems: 'center' }}>
                    <TouchableOpacity onPress={onClose}>
                        <FastImage style={styles.closeIcon} source={ic_close} />
                    </TouchableOpacity>

                    <View style={{ flex: 1, marginEnd:    scaleModerate(24), alignItems: 'center' }}>
                        <Text style={{ ...DefaultStyles.textBold16Black }}>
                        listLikes
                        </Text>
                    </View>
                </View>
                <View style={styles.lineHeader}></View>

                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ItemLike user={item} />}
                />
            </View>
        </GenericModal>
    )
}

export default LikedListModal

const styles = {
    closeIcon: {
        width:    scaleModerate(24),
        height:    scaleModerate(24),
    },
    lineHeader: {
        marginTop: scaleModerate(15),
        borderBottomWidth: 1,
        borderColor: Colors.border01,
    },
}
