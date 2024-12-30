import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Modal,
    TouchableOpacity,
    SectionList,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DefaultStyles } from '../../styles/DefaultStyles'
// import { useTranslation } from 'react-i18next'
import { createSectionListByDate } from '../../utils/dataUtils'
import { scaleModerate } from '../../styles/scaleDimensions'
import { Colors } from '../../styles/Colors'
import HeaderV2 from '../components/HeaderV2'
import { ic_alert_circle_blue, ic_check_circle_purple } from '../../assets'
import Spacer from '../components/Spacer'
// import {
//     getNotificationAction,
//     updateNotificationAction,
// } from '../../store/actions/notificationAction'
import EmptyView from '../components/EmptyView'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux'

const NotificationForumView = () => {
    // const { t } = useTranslation()
    const dispatch = useDispatch()
    const { data: notifications } = useSelector((store: any) => store.notification)
    const [pageState, setPageState] = useState(1)

    const getNotifications = (page: number) => {
        setPageState(page)
        // dispatch(getNotificationAction({ page }))
    }

    const renderSectionHeader = ({ section: { date } }: any) => (
        <Text style={[DefaultStyles.textMedium16Black, { marginTop: scaleModerate(17) }]}>
            {date}
        </Text>
    )

    const renderEmpty = () => {
        return <EmptyView top={30} />
    }

    const getIcon = (type: string) => {
        switch (type) {
            case '1':
                return ic_alert_circle_blue
            case '2':
                return ic_check_circle_purple
            default:
                return ic_alert_circle_blue
        }
    }

    const handlePressItem = (item: any) => {
        // dispatch(updateNotificationAction({ id: item?.id, updateData: { isRead: true } }))
    }
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => handlePressItem(item)} style={styles.wrap}>
                <FastImage source={getIcon(item.type)} style={styles.icon} />
                <Spacer width={12} />
                <View style={styles.textWrap}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text
                            numberOfLines={1}
                            style={[DefaultStyles.textMedium13Black, { fontSize: 14 }]}
                        >
                            {item.title}
                        </Text>
                        <Text
                            numberOfLines={1}
                            style={[DefaultStyles.textRegular13Black, { fontSize: 11 }]}
                        >
                            {item.time}
                        </Text>
                    </View>
                    <Text style={DefaultStyles.textRegular13Gray}>
                        {item.content || item.message}
                    </Text>
                </View>
                <Spacer width={12} />
                <View
                    style={[
                        styles.status,
                        {
                            backgroundColor: item?.isRead ? Colors.grayDE : Colors.purple8D,
                        },
                    ]}
                ></View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={DefaultStyles.container}>
            <HeaderV2 title={'notification'} isBack={true} type="simple" />
            <View style={[DefaultStyles.wrapBody, { paddingTop: 0 }]}>
                <SectionList
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    onRefresh={() => getNotifications(1)}
                    sections={createSectionListByDate(notifications, 'createdAt')}
                    renderSectionHeader={renderSectionHeader}
                    renderItem={renderItem}
                    ListEmptyComponent={renderEmpty}
                    keyExtractor={(item, index) => `${index}_${item.id}`}
                    stickySectionHeadersEnabled={false}
                    onEndReached={() => {
                        getNotifications(pageState + 1)
                    }}
                    onEndReachedThreshold={0.1}
                    style={{ height: '100%' }}
                    ListFooterComponent={<Spacer height={60} />}
                />
            </View>
        </SafeAreaView>
    )
}

export default NotificationForumView

const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        marginTop: scaleModerate(17),
        alignItems: 'center',
    },
    textWrap: {
        flex: 1,
        justifyContent: 'space-between',
    },
    status: {
        height: scaleModerate(8),
        width: scaleModerate(8),
        borderRadius: scaleModerate(4),
        borderWidth: 1,
    },
    icon: {
        height: scaleModerate(40),
        width: scaleModerate(40),
        alignSelf: 'flex-start',
    },
})
