import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import { Colors } from '../../../styles/Colors'
import { scaleModerate } from '../../../styles/scaleDimensions'

interface ItemLikeProps {
    user: {
        id: string
        fullName: string
        avatarUrl: string
    }
}

const ItemLike: React.FC<ItemLikeProps> = ({ user }) => {
    return (
        <View
            style={{
                padding: scaleModerate(15),
                marginVertical: scaleModerate(8),
                backgroundColor: Colors.whiteFF,
                borderBottomWidth: 1,
                borderColor: Colors.border01,
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <FastImage source={{ uri: user.avatarUrl }} style={styles.avataUserPost} />
                <Text
                    style={{ marginLeft: scaleModerate(10), ...DefaultStyles.textRegular16Black }}
                >
                    {user.fullName}
                </Text>
            </View>
        </View>
    )
}

export default ItemLike

const styles = {
    avataUserPost: {
        height:    scaleModerate(36),
        width:    scaleModerate(36),
        borderRadius:    scaleModerate(20)
    },
    iconPost: {
        height: 24,
        width: 24,
    },
}
