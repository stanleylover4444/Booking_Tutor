import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DefaultStyles } from '../../styles/DefaultStyles'
import HeaderV2 from '../components/HeaderV2'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import {
    ic_docs,
    ic_group,
    ic_phone,
    ic_balence,
    ic_calendar,
    ic_bell_outline,
    ic_report,
    // ic_newsVideo,
    // ic_question,
} from '../../assets'
import { Colors } from '../../styles/Colors'
import { useSelector } from 'react-redux'
import { scaleModerate } from '../../styles/scaleDimensions'

const FeatureListView = () => {
    const navigation = useNavigation()
    const { data: authData } = useSelector((store: any) => store.auth)
    const handlePressFindLawyer = () => navigation.navigate('ListOfLawyersView' as never)
    const handlePressCallLawyer = () => navigation.navigate('CallLawyersView' as never)
    const handlePressLawyerFees = () => navigation.navigate('LawyerFeesView' as never)
    const handlePressAppointment = () => navigation.navigate('AppointmentListView' as never)
    const handlePressFeeLookup = () => navigation.navigate('CourtFeesView' as never)
    const handlePressManagementNews = () => navigation.navigate('ManagementNewsView' as never)
    const handlePressManagementDocs = () => navigation.navigate('AnswerQuestionView' as never)

    const features = [
        {
            key: '1',
            title: 'callLawyer',
            icon: ic_phone,
            functionName: handlePressCallLawyer,
        },
        {
            key: '2',
            title:'lookupAttorneyFee',
            icon: ic_balence,
            functionName: handlePressLawyerFees,
        },
        {
            key: '3',
            title: "findLawyer",
            icon: ic_group,
            functionName: handlePressFindLawyer,
        },
        {
            key: '4',
            title:
             "customerAppointment",
            icon: ic_calendar,
            functionName: handlePressAppointment,
        },
        {
            key: '5',
            title: 'feeLookup',
            icon: ic_docs,
            functionName: handlePressFeeLookup,
        },
        {
            key: '6',
            title:'managementNews',
            // icon: ic_newsVideo,
            functionName: handlePressManagementNews,
        },
        {
            key: '7',
            title: 'listQuestions',
            // icon: ic_question,
            functionName: handlePressManagementDocs,
        },
    ]

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.featureItem} onPress={item.functionName}>
            <FastImage source={item.icon} style={{ height: 36, width: 36 }} />
            <Text style={styles.featureTitle}>{item.title}</Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={DefaultStyles.container}>
            <HeaderV2 title='feature' isBack={true} type="simple" />
            <View style={{}}>
                <FlatList
                    data={features}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default FeatureListView

const styles = StyleSheet.create({
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: scaleModerate(16),
        borderBottomWidth: 1,
        borderBottomColor: Colors.border01,
    },
    featureTitle: {
        marginLeft: scaleModerate(12),
        ...DefaultStyles.textMedium16Black,
        color: Colors.primary,
    },
})
