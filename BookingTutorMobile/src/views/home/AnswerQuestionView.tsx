import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DefaultStyles } from '../../styles/DefaultStyles'

import HeaderV2 from '../components/HeaderV2'
import { useNavigation } from '@react-navigation/native'
import { scaleModerate } from '../../styles/scaleDimensions'
import { useDispatch, useSelector } from 'react-redux'
import ItemQuestion from './itemComponents/itemQuestion'
import GenericModal from '../components/Modal'
import Spacer from '../components/Spacer'
import FastImage from 'react-native-fast-image'
import { Colors } from '../../styles/Colors'
import { ic_close, ic_uploadConmment } from '../../assets'

const AnswerQuestionView = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [replyText, setReplyText] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState<any>(null)
    const { data: authData } = useSelector((store: any) => store.auth)
    const { data: questions } = useSelector((state: any) => state.questions)
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false)

    const handleCloseModal = () => {
        setBottomSheetVisible(false)
    }

    const handleOpenModal = (question: any) => {
        setSelectedQuestion(question)
        setBottomSheetVisible(true)
    }

    const handleReplyQuestion = () => {
        const updateData: any = {
            userId: authData?.user?.id,
            answer: replyText,
        }
        // dispatch(
        //     updateQuestionsAction({ id: selectedQuestion?.id, updateData }, (data: any) => {
        //         if (data) {
        //             console.log('refreshDatarefreshDatarefreshData')
        //             refreshData()
        //         }
        //     })
        // )
        setBottomSheetVisible(false)
        setReplyText('')
    }

    useEffect(() => {
        refreshData()
    }, [])

    const refreshData = () => {
        // if (authData?.type === 'lawyer') {
        //     dispatch(
        //         getQuestionsAction({
        //             case: 'refresh',
        //             page: 0,
        //             pageSize: 10,
        //         })
        //     )
        // } else {
        //     const filter = {
        //         customerId: authData.user.id,
        //     }
        //     dispatch(getQuestionsAction({ where: filter }))
        // }
    }

    const loadMoreData = () => {
        if (!isLoading && questions.length > 9) {
            const filter = {
                customerId: authData.user.id,
            }
            setIsLoading(true)
            // dispatch(
            //     getQuestionsAction(
            //         {
            //             case: 'loadMore',
            //             page: currentPage + 1,
            //             pageSize: 10,
            //             where: {
            //                 filter,
            //             },
            //         },
            //         (data: any, error: any) => {
            //             if (data) {
            //                 setCurrentPage((prevPage) => prevPage + 1)
            //             }
            //             setIsLoading(false)
            //         }
            //     )
            // )
        }
    }

    return (
        <SafeAreaView style={DefaultStyles.container}>
            <HeaderV2 title={'listQuestions'} isBack={true} type="simple" />
            <View style={DefaultStyles.wrapBody}>
                <FlatList
                    data={questions}
                    renderItem={({ item }: any) => {
                        return (
                            <ItemQuestion question={item} openModal={() => handleOpenModal(item)} />
                        )
                    }}
                    keyExtractor={(item) => item?.id?.toString()}
                    contentContainerStyle={{ paddingBottom: 70 }}
                    showsVerticalScrollIndicator={false}
                    // refreshing={false}
                    // onRefresh={refreshData}
                    onEndReached={loadMoreData}
                    onEndReachedThreshold={0.5}
                />
            </View>
            <GenericModal visible={bottomSheetVisible} onClose={handleCloseModal} height={0.95}>
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
                        <TouchableOpacity onPress={handleCloseModal}>
                            <FastImage
                                style={{ height: scaleModerate(24), width: scaleModerate(24) }}
                                source={ic_close}
                            />
                        </TouchableOpacity>

                        <View
                            style={{ flex: 1, marginEnd: scaleModerate(24), alignItems: 'center' }}
                        >
                            <Text style={{ ...DefaultStyles.textBold16Black }}>
                                {'Trả lời câu hỏi'}
                            </Text>
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

                    <ScrollView
                        style={{ flex: 1, marginHorizontal: scaleModerate(15) }}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={{ ...DefaultStyles.textMedium16Black }}>Câu hỏi :</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginVertical: scaleModerate(10),
                                paddingHorizontal: scaleModerate(15),
                                borderWidth: 1,
                                borderRadius: 7,
                                borderColor: Colors.border01,
                                paddingVertical: 10,
                            }}
                        >
                            <FastImage
                                source={{ uri: selectedQuestion?.createdBy?.avatarUrl }}
                                style={styles.avataUserComment}
                            />

                            <View style={{ flex: 1 }}>
                                <View style={styles.itemComment}>
                                    <Text style={{ ...DefaultStyles.textMedium16Black }}>
                                        {selectedQuestion?.createdBy?.name || 'Anonymous'}
                                    </Text>
                                    <Text style={{ ...DefaultStyles.textRegular14Black }}>
                                        {selectedQuestion?.content}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {selectedQuestion?.answer != null && (
                            <>
                                <Text style={{ ...DefaultStyles.textMedium16Black }}>
                                    Trả lời :
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginVertical: scaleModerate(10),
                                        paddingHorizontal: scaleModerate(15),
                                        borderWidth: 1,
                                        borderRadius: 7,
                                        borderColor: Colors.border01,
                                        paddingVertical: 10,
                                    }}
                                >
                                    <FastImage
                                        source={{ uri: selectedQuestion?.answeredBy?.avatarUrl }}
                                        style={styles.avataUserComment}
                                    />

                                    <View style={{ flex: 1 }}>
                                        <View style={styles.itemComment}>
                                            <Text style={{ ...DefaultStyles.textMedium16Black }}>
                                                {selectedQuestion?.answeredBy?.fullName ||
                                                    'Anonymous'}
                                            </Text>
                                            <Text style={{ ...DefaultStyles.textRegular14Black }}>
                                                {selectedQuestion?.answer}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </>
                        )}
                    </ScrollView>

                    {authData?.type === 'lawyer' && (
                        <>
                            {selectedQuestion?.answer == null ? (
                                <KeyboardAvoidingView
                                    behavior="padding"
                                    keyboardVerticalOffset={65}
                                >
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
                                        <TextInput
                                            placeholder={'Trả lời'}
                                            placeholderTextColor="gray"
                                            style={styles.textInputComment}
                                            value={replyText}
                                            onChangeText={setReplyText}
                                        />
                                        <Spacer width={10} />
                                        <TouchableOpacity onPress={handleReplyQuestion}>
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
                            ) : null}
                        </>
                    )}
                </View>
            </GenericModal>
        </SafeAreaView>
    )
}

export default AnswerQuestionView

const styles = StyleSheet.create({
    label: {
        ...DefaultStyles.textBold16Black,
        paddingVertical: 10,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: scaleModerate(16),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textInputComment: {
        flex: 1,
        height: scaleModerate(40),
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: scaleModerate(20),
        paddingHorizontal: scaleModerate(15),
    },
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
