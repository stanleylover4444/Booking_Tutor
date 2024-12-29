import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './BottomTab'
const InStack = createNativeStackNavigator()
const InsideStack = () => {
    return (
        <InStack.Navigator
            // initialRouteName={initScreen}
            screenOptions={{
                headerShown: false,
            }}
        >
            <InStack.Screen name="BottomTab" component={BottomTab} />
        </InStack.Navigator>
    )
}

export default InsideStack

const styles = StyleSheet.create({})
