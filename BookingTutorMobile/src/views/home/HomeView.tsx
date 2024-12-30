import {
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    TextInput,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ic_wraprer,
    ic_docs,
    ic_group,
    ic_seemore,
    ic_phone,
    ic_balence,
    ic_calendar,
    ic_calendar_white,
    ic_bell_outline,
} from '../../assets'
import Spacer from '../components/Spacer'
import { DefaultStyles } from '../../styles/DefaultStyles'
import { scaleModerate } from '../../styles/scaleDimensions'
import { Colors } from '../../styles/Colors'
import { useNavigation } from '@react-navigation/native'
// import ItemNews from './itemComponents/ItemNews'
import ItemQuickAccess from './itemComponents/ItemQuickAccess'
import FastImage from 'react-native-fast-image'
import Button from '../components/Button'
import ItemLawyer from './itemComponents/ItemLawyer'
// import { GiftedAvatar } from 'react-native-gifted-chat'
// import LanguageView from '../components/LanguageView'
import GlobalModalController from '../components/GlobalModal/GlobalModalController'
import CustomStatusBar from '../components/CustomStatusBar'
import { QUICK_ASSETS_MODELS } from '../../data/QuickAssetsModels'
// import { getStaffAction } from '../../store/actions/userAction'
// import { createQuestionsAction, getQuestionsAction } from '../../store/actions/questionAction'

