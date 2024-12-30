import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Spacer from '../components/Spacer'
import { DefaultStyles } from '../../styles/DefaultStyles'
import {
    ic_alert_circle,
    ic_camera,
    ic_chevron_right,
    ic_close_circle,
    ic_log_out,
    ic_profile_circle,
    ic_question_mark,
    ic_shield,
} from '../../assets'
import FastImage from 'react-native-fast-image'
import { scaleModerate } from '../../styles/scaleDimensions'
import { Colors } from '../../styles/Colors'
import { useNavigation } from '@react-navigation/native'
import PhotoOptionsPicker from '../components/PhotoOptionsPicker'
import GlobalModalController from '../components/GlobalModal/GlobalModalController'
// import { GiftedAvatar } from 'react-native-gifted-chat'
import { SafeAreaView } from 'react-native-safe-area-context'


const ProfileView = () => {
    const dispatch = useDispatch()
    // const { data: userData } = useSelector((store: any) => store.auth)
    // const { data: settingData } = useSelector((store: any) => store.setting)
    const navigation = useNavigation()
    const [showCameraOption, setShowCameraOption] = useState(false)
    // const { data: authData } = useSelector((store: any) => store.auth)
    const handlePressLogout = async () => {
        // if (userData?.user?.installationId) {
        //     dispatch(
        //         deleteInstallationAction({
        //             installationId: userData?.user?.installationId,
        //         })
        //     )
        // }
        // if (userData?.user?.deviceToken) {
        //     await ChatService.shared().removePushToken(userData?.user?.deviceToken)
        // }
        // await ChatService.shared().logout()
        // dispatch(logoutAction())
    }

    const handleUploadAvatar = async (image: any) => {
        // const uploadedImage = await UploadPhoto(image)
        // if (uploadedImage?.url) {

        //     (authData?.type === 'lawyer'
        //         ?  dispatch(
        //             updateUserAction({
        //                 id: userData?.user?.id,
        //                 updateData: { avatarUrl: uploadedImage?.url },
        //             })
        //         )
        //         : dispatch(
        //             updateCustomerAction({
        //                 id: userData?.user?.id,
        //                 updateData: { avatarUrl: uploadedImage?.url },
        //             })
        //         ))
        // }
    }

    const handleDeleteAccount = () => {
        GlobalModalController.showModal({
            type: 'yesNo',
            title: 'deleteAccount',
            description: 'deleteAccountMessage',
            icon: 'warning',
        })
        GlobalModalController.onActionChange((isOk: boolean) => {
            if (isOk) {
                // dispatch(
                //     updateUserAction(
                //         { id: userData?.user?.id, updateData: { isActive: false } },
                //         () => {
                //             handlePressLogout()
                //         }
                //     )
                // )
            }
        })
    }

    return (
        <SafeAreaView style={DefaultStyles.container} edges={['top']}>
            <Header
                title={'profile'}
                renderRight={() => (
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.border01,
                            borderRadius: 25,
                        }}
                    >
                    
                    </View>
                )}
            />

            <ScrollView style={[DefaultStyles.wrapBody, { flex: 1 }]}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            // if (userData) {
                            //     setShowCameraOption(true)
                            // } else {
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
                        }
                    >
                        {/* <GiftedAvatar
                            user={
                                {
                                    name:
                                        (authData?.type === 'lawyer'
                                            ? authData?.user?.fullName
                                            : authData?.user?.name),
                                    avatar: userData?.user?.avatarUrl,
                                } as any
                            }
                            avatarStyle={{
                                height: scaleModerate(80),
                                width: scaleModerate(80),
                                borderRadius: scaleModerate(80),
                            }}
                        /> */}

                        <View style={[styles.iconRow, styles.camera]}>
                            <FastImage source={ic_camera} style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <Spacer height={5} />

                    {/* <Text style={{ ...DefaultStyles.textRegular20Black }}>
                        {userData?.user?.id}
                    </Text> */}

                    <Text style={{ ...DefaultStyles.textRegular20Black }}>
                        {/* {authData?.type === 'lawyer'
                            ? userData?.user?.fullName
                            : userData?.user?.name} */}
                    </Text>
                    <Text style={{ ...DefaultStyles.textRegular16Black, color: '#344054' }}>
                        {/* {authData?.type === 'lawyer'
                            ? userData?.user?.phoneNumber
                            : userData?.user?.phone} */}
                    </Text>
                    <Spacer height={20} />
                </View>
                <View>
                    {/* {userData && ( */}
                        <TouchableOpacity
                            style={styles.row}
                            onPress={() => {
                                navigation.navigate('PersonalInformationView' as never)
                            }}
                        >
                            <View style={[styles.iconRow, { backgroundColor: Colors.whiteE5 }]}>
                                <FastImage source={ic_profile_circle} style={styles.icon} />
                            </View>
                            <Text style={styles.text}>'personalInformation'</Text>
                            <FastImage source={ic_chevron_right} style={styles.rightIcon} />
                        </TouchableOpacity>
                    {/* )} */}
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => {
                            Linking.openURL('https://luathoasen.vn/ve-chung-toi/')
                        }}
                    >
                        <View style={[styles.iconRow, { backgroundColor: Colors.whiteE5 }]}>
                            <FastImage source={ic_question_mark} style={styles.icon} />
                        </View>
                        <Text style={styles.text}>'aboutUs'</Text>
                        <FastImage source={ic_chevron_right} style={styles.rightIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => {
                            navigation.navigate(
                                ...([
                                    'WebDataView',
                                    {
                                        title: '',
                                        // uri: settingData?.setting?.termUrl || '',
                                    },
                                ] as never)
                            )
                        }}
                    >
                        <View style={[styles.iconRow, { backgroundColor: Colors.whiteE5 }]}>
                            <FastImage source={ic_alert_circle} style={styles.icon} />
                        </View>
                        <Text style={styles.text}>'termsAndConditions'</Text>
                        <FastImage source={ic_chevron_right} style={styles.rightIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => {
                            navigation.navigate(
                                ...([
                                    'WebDataView',
                                    {
                                        title: '',
                                        // uri: settingData?.setting?.privacyUrl || '',
                                    },
                                ] as never)
                            )
                        }}
                    >
                        <View style={[styles.iconRow, { backgroundColor: Colors.whiteE5 }]}>
                            <FastImage source={ic_shield} style={styles.icon} />
                        </View>
                        <Text style={styles.text}>'privacyPolicy'</Text>
                        <FastImage source={ic_chevron_right} style={styles.rightIcon} />
                    </TouchableOpacity>

                    {/* {userData && ( */}
                        <TouchableOpacity style={styles.row} onPress={handleDeleteAccount}>
                            <View style={[styles.iconRow, { backgroundColor: Colors.whiteE5 }]}>
                                <FastImage source={ic_close_circle} style={styles.icon} />
                            </View>
                            <Text style={styles.text}>'deleteAccount'</Text>
                            <FastImage source={ic_chevron_right} style={styles.rightIcon} />
                        </TouchableOpacity>
                    {/* )} */}

                    {/* {userData && ( */}
                        <TouchableOpacity style={styles.row} onPress={handlePressLogout}>
                            <View style={[styles.iconRow, { backgroundColor: Colors.whiteE5 }]}>
                                <FastImage
                                    source={ic_log_out}
                                    style={{ height: scaleModerate(16), width: scaleModerate(16) }}
                                />
                            </View>
                            <Text style={styles.text}>'logOut'</Text>
                            <FastImage source={ic_chevron_right} style={styles.rightIcon} />
                        </TouchableOpacity>
                    {/* )} */}
                </View>
                <PhotoOptionsPicker
                    isVisible={showCameraOption}
                    onSelectPhoto={(image) => {
                        handleUploadAvatar(image)
                    }}
                    onClose={() => {
                        setShowCameraOption(false)
                    }}
                />
            </ScrollView>
           
        </SafeAreaView>
    )
}

export default ProfileView

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scaleModerate(10),
    },
    iconRow: {
        height: scaleModerate(30),
        width: scaleModerate(30),
        borderRadius: scaleModerate(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: scaleModerate(18),
        width: scaleModerate(18),
    },
    rightIcon: {
        height: scaleModerate(24),
        width: scaleModerate(24),
    },
    text: {
        flex: 1,
        marginLeft: scaleModerate(10),
        ...DefaultStyles.textRegular14Black,
    },
    camera: {
        backgroundColor: Colors.blueB9,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
})
