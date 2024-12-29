import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../components/Header';
import {DefaultStyles} from '../../styles/DefaultStyles';
import Spacer from '../components/Spacer';
import Input from '../components/Input';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';
import {IForm} from '../../interfaces';
import {useNavigation} from '@react-navigation/native';
import {defaultField} from '../../utils/formUtils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GlobalModalController from '../components/GlobalModal/GlobalModalController';
import {parseError} from '../../utils/errorUtils';
import {Colors} from '../../styles/Colors';
import LoadingView from '../components/LoadingView';
import Selection from '../components/Selection';
import {scaleModerate} from '../../styles/scaleDimensions';
import { AppDispatch } from '../../store';
import { registerAction } from '../../store/actions/authActions';

const RegisterTutorView = () => {
   const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const [form, setForm] = useState<IForm>({
    name: defaultField,
    username: defaultField,
    expertise: defaultField,
    password: defaultField,
    reTypePassword: defaultField,
  });

  const [loading, setLoading] = useState(false);
  const isValidData = () => {
    let isValid = true;
    let nameCheck = {error: false, message: ''};
    let usernameCheck = {error: false, message: ''};
    let expertiseCheck = {error: false, message: ''};
    let passwordCheck = {error: false, message: ''};
    let reTypePasswordCheck = {error: false, message: ''};
    if (!form.name.value) {
      nameCheck = {error: true, message: ''};
      isValid = false;
    }
    if (!form.username.value) {
      usernameCheck = {error: true, message: ''};
      isValid = false;
    }
    if (!form.expertise.value) {
      expertiseCheck = {error: true, message: ''};
      isValid = false;
    }
    if (!form.password.value) {
      passwordCheck = {error: true, message: ''};
      isValid = false;
    }
    if (!form.reTypePassword.value) {
      reTypePasswordCheck = {error: true, message: ''};
      isValid = false;
    }
    if (!isValid) {
      setForm({
        name: {...form.name, error: nameCheck.error},
        username: {...form.username, error: usernameCheck.error},
        expertise: {...form.expertise, error: expertiseCheck.error},
        password: {...form.password, error: passwordCheck.error},
        reTypePassword: {
          ...form.reTypePassword,
          error: reTypePasswordCheck.error,
        },
      });
    }
    if (isValid && form.password.value !== form.reTypePassword.value) {
      GlobalModalController.showModal({
        title: 'signUp',
        description: 'confirmPasswordNotMatch',
        icon: 'fail',
      });
      isValid = false;
    }
    return isValid;
  };

  const handleRegister = () => {
      if (isValidData()) {
        setLoading(true);
        const postData = {
          name: form?.name?.value,
          phone: form?.username?.value,
          password: form?.password?.value,
          email: form?.email?.value,
        };
        dispatch(registerAction(postData))
          .unwrap()
          .then((data: any) => {
            setLoading(false);
            console.log('postDatapostDatapostData', postData);
            GlobalModalController.showModal({
              title: 'Đăng ký thành công',
              description: 'Chúc mừng bạn đã đăng ký thành công!',
              icon: 'success',
            });
            GlobalModalController.onActionChange(() => {
              navigation.navigate('LoginView' as never);
            });
          })
          .catch((error: any) => {
            setLoading(false);
            GlobalModalController.showModal({
              title: 'Đăng ký thất bại',
              description: parseError(error).message,
              icon: 'fail',
            });
          });
      }
    };

  return (
    <SafeAreaView style={DefaultStyles.container}>
      <Header title={''} isBack={true} />
      <KeyboardAwareScrollView>
        <View style={DefaultStyles.wrapBody}>
          <Spacer height={6} />
          <View style={{alignItems: 'center'}}>
            <Text style={DefaultStyles.textBold24Black}>Đăng ký gia sư</Text>
          </View>
          <Spacer height={35} />
          <View style={{paddingHorizontal: scaleModerate(20)}}>
            <Input
              title={'Tên*'}
              value={form.name?.value}
              onChangeText={text => {
                setForm({
                  ...form,
                  name: {value: text, error: false, message: ''},
                });
              }}
              error={form.name?.error}
              message={form.name?.message}
            />
            <Spacer height={20} />

            <Selection
              title={'Trình độ' + '*'}
              // data={dataSelect}
              onSelect={(item: any) => {
                setForm({
                  ...form,
                  expertise: {value: item?.name, error: false, message: ''},
                });
              }}
              error={form.expertise?.error}
            />

            <Spacer height={20} />

            <Input
              title={'Gmail'}
              value={form.email?.value}
              onChangeText={text => {
                setForm({
                  ...form,
                  email: {...form.email, value: text},
                });
              }}
              error={form.email?.error}
            />

            <Spacer height={20} />
            <Input
              title={'Số điện thoại' + '* (Tên đăng nhập)'}
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
              title={'Mật khẩu' + '*'}
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
            <Spacer height={20} />
            <Input
              title={'Xác nhận mật khẩu' + '*'}
              type="password"
              value={form.reTypePassword.value}
              onChangeText={text => {
                setForm({
                  ...form,
                  reTypePassword: {value: text, error: false, message: ''},
                });
              }}
              error={form.reTypePassword.error}
              message={form.reTypePassword.message}
            />
          </View>
          <Spacer height={20} />

          <View style={{alignItems: 'center'}}>
            <Text
              style={[DefaultStyles.textRegular14Black, {textAlign: 'center'}]}>
              Bằng việc đăng ký tào khoản bạn đồng ý với các
            </Text>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: Colors.primary300,
              }}
              onPress={() => {
                // navigation.navigate(
                //   ...([
                //     'WebDataView',
                //     {
                //       title: '',
                //       uri: setting?.setting?.termUrl || '',
                //     },
                //   ] as never),
                // );
              }}>
              Điều khoản và quy định chung
            </Text>
          </View>
          <Spacer height={16} />
          <Button isColor title={'Đăng ký'} />
          <Spacer height={30} />
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: Colors.primary300,
              }}
              onPress={() => {
                navigation.navigate('LoginView' as never);
              }}>
              Tôi đã có tài khoản
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <LoadingView loading={loading} />
    </SafeAreaView>
  );
};

export default RegisterTutorView;

const styles = StyleSheet.create({
  signUp: {
    ...DefaultStyles.textMedium13Black,
    textTransform: 'uppercase',
  },
});
