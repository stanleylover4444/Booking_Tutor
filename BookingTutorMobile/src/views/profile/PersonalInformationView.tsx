import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DefaultStyles } from '../../styles/DefaultStyles'
import HeaderV2 from '../components/HeaderV2'
import Input from '../components/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Spacer from '../components/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import { scaleModerate } from '../../styles/scaleDimensions'
import { IForm } from '../../interfaces'
import { getDirtyData } from '../../utils/dataUtils'
// import { showSuccessToast } from '../../utils/alertUtils'
import Selection from '../components/Selection'
import DateSelection from '../components/DateSelection'
import moment from 'moment'
import PriceBoxView from './components/PriceBoxView'
import { ADDRESS_DATA } from '../../constants/AddressData'

const PersonalInformationView = () => {
    const dispatch = useDispatch()
    // const priceBoxRef = useRef<any>()

    // const { data: userData } = useSelector((store: any) => store.auth)
    // const user = userData?.user

    // const { data: authData } = useSelector((store: any) => store.auth)
    // const { data: setting } = useSelector((store: any) => store.setting)

    // const dataSelect = setting?.setting?.expertise
   
    const gender = [
        { key: '1', name: 'male' },
        { key: '2', name: 'female' },
    ]

    // const [form, setForm] = useState<IForm>(() => {
    //     const initialForm = {
    //         fullName:
    //             authData?.type === 'lawyer'
    //                 ? { value: user?.fullName || '', error: false, message: '' }
    //                 : { value: user?.name || '', error: false, message: '' },
    //         phoneNumber:
    //             authData?.type === 'lawyer'
    //                 ? { value: user?.phoneNumber || '', error: false, message: '' }
    //                 : { value: user?.phone || '', error: false, message: '' },
    //         email: { value: user?.email || '', error: false, message: '' },
    //         dob: {
    //             value: user?.dob ? moment(user?.dob).format() : '',
    //             error: false,
    //             message: '',
    //         },
    //         gender: { value: user?.gender || '', error: false, message: '' },
    //         area: { value: user?.area || '', error: false, message: '' },
    //     }

    //     if (authData?.type === 'lawyer') {
    //         return {
    //             ...initialForm,
    //             experienceYear: { value: user?.experienceYear || '', error: false, message: '' },
    //             experienceDescription: {
    //                 value: user?.experienceDescription || '',
    //                 error: false,
    //                 message: '',
    //             },
    //             educationDescription: {
    //                 value: user?.educationDescription || '',
    //                 error: false,
    //                 message: '',
    //             },
    //             expertise: { value: user?.expertise, error: false, message: '' },
    //         }
    //     }

    //     return initialForm
    // })

    // const validateData = () => {
    //     const errors: any = {}
    //     let isValid = true

    //     if (!form.fullName.value) {
    //         errors.fullName = { error: true, message: 'nameRequired' }
    //         isValid = false
    //     }

    //     setForm((prevForm) => ({
    //         ...prevForm,
    //         fullName: { ...prevForm.fullName, ...errors.fullName },
    //     }))

    //     return isValid
    // }

    // const handleDateChange = (date: Date) => {
    //     const formattedDate = moment(date).format()
    //     setForm((prevForm) => ({
    //         ...prevForm,
    //         dob: { value: formattedDate, error: false, message: '' },
    //     }))
    // }

    const handleSave = () => {
        // if (!validateData()) return;
    
        // const updateData: any = {
        //     ...(authData?.type === 'lawyer'
        //         ? { fullName: form?.fullName?.value }
        //         : { name: form?.fullName?.value }),
        //     email: form?.email?.value,
        //     dob: form?.dob?.value,
        //     gender: form?.gender?.value,
        //     area: form?.area?.value,
        //     ...(authData?.type === 'lawyer' && {
        //         experienceYear: form?.experienceYear?.value,
        //         educationDescription: form?.educationDescription?.value,
        //         experienceDescription: form?.experienceDescription?.value,
        //         expertise: form?.expertise?.value,
        //     }),
        // };
    
        // console.log(updateData);
        //  const priceData = priceBoxRef?.current?.getData()
        // if (priceData) {
        //     updateData.priceData = priceData
        // }
        // const dirtyData = getDirtyData(updateData, user)
        // if (!dirtyData) return

        // dispatch(
        //     authData?.type === 'lawyer'
        //         ? updateUserAction({ id: user?.id, updateData: dirtyData }, (data: any) => {
        //               if (data) {
        //                   showSuccessToast(t('updateSuccess'))
        //               }
        //           })
        //         : updateCustomerAction({ id: user?.id, updateData: updateData }, (data: any) => {
        //             //   if (data) {
        //             //       showSuccessToast(t('updateSuccess'))
        //             //   }
        //             console.log("data" , data)
        //           })
        // )
    };
    


     

    return (
        <SafeAreaView style={DefaultStyles.container}>
            <HeaderV2 title='Thông tin tài khoản' isBack={true} type="simple" />
            <ScrollView>
            <KeyboardAwareScrollView style={DefaultStyles.wrapBody}>
                <Spacer height={16} />
                <Input
                    title={'Tên'}
                    // value={form?.fullName?.value}
                    // onChangeText={(text) =>
                    //     setForm({
                    //         ...form,
                    //         fullName: { value: text, error: false, message: '' },
                    //     })
                    // }
                    // error={form?.fullName?.error}
                />
                <Spacer height={scaleModerate(16)} />
                <Input
                    title={'Số điện thoại'}
                    editable={false}
                    // value={form?.phoneNumber?.value}
                    // onChangeText={(text) =>
                    //     setForm({
                    //         ...form,
                    //         phoneNumber: { value: text, error: false, message: '' },
                    //     })
                    // }
                    // error={form?.phoneNumber?.error}
                />
                <Spacer height={scaleModerate(16)} />
                <Input
                    title={'Gmail'}
                    // value={form?.email?.value}
                    // onChangeText={(text) =>
                    //     setForm({
                    //         ...form,
                    //         email: { value: text, error: false, message: '' },
                    //     })
                    // }
                />

                {/* {authData?.type === 'lawyer' && (
                    <> */}
                        <Spacer height={scaleModerate(16)} />
                        <Input
                            title={'Số năm kinh nghiêm'}
                            // value={form?.experienceYear?.value}
                            // onChangeText={(text) =>
                            //     setForm({
                            //         ...form,
                            //         experienceYear: { value: text, error: false, message: '' },
                            //     })
                            // }
                        />
                        <Spacer height={scaleModerate(16)} />
                        <Input
                            title={'Học vấn'}
                            // value={form?.educationDescription?.value}
                            // onChangeText={(text) =>
                            //     setForm({
                            //         ...form,
                            //         educationDescription: {
                            //             value: text,
                            //             error: false,
                            //             message: '',
                            //         },
                            //     })
                            // }
                        />
                        <Spacer height={scaleModerate(16)} />
                        <Input
                            title={'Kinh nghiệm'}
                            // value={form?.experienceDescription?.value}
                            // onChangeText={(text) =>
                            //     setForm({
                            //         ...form,
                            //         experienceDescription: {
                            //             value: text,
                            //             error: false,
                            //             message: '',
                            //         },
                            //     })
                            // }
                        />
                    {/* </>
                )} */}
                <Spacer height={scaleModerate(10)} />
                <DateSelection
                    title={'Ngày sinh'}
                    // date={
                    //     form.dob.value && moment(form.dob.value).isValid()
                    //         ? moment(form.dob.value).toDate()
                    //         : new Date()
                    // }
                    // onDateChange={handleDateChange}
                    // containerStyle={{ paddingVertical: scaleModerate(10) }}
                />
                <Spacer height={scaleModerate(10)} />
                {/* {authData?.type === 'lawyer' && ( */}
                    <View>
                        <Selection
                            title={'Lĩnh vực môn học'}
                            // data={dataSelect}
                            // keyValue={form?.expertise?.value}
                            // onSelect={(item: any) =>
                            //     setForm({
                            //         ...form,
                            //         expertise: { value: item?.key, error: false, message: '' },
                            //     })
                            // }
                        />
                        <Spacer height={scaleModerate(16)} />
                    </View>
                {/* )} */}

                <Selection
                    title={'Giới tính'}
                    data={gender}
                    // keyValue={form?.gender?.value}
                    // onSelect={(item: any) =>
                    //     setForm({
                    //         ...form,
                    //         gender: { value: item?.key, error: false, message: '' },
                    //     })
                    // }
                />
                <Spacer height={16} />
                <Selection
                    title={'Khu vực'}
                    hasSearch
                    data={ADDRESS_DATA?.map((item: any) => {
                        return { key: item?.codename, name: item?.name }
                    })}
                    // keyValue={form?.area?.value}
                    // onSelect={(item: any) => {
                    //     setForm({
                    //         ...form,
                    //         area: { value: item?.key, error: false, message: '' },
                    //     })
                    // }}
                    pickerStyle={{ height: '80%' }}
                />
                <Spacer height={20} />
                {/* {authData?.type === 'lawyer' && ( */}
                    <PriceBoxView 
                    // ref={priceBoxRef} 
                    // data={authData?.user?.priceData} 
                    />
                {/* )} */}
                <Spacer height={30} />

                <Button
                    title={'save'}
                    isColor
                    containerStyle={{ marginBottom: 30 }}
                    onPress={handleSave}
                />
            </KeyboardAwareScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonalInformationView

const styles = StyleSheet.create({})
