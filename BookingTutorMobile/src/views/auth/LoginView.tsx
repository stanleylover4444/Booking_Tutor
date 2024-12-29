import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import Header from '../components/Header';
import {DefaultStyles} from '../../styles/DefaultStyles';
import Spacer from '../components/Spacer';
import Input from '../components/Input';
import Button from '../components/Button';
import {IForm} from '../../interfaces';
import {useNavigation} from '@react-navigation/native';
import {defaultField, getFormValues} from '../../utils/formUtils';
import LoadingView from '../components/LoadingView';
import {Colors} from '../../styles/Colors';
import {scaleModerate} from '../../styles/scaleDimensions';
import FastImage from 'react-native-fast-image';
import {ic_home} from '../../assets';

const LoginView = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState<IForm>({
    username: defaultField,
    password: defaultField,
  });
  const [loading, setLoading] = useState(false);

  const isValidData = () => {
    let isValid = true;
    let usernameCheck = {error: false, message: ''};
    let passwordCheck = {error: false, message: ''};
    if (!form.username.value) {
      usernameCheck = {error: true, message: ''};
      isValid = false;
    }
    if (!form.password.value) {
      passwordCheck = {error: true, message: ''};
      isValid = false;
    }
    if (!isValid) {
      setForm({
        username: {...form.username, error: usernameCheck.error},
        password: {...form.password, error: passwordCheck.error},
      });
    }
    return isValid;
  };

  const handlePressSignUp = () => {
    navigation.navigate('ChooseRoleView' as never);
  };

  return (
    <SafeAreaView style={DefaultStyles.container}>
      <Header
        title={''}
        renderLeft={() => (
          <TouchableOpacity
            style={{padding: scaleModerate(5), marginLeft: scaleModerate(5)}}
            onPress={() => navigation.navigate('BottomTab' as never)}>
            <FastImage
              source={ic_home}
              style={{height: scaleModerate(20), aspectRatio: 1, opacity: 0.7}}
            />
          </TouchableOpacity>
        )}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[DefaultStyles.wrapBody, {flex: 1}]}>
          <Spacer height={30} />
          <View style={{alignItems: 'center'}}>
            <Text style={[DefaultStyles.textRegular14Black, {fontSize: 17}]}>
              Chào mừng trở lại
            </Text>
            <Spacer height={6} />
            <Text
              style={[
                DefaultStyles.textRegular16Black,
                {fontSize: scaleModerate(32)},
              ]}>
              Đăng nhập
            </Text>
            <Spacer height={30} />
          </View>

          <View style={{paddingHorizontal: scaleModerate(20)}}>
            <Input
              title={'Tài khoản'}
              keyboardType="phone-pad"
              value={form.username.value}
              onChangeText={text => {
                setForm({
                  ...form,
                  username: {value: text, error: false, message: ''},
                });
              }}
              error={form.username.error}
              message={form.username.message}
            />
            <Spacer height={20} />
            <Input
              title={'Mật khẩu'}
              type="password"
              value={form.password.value}
              onChangeText={text => {
                setForm({
                  ...form,
                  password: {value: text, error: false, message: ''},
                });
              }}
              error={form.password.error}
              message={form.password.message}
            />
          </View>
          <Spacer height={20} />
          <View style={{alignItems: 'center'}}></View>
          <Spacer height={20} />
          <Button isColor title={'Đăng nhập'} />
          <View style={{flex: 1}}></View>
          <View style={{alignItems: 'center'}}>
            <Text style={DefaultStyles.textRegular14Black}>
              Bạn chưa có tài khoản ?
            </Text>
          </View>
          <Spacer height={7} />
          <View style={{alignItems: 'center'}}>
            <Text onPress={handlePressSignUp} style={styles.signUp}>
              Đăng ký
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Spacer height={50} />
      <LoadingView loading={loading} />
    </SafeAreaView>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  signUp: {
    ...DefaultStyles.textRegular16Black,
    color: Colors.primary300,
  },
});
