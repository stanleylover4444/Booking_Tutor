import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { ic_close } from '../../../assets'
import { DefaultStyles } from '../../../styles/DefaultStyles'
import GenericModal from '../../components/Modal'
import Spacer from '../../components/Spacer'
import { Colors } from '../../../styles/Colors'
import { scaleModerate } from '../../../styles/scaleDimensions'
import Button from '../../components/Button'

interface ReportPostModalProps {
    visible: boolean
    onClose: () => void
}

const ReportPostModal: React.FC<ReportPostModalProps> = ({ visible, onClose }) => {
    return (
        <GenericModal visible={visible} onClose={onClose}  height={0.6}>
            <View style={{ flex: 1, width: '100%' }}>
                <Spacer height={10} />
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: scaleModerate(15),
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity onPress={onClose}>
                        <FastImage style={styles.closeIcon} source={ic_close} />
                    </TouchableOpacity>

                    <View style={{ flex: 1, marginEnd: scaleModerate(24), alignItems: 'center' }}>
                        <Text style={{ ...DefaultStyles.textBold16Black }}>
                            {'reportArticle'}
                        </Text>
                    </View>
                </View>
                <View style={styles.lineHeader}></View>

                <Spacer height={20} />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderColor: Colors.border01,
                        borderWidth: scaleModerate(1),
                        paddingHorizontal: scaleModerate(20),
                        marginHorizontal: scaleModerate(25),
                        height: scaleModerate(40),
                    }}
                >
                    <TextInput placeholder={"pleaseEnterReport"} />
                </View>
            </View>
            <Button
                isColor
                title={'send'}
                // onPress={handleApplyFilters}
                containerStyle={{
                    paddingHorizontal: scaleModerate(15),
                    marginBottom: scaleModerate(20),
                }}
            />
        </GenericModal>
    )
}

export default ReportPostModal

const styles = {
    closeIcon: {
        width: scaleModerate(24),
        height: scaleModerate(24),
    },
    lineHeader: {
        marginTop: scaleModerate(15),
        borderBottomWidth: 1,
        borderColor: Colors.border01,
    },
}
