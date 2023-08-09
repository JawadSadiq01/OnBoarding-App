import { Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react';
import { firebase } from '@react-native-firebase/auth';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import { IsValidEmail, IsValidPassword } from '../../components/Validation';
import ShowToast from '../../components/ShowToast';

const SignUp = (props: any) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [check_password, set_check_Password] = useState('');

  const onSignUp = async () => {
    setLoading(true);
    if (!IsValidEmail(email)) {
      ShowToast('Invalid email address');
      setLoading(false);
    } else if (!IsValidPassword(password)) {
      ShowToast('Week password try a strong one');
      setLoading(false);
    } else if (password != check_password) {
      ShowToast('Password does not match');
      setLoading(false);
    } else {
      await firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
        ShowToast('User registered successfully');
        console.log(res);
        setLoading(false);
        navigation.navigate('login');
      }).catch((error: any) => {
        if (error.code === 'auth/email-already-in-use') {
          ShowToast('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          ShowToast('That email address is invalid!');
        }
        // console.error('Error signing up:', error.message);
        setLoading(false);
      });
    }
  };

  const onLogin = async () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.appLogo} source={require('../../assets/Images/firebase_logo.png')} />
        <CustomInput
          placeholder="Email"
          value={email}
          setvalue={setEmail}
          secureTextEntry={false}
          heading="Email"
        />

        <CustomInput
          placeholder="password"
          value={password}
          setvalue={setPassword}
          secureTextEntry={true}
          heading="Password"
        />

        <CustomInput
          placeholder="repeat password"
          value={check_password}
          setvalue={set_check_Password}
          secureTextEntry={true}
          heading="Repeat password"
        />

        <Text style={{ color: "gray", padding: 20 }}>
          By registering you confirm that you accept our{" "}
          <Text style={{ color: "#f07d20" }}>Terms of Use</Text>{" "}
          and {" "}
          <Text style={{ color: "#f07d20" }}>Privacy Policy</Text>
        </Text>

        <CustomButton placeholder="Sign up" loading={loading} onPress={onSignUp} />
        <CustomButton placeholder="Already have an account? Sign in. " onPress={onLogin} type='forget' />
      </ScrollView>
    </View>

  )
}
export default SignUp