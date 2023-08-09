import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react';
import { firebase } from '@react-native-firebase/auth';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const SignUp = (props: any) => {
  const { navigation } = props;
  const [email, setEmail] = useState('hdrali036@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);
  const [check_password, set_check_Password] = useState('');

  const onSignUp = async () => {
    setLoading(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
      showToast('User registered successfully');
      console.log(res);
      setLoading(false);
      navigation.navigate('login');
    }).catch((error: any) => {
      if (error.code === 'auth/email-already-in-use') {
        showToast('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        showToast('That email address is invalid!');
      }
      // console.error('Error signing up:', error.message);
      setLoading(false);
    });

  };

  const onLogin = async () => {
    navigation.navigate('login');
  };

  const showToast = (props: any) => {
    ToastAndroid.show(props, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.redmilogo} source={require('../../assets/Images/firebase_logo.png')} />
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