const HomeView = () => {
    const dispatch = useDispatch()
    // const { data: authData } = useSelector((store: any) => store.auth)
    // const { data: userData } = useSelector((store: any) => store.user)
    // const { data: news } = useSelector((state: any) => state.news)

    const navigation = useNavigation()
    const [question, setQuestion] = useState('')
    const notificationCount = 0

    useEffect(() => {
        refreshData()
    }, [])

    const refreshData = () => {
        // dispatch(getStaffAction({ where: { role: 'lawyer' } }))
    }

    const handleSendQuestions = () => {
        const newsData = {
            // customerId: authData?.user?.id,
            content: question,
        }
        console.log('newsData', newsData)
        // dispatch(
        //     createQuestionsAction(newsData, (data: any, error: any) => {
        //         if (error) {
        //             console.error('Tạo bản tin thất bại:', error)
        //         } else {
        //             setQuestion('')
        //             GlobalModalController.showModal({
        //                 title: t('Gửi câu hỏi  thành công'),
        //                 description: t('Xem câu hỏi trong danh sách câu hỏi'),
        //                 icon: 'success',
        //             })

        //             navigation.navigate('AnswerQuestionView' as never)
        //         }
        //     })
        // )
    }

    const handlePressFindLawyer = () => {
        // if (authData) {
            navigation.navigate('ListOfLawyersView' as never)
        // } else {
        //     showLoginModal()
        // }
    }

    const handlePressAppointmentList = () => {
        // if (authData) {
            navigation.navigate('AppointmentListView' as never)
        // } else {
        //     showLoginModal()
        // }
    }

    const handleNotification = () => {
        // if (authData) {
            // navigation.navigate('NotificationView' as never)
        // } else {
            // showLoginModal()
        // }
    }

    const showLoginModal = () => {
        GlobalModalController.showModal({
            type: 'yesNo',
            title: 'signUpMessage',
            icon: 'fail',
        })
        GlobalModalController.onActionChange((isOk: boolean) => {
            if (isOk) {
                navigation.navigate('LoginView' as never)
            }
        })
    }

    return (
        <View style={{ ...DefaultStyles.container }}>
            <CustomStatusBar />
            <View style={{ height: scaleModerate(300), backgroundColor: Colors.primary }}></View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={false} onRefresh={refreshData} />}
                style={{ marginTop: -scaleModerate(300) }}
            >
                <View style={{ backgroundColor: Colors.primary }}>
                    <Spacer height={10} />
                    <View
                        style={{
                            ...styles.headerContainer,
                            paddingHorizontal: scaleModerate(25),
                        }}
                    >
                        <Text style={styles.headerText}>appName</Text>
                        <View style={{ flexDirection: 'row' }}>
                        

                            {/* {authData && (
                                <> */}
                                    <Spacer width={5} />
                                    <TouchableOpacity
                                        onPress={handleNotification}
                                        style={styles.buttonNotification}
                                    >
                                        <FastImage
                                            style={{ height: scaleModerate(16), aspectRatio: 1 }}
                                            source={ic_bell_outline}
                                        />
                                        {notificationCount > 0 && (
                                            <View style={styles.containerNumberNotification}>
                                                <Text style={{ color: 'white', fontSize: 10 }}>
                                                    {notificationCount}
                                                </Text>
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                {/* </>
                            )} */}
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        {/* {authData ? ( */}
                            <View style={styles.containerUser}>
                                <View style={styles.userBox}>
                                    {/* <GiftedAvatar
                                        user={
                                            {
                                                name:
                                                    authData?.type === 'lawyer'
                                                        ? authData?.user?.fullName
                                                        : authData?.user?.name,
                                                avatar: authData?.user?.avatarUrl,
                                            } as any
                                        }
                                        avatarStyle={{
                                            height: scaleModerate(35),
                                            width: scaleModerate(35),
                                            borderRadius: scaleModerate(35),
                                        }}
                                    /> */}
                                </View>

                                <View>
                                    <Text
                                        style={[
                                            DefaultStyles.textRegular12Gray,
                                            { color: Colors.gray44 },
                                        ]}
                                    >
                                        'hello'
                                    </Text>
                                    <Text
                                        style={[
                                            DefaultStyles.textBold14Black,
                                            { color: Colors.primary },
                                        ]}
                                    >
                                        {/* {authData.type === 'lawyer'
                                            ? authData?.user?.fullName
                                            : authData?.user?.name} */}
                                    </Text>
                                </View>
                            </View>
                        {/* ) : (
                            <View>
                                <Spacer height={5} />
                                <Text style={[DefaultStyles.textMedium14White]}>
                                    {' '}
                                    'wellcom'
                                </Text>
                                <Spacer height={5} />
                                <Button
                                    type="small"
                                    isColor={false}
                                    title='signInHome'
                                    containerStyle={{ alignSelf: 'center' }}
                                    onPress={() => {
                                        navigation.navigate('LoginView' as never)
                                    }}
                                />
                            </View>
                        )} */}
                    </View>
                    <Spacer height={10} />
                </View>
                <View style={styles.bodyContainer}>
                    {/* {authData?.type === 'lawyer' ? (
                        <></>
                    ) : ( */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='askMe'
                                placeholderTextColor={Colors.gray72}
                                value={question} // Gán giá trị câu hỏi từ state
                                onChangeText={(text) => setQuestion(text)}
                            />
                            <TouchableOpacity
                                // onPress={() => {
                                //     GlobalModalController.showModal({
                                //         title: t('noData'),
                                //         icon: 'warning',
                                //     })
                                // }}

                                onPress={handleSendQuestions}
                            >
                                <Image source={ic_wraprer} />
                            </TouchableOpacity>
                        </View>
                    {/* )} */}

                    <Spacer height={15} />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: scaleModerate(10),
                        }}
                    >
                        <View>
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => {
                                    // if (!authData) {
                                    //     showLoginModal()
                                    //     return
                                    // }
                                    navigation.navigate('CallLawyersView' as never)
                                }}
                            >
                                <FastImage style={styles.icon} source={ic_phone} />
                                <Text style={styles.textSubIcon}>'callLawyer'</Text>
                            </TouchableOpacity>
                            <Spacer height={10} />
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => {
                                    // if (!authData) {
                                    //     showLoginModal()
                                    //     return
                                    // }
                                    navigation.navigate('LawyerFeesView' as never)
                                }}
                            >
                                <FastImage style={styles.icon} source={ic_balence} />
                                <Text style={styles.textSubIcon}>'lookupAttorneyFee'</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                onPress={handlePressFindLawyer}
                                style={styles.itemContainer}
                            >
                                <FastImage style={styles.icon} source={ic_group} />
                                <Text style={styles.textSubIcon}>'findLawyer'</Text>
                            </TouchableOpacity>
                            <Spacer height={10} />

                            {/* {authData?.type === 'lawyer' ? (
                                <> */}
                                    <TouchableOpacity
                                        onPress={handlePressAppointmentList}
                                        style={styles.itemContainer}
                                    >
                                        <FastImage style={styles.icon} source={ic_calendar} />
                                        <Text style={styles.textSubIcon}>
                                            'customerAppointment'
                                        </Text>
                                    </TouchableOpacity>
                                {/* </> */}
                            {/* ) : (
                                <>
                                    <TouchableOpacity
                                        onPress={handlePressAppointmentList}
                                        style={styles.itemContainer}
                                    >
                                        <FastImage style={styles.icon} source={ic_calendar} />
                                        <Text style={styles.textSubIcon}>
                                            'scheduleConsultation
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            )} */}
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => {
                                    // if (!authData) {
                                    //     showLoginModal()
                                    //     return
                                    // }
                                    navigation.navigate('CourtFeesView' as never)
                                }}
                            >
                                <FastImage style={styles.icon} source={ic_docs} />
                                <Text style={styles.textSubIcon}>'feeLookup'</Text>
                            </TouchableOpacity>
                            <Spacer height={10} />
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => {
                                    navigation.navigate('FeatureListView' as never)
                                }}
                            >
                                <FastImage style={styles.icon} source={ic_seemore} />
                                <Text style={styles.textSubIcon}>'viewAll'</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Spacer height={10} />
                    <Text style={{ ...DefaultStyles.textBold18Black }}>'newsletter'</Text>
                    <Spacer height={5} />
                    {/* <FlatList
                        data={news}
                        renderItem={({ item }) => <ItemNews itemNews={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                    /> */}
                    <Spacer height={20} />
                    <Text style={{ ...DefaultStyles.textBold18Black }}>
                        'lawyerSuggestion'
                    </Text>
                    {/* <FlatList
                        data={userData?.staff?.slice(0, 10) || []}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <ItemLawyer itemLawyer={item} />}
                    /> */}
                    <Spacer height={20} />

                    <Spacer height={20} />
                    <Text style={{ ...DefaultStyles.textBold18Black }}>'quickAccess'</Text>
                    <Spacer height={10} />
                    {/* <FlatList
                        data={QUICK_ASSETS_MODELS}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <ItemQuickAccess itemQuickAccess={item} />}
                    /> */}
                </View>
                <Spacer height={50} />
            </ScrollView>
            <TouchableOpacity
                style={styles.absoluteButton}
                onPress={() => {
                    // if (!authData) {
                    //     showLoginModal()
                    //     return
                    // }
                    navigation.navigate('ListOfLawyersView' as never)
                }}
            >
                <FastImage style={{ height: 20, width: 20 }} source={ic_calendar_white} />
                <Spacer width={10} />
                <Text style={{ ...DefaultStyles.textRegular14White }}>'bookAppointment'</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeView

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    absoluteButton: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: scaleModerate(10),
        right: scaleModerate(30),
        padding: scaleModerate(15),
        backgroundColor: '#2C2D7F',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userBox: {
        paddingHorizontal: scaleModerate(15),
        paddingVertical: scaleModerate(5),
        alignItems: 'center',
    },
    headerText: {
        ...DefaultStyles.textBold22Black,
        color: Colors.whiteF2,
        fontSize: scaleModerate(16),
        textShadowColor: Colors.purple8D,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    bodyContainer: {
        padding: scaleModerate(10),
        borderTopRightRadius: scaleModerate(10),
        borderTopLeftRadius: scaleModerate(10),
        backgroundColor: 'white',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.border01,
        borderWidth: scaleModerate(1),
        borderRadius: scaleModerate(20),
        paddingHorizontal: scaleModerate(20),
        marginHorizontal: scaleModerate(25),
        height: scaleModerate(40),
    },
    containerNumberNotification: {
        position: 'absolute',
        top: scaleModerate(-3),
        right: scaleModerate(-8),
        backgroundColor: 'red',
        borderRadius: 5,
        width: scaleModerate(18),
        alignItems: 'center',
    },
    buttonNotification: {
        height: scaleModerate(30),
        aspectRatio: 1,
        borderWidth: scaleModerate(1),
        borderColor: Colors.gray44,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    containerUser: {
        backgroundColor: 'white',
        width: '93%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleModerate(5),
        paddingVertical: scaleModerate(4),
        borderRadius: 8,
    },
    input: {
        flex: 1,
        ...DefaultStyles.textRegular16Black,
    },
    itemContainer: {
        alignItems: 'center',
        width: scaleModerate(115),
    },
    textSubIcon: {
        ...DefaultStyles.textRegular14Black,
        textAlign: 'center',
        color: Colors.primary,
    },
    icon: {
        height: scaleModerate(48),
        width: scaleModerate(48),
        marginBottom: scaleModerate(5),
    },
})
