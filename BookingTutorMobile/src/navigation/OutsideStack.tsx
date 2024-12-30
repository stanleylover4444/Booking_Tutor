import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginView from '../views/auth/LoginView';
import RegisterLawyerView from '../views/auth/RegisterTutorView';
import ChooseRoleView from '../views/auth/ChooseRoleView';
import RegisterCustomerView from '../views/auth/RegisterCustomerView';
import RegisterTutorView from '../views/auth/RegisterTutorView';
import BottomTab from './BottomTab';

const OutStack = createNativeStackNavigator();

const OutsideStack = () => {
  return (
    <OutStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OutStack.Screen name="BottomTab" component={BottomTab} />
      <OutStack.Screen name="LoginView" component={LoginView} />
      <OutStack.Screen name="ChooseRoleView" component={ChooseRoleView} />
      <OutStack.Screen
        name="RegisterCustomerView"
        component={RegisterCustomerView}
      />
      <OutStack.Screen name="RegisterTutorView" component={RegisterTutorView} />
    </OutStack.Navigator>
  );
};

export default OutsideStack;

const styles = StyleSheet.create({});
