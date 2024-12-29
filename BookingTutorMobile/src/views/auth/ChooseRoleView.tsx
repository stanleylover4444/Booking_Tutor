import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from '../components/Header';
import {DefaultStyles} from '../../styles/DefaultStyles';
import Spacer from '../components/Spacer';
import {Colors} from '../../styles/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../styles/Fonts';
import GlobalModalController from '../components/GlobalModal/GlobalModalController';
import {scaleModerate} from '../../styles/scaleDimensions';

const ChooseRoleView = () => {
  const navigation = useNavigation();

  const handlePressSignUpRoleCustomer = () => {
    navigation.navigate('RegisterCustomerView' as never);
  };
  const handlePressSignUpRoleLaywer = () => {
    navigation.navigate('RegisterTutorView' as never);
  };

  return (
    <SafeAreaView style={DefaultStyles.container}>
      <Header title={''} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={DefaultStyles.wrapBody}>
          <Spacer height={100} />
          <View style={{alignItems: 'center'}}>
            <Text style={styles.headerText}>{'Bạn là ai' + '?'}</Text>
          </View>

          <Spacer height={20} />
          <Button
            isColor
            title={'Học sinh / Sinh viên'}
            onPress={handlePressSignUpRoleCustomer}
          />

          <Spacer height={20} />
          <Button
            isColor
            title={'Gia sư'}
            onPress={handlePressSignUpRoleLaywer}
          />
          <Spacer height={100} />

          <View style={{alignItems: 'center'}}>
            <Spacer height={10} />
            <Text
              style={{
                textDecorationLine: 'underline',
                color: Colors.primary300,
              }}
              onPress={() => {
                navigation.navigate('LoginView' as never);
              }}>
              {'Tôi đã có tài khoản'}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={{flex: 1}}></View>
    </SafeAreaView>
  );
};

export default ChooseRoleView;

const styles = StyleSheet.create({
  signUp: {
    ...DefaultStyles.textMedium13Black,
    textTransform: 'uppercase',
  },
  headerText: {
    fontSize: scaleModerate(24),
    ...Fonts.Medium,
    color: Colors.primary300,
  },
});